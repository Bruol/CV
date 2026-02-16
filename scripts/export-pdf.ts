import { createServer } from 'node:http'
import { mkdir, readFile } from 'node:fs/promises'
import { resolve, join, extname } from 'node:path'
import { chromium } from 'playwright'

const OUTPUT_DIR = resolve(process.cwd(), 'dist')

const ROUTES = [
  { path: '/', filename: 'cv.pdf' },
]

const PORT = Number(process.env.PORT ?? 4173)
const BASE_URL = `http://localhost:${PORT}`

const MIME: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
}

// Simple static server with SPA fallback for client-side routing
const app = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', BASE_URL)
  const filePath = join(OUTPUT_DIR, url.pathname)

  try {
    const ext = extname(filePath)
    if (ext && ext !== '.html') {
      const content = await readFile(filePath)
      res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' })
      res.end(content)
      return
    }
  } catch {
    // fall through to SPA fallback
  }

  // SPA fallback: serve index.html for all routes
  try {
    const indexPath = join(OUTPUT_DIR, 'index.html')
    const content = await readFile(indexPath, 'utf-8')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(content)
  } catch {
    res.writeHead(404)
    res.end('Not Found')
  }
})

const startServer = () =>
  new Promise<void>((resolve) => {
    app.listen(PORT, () => {
      console.log(`Static server with SPA fallback listening on ${BASE_URL}`)
      resolve()
    })
  })

try {
  await mkdir(OUTPUT_DIR, { recursive: true })
  await startServer()

  const browser = await chromium.launch()

  for (const route of ROUTES) {
    const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } })
    const url = `${BASE_URL}${route.path}`
    const outputPath = resolve(OUTPUT_DIR, route.filename)

    await page.goto(url, { waitUntil: 'networkidle' })
    await page.emulateMedia({ media: 'print' })

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    })

    await page.close()
    console.log(`Saved PDF to ${outputPath}`)
  }

  await browser.close()
  app.close()
  console.log(`\nAll ${ROUTES.length} PDFs exported successfully.`)
} catch (error) {
  app.close()
  console.error(error)
  process.exit(1)
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { CVSwiss } from './designs/CVSwiss.tsx'
import { CVTerminal } from './designs/CVTerminal.tsx'
import { CVEditorial } from './designs/CVEditorial.tsx'
import { CVBrutalist } from './designs/CVBrutalist.tsx'
import { CVDeco } from './designs/CVDeco.tsx'
import { CV6 } from './designs/CV6.tsx'
import { CV7 } from './designs/CV7.tsx'
import { CV8 } from './designs/CV8.tsx'
import { CV9 } from './designs/CV9.tsx'
import { CV10 } from './designs/CV10.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/1" element={<CVSwiss />} />
        <Route path="/2" element={<CVTerminal />} />
        <Route path="/3" element={<CVEditorial />} />
        <Route path="/4" element={<CVBrutalist />} />
        <Route path="/5" element={<CVDeco />} />
        <Route path="/6" element={<CV6 />} />
        <Route path="/7" element={<CV7 />} />
        <Route path="/8" element={<CV8 />} />
        <Route path="/9" element={<CV9 />} />
        <Route path="/10" element={<CV10 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

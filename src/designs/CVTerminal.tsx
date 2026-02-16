import { cv } from "../data/cv";

/**
 * Design 2: Dark Terminal / Hacker Aesthetic
 *
 * Phosphor-green on near-black. Monospace everything.
 * Cursor blink, scan-line overlay, command-prompt structure.
 * A4 single-page PDF-ready.
 */
export function CVTerminal() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Fira+Code:wght@400;500;700&display=swap');

        .term-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #0c0c0c;
          color: #b5e853;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 7.8pt;
          line-height: 1.45;
          position: relative;
          box-sizing: border-box;
          padding: 14mm 16mm 10mm 16mm;
        }

        @media screen {
          .term-page {
            box-shadow: 0 0 80px rgba(181,232,83,0.08), 0 20px 60px rgba(0,0,0,0.5);
            margin-top: 40px;
            margin-bottom: 40px;
            border: 1px solid #1a2a0e;
          }
          body { background: #050505; }
        }

        @media print {
          body { background: #0c0c0c; }
          .term-page { box-shadow: none; margin: 0; }
        }

        @page { size: A4; margin: 0; }

        /* CRT scanline overlay */
        .term-page::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.08) 2px,
            rgba(0,0,0,0.08) 4px
          );
          pointer-events: none;
        }

        .term-prompt {
          color: #6a9f35;
          user-select: none;
        }

        .term-cursor {
          display: inline-block;
          width: 7px;
          height: 12px;
          background: #b5e853;
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 1.2s step-end infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @media print {
          .term-cursor { animation: none; opacity: 1; }
        }

        .term-header {
          border-bottom: 1px solid #2a3a15;
          padding-bottom: 8px;
          margin-bottom: 8px;
        }

        .term-name {
          font-size: 20pt;
          font-weight: 700;
          color: #d4fc79;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .term-tagline {
          color: #6a9f35;
          font-size: 7.5pt;
          margin-top: 3px;
        }

        .term-contact-row {
          display: flex;
          gap: 16px;
          margin-top: 4px;
          font-size: 7pt;
          color: #8bb84e;
        }

        .term-contact-row a {
          color: #d4fc79;
          text-decoration: none;
          border-bottom: 1px dotted #4a6e28;
        }

        .term-section {
          margin-top: 7px;
        }

        .term-section-header {
          font-size: 7pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #d4fc79;
          background: #151f0a;
          padding: 2px 6px;
          display: inline-block;
          margin-bottom: 4px;
        }

        .term-entry {
          padding: 2px 0;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
        }

        .term-entry-title {
          color: #ccea8f;
          font-weight: 500;
        }

        .term-entry-period {
          color: #4a6e28;
          font-size: 7pt;
          text-align: right;
          white-space: nowrap;
        }

        .term-entry-detail {
          color: #7ba544;
          font-size: 7pt;
          padding-left: 16px;
          position: relative;
        }

        .term-entry-detail::before {
          content: '|';
          position: absolute;
          left: 6px;
          color: #2a3a15;
        }

        .term-entry-detail a {
          color: #d4fc79;
          text-decoration: none;
        }

        .term-skills-block {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 1px 8px;
          font-size: 7.5pt;
        }

        .term-skills-key {
          color: #d4fc79;
          font-weight: 500;
        }

        .term-skills-val {
          color: #7ba544;
        }

        .term-divider {
          border: none;
          border-top: 1px dashed #2a3a15;
          margin: 4px 0;
        }

        .term-footer {
          position: absolute;
          bottom: 10mm;
          left: 16mm;
          right: 16mm;
          font-size: 6.5pt;
          color: #3a5520;
          display: flex;
          justify-content: space-between;
        }
      `}</style>

      <div className="term-page">
        <div className="term-header">
          <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '7pt', color: '#3a5520', marginBottom: '4px' }}>
            <span className="term-prompt">guest@lorin-cv ~ $</span> cat resume.json
          </div>
          <div className="term-name">{cv.name}<span className="term-cursor" /></div>
          <div className="term-tagline">{cv.tagline}</div>
          <div className="term-contact-row">
            <span>{cv.contact.email}</span>
            <span>{cv.contact.phone}</span>
            <a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a>
            <a href={cv.contact.github.url}>{cv.contact.github.label}</a>
            <a href={cv.contact.website.url}>{cv.contact.website.label}</a>
          </div>
        </div>

        {/* Education */}
        <div className="term-section">
          <div className="term-section-header">// Education</div>
          {cv.education.map((e, i) => (
            <div key={i}>
              <div className="term-entry">
                <span className="term-entry-title">{e.institution} &mdash; {e.degree}</span>
                <span className="term-entry-period">{e.period}</span>
              </div>
              <div className="term-entry-detail">{e.detail}</div>
            </div>
          ))}
        </div>

        <hr className="term-divider" />

        {/* Experience */}
        <div className="term-section">
          <div className="term-section-header">// Work Experience</div>
          {cv.experience.map((e, i) => (
            <div key={i}>
              <div className="term-entry">
                <span className="term-entry-title">
                  {e.title}{e.company ? ` @ ${e.company}` : ''}
                </span>
                <span className="term-entry-period">{e.period}</span>
              </div>
              <div className="term-entry-detail">
                {e.link && (
                  <><a href={e.link.url} target="_blank" rel="noreferrer">[{e.link.label}]</a> </>
                )}
                {e.description}
              </div>
            </div>
          ))}
        </div>

        <hr className="term-divider" />

        {/* Projects */}
        <div className="term-section">
          <div className="term-section-header">// Projects</div>
          {cv.projects.map((p, i) => (
            <div key={i}>
              <div className="term-entry">
                <span className="term-entry-title">
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#ccea8f', textDecoration: 'none' }}>
                    {p.name}
                  </a>
                </span>
                <span className="term-entry-period">{p.period}</span>
              </div>
              <div className="term-entry-detail">{p.description}</div>
            </div>
          ))}
        </div>

        <hr className="term-divider" />

        {/* Skills */}
        <div className="term-section">
          <div className="term-section-header">// Skills</div>
          <div className="term-skills-block">
            <span className="term-skills-key">languages:</span>
            <span className="term-skills-val">{cv.skills.languages}</span>
            <span className="term-skills-key">advanced:</span>
            <span className="term-skills-val">{cv.skills.advanced}</span>
            <span className="term-skills-key">good:</span>
            <span className="term-skills-val">{cv.skills.good}</span>
            <span className="term-skills-key">soft:</span>
            <span className="term-skills-val">{cv.skills.soft}</span>
            <span className="term-skills-key">interests:</span>
            <span className="term-skills-val">{cv.skills.interests}</span>
          </div>
        </div>

        <div className="term-footer">
          <span><span className="term-prompt">$</span> echo "Generated with care"</span>
          <span>EOF</span>
        </div>
      </div>
    </>
  );
}

import { cv } from "../data/cv";

/**
 * Design 5: Luxury / Art Deco
 *
 * Deep charcoal background, gold foil accents, geometric Art Deco borders.
 * Elegant Cormorant Garamond display + Raleway body.
 * Refined, premium feel. A4 single-page PDF-ready.
 */
export function CVDeco() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700&family=Raleway:wght@300;400;500;600&display=swap');

        .deco-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #1c1c1e;
          color: #e8e4dc;
          font-family: 'Raleway', sans-serif;
          font-size: 7.8pt;
          line-height: 1.45;
          position: relative;
          box-sizing: border-box;
          padding: 12mm 14mm 10mm 14mm;
        }

        @media screen {
          .deco-page {
            box-shadow: 0 30px 100px rgba(0,0,0,0.4);
            margin-top: 40px;
            margin-bottom: 40px;
          }
          body { background: #0e0e0f; }
        }

        @media print {
          body { background: #1c1c1e; }
          .deco-page { box-shadow: none; margin: 0; }
        }

        @page { size: A4; margin: 0; }

        /* Inner border - Art Deco frame */
        .deco-page::before {
          content: '';
          position: absolute;
          inset: 6mm;
          border: 1px solid rgba(195,163,97,0.25);
          pointer-events: none;
        }

        .deco-page::after {
          content: '';
          position: absolute;
          inset: 7.5mm;
          border: 0.5px solid rgba(195,163,97,0.12);
          pointer-events: none;
        }

        /* Corner ornaments */
        .deco-corner {
          position: absolute;
          width: 18px;
          height: 18px;
        }

        .deco-corner::before,
        .deco-corner::after {
          content: '';
          position: absolute;
          background: #c3a361;
        }

        .deco-corner--tl { top: 6mm; left: 6mm; }
        .deco-corner--tl::before { top: 0; left: 0; width: 18px; height: 1.5px; }
        .deco-corner--tl::after { top: 0; left: 0; width: 1.5px; height: 18px; }

        .deco-corner--tr { top: 6mm; right: 6mm; }
        .deco-corner--tr::before { top: 0; right: 0; width: 18px; height: 1.5px; }
        .deco-corner--tr::after { top: 0; right: 0; width: 1.5px; height: 18px; }

        .deco-corner--bl { bottom: 6mm; left: 6mm; }
        .deco-corner--bl::before { bottom: 0; left: 0; width: 18px; height: 1.5px; }
        .deco-corner--bl::after { bottom: 0; left: 0; width: 1.5px; height: 18px; }

        .deco-corner--br { bottom: 6mm; right: 6mm; }
        .deco-corner--br::before { bottom: 0; right: 0; width: 18px; height: 1.5px; }
        .deco-corner--br::after { bottom: 0; right: 0; width: 1.5px; height: 18px; }

        .deco-header {
          text-align: center;
          padding-bottom: 8px;
          margin-bottom: 8px;
          position: relative;
        }

        .deco-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c3a361, transparent);
        }

        /* Decorative diamond above name */
        .deco-diamond {
          display: block;
          margin: 0 auto 5px auto;
          width: 8px;
          height: 8px;
          background: #c3a361;
          transform: rotate(45deg);
        }

        .deco-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30pt;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c3a361;
          line-height: 1;
        }

        .deco-tagline {
          font-size: 7pt;
          font-weight: 300;
          color: #8a8577;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-top: 5px;
        }

        .deco-contact-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 6px;
          font-size: 7pt;
          font-weight: 400;
          color: #a09a8e;
        }

        .deco-contact-row a {
          color: #c3a361;
          text-decoration: none;
        }

        .deco-contact-row span::before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 3px;
          background: #c3a361;
          transform: rotate(45deg);
          margin-right: 6px;
          vertical-align: middle;
        }

        .deco-contact-row span:first-child::before {
          display: none;
        }

        .deco-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 16px;
        }

        .deco-section {
          margin-bottom: 8px;
        }

        .deco-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10pt;
          font-weight: 600;
          color: #c3a361;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .deco-section-title::before,
        .deco-section-title::after {
          content: '';
          flex: 0 0 12px;
          height: 1px;
          background: #c3a361;
        }

        .deco-section-title::after {
          flex: 1;
        }

        .deco-entry {
          margin-bottom: 4px;
          padding-left: 8px;
          border-left: 1px solid rgba(195,163,97,0.2);
        }

        .deco-entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .deco-entry-title {
          font-weight: 600;
          font-size: 8pt;
          color: #e8e4dc;
          letter-spacing: 0.01em;
        }

        .deco-entry-period {
          font-size: 6.5pt;
          font-weight: 300;
          color: #6e6a60;
          white-space: nowrap;
          margin-left: 6px;
          letter-spacing: 0.05em;
        }

        .deco-entry-detail {
          font-size: 7pt;
          font-weight: 300;
          color: #9e9889;
          margin-top: 1px;
          line-height: 1.35;
        }

        .deco-entry-detail a {
          color: #c3a361;
          text-decoration: none;
        }

        .deco-skills-section {
          margin-top: 6px;
        }

        .deco-skills-grid {
          display: grid;
          grid-template-columns: 68px 1fr;
          gap: 2px 8px;
          font-size: 7.5pt;
        }

        .deco-skills-key {
          font-weight: 600;
          font-size: 6.5pt;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #c3a361;
          padding-top: 1px;
        }

        .deco-skills-val {
          color: #9e9889;
          font-weight: 300;
        }
      `}</style>

      <div className="deco-page">
        <div className="deco-corner deco-corner--tl" />
        <div className="deco-corner deco-corner--tr" />
        <div className="deco-corner deco-corner--bl" />
        <div className="deco-corner deco-corner--br" />

        <header className="deco-header">
          <span className="deco-diamond" />
          <h1 className="deco-name">{cv.name}</h1>
          <p className="deco-tagline">{cv.tagline}</p>
          <div className="deco-contact-row">
            <span>{cv.contact.email}</span>
            <span>{cv.contact.phone}</span>
            <span><a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a></span>
            <span><a href={cv.contact.github.url}>{cv.contact.github.label}</a></span>
            <span><a href={cv.contact.website.url}>{cv.contact.website.label}</a></span>
          </div>
        </header>

        <div className="deco-columns">
          <div>
            {/* Experience */}
            <div className="deco-section">
              <div className="deco-section-title">Experience</div>
              {cv.experience.map((e, i) => (
                <div className="deco-entry" key={i}>
                  <div className="deco-entry-header">
                    <span className="deco-entry-title">
                      {e.title}{e.company ? ` — ${e.company}` : ''}
                    </span>
                    <span className="deco-entry-period">{e.period}</span>
                  </div>
                  <div className="deco-entry-detail">
                    {e.link && (
                      <><a href={e.link.url} target="_blank" rel="noreferrer">{e.link.label}</a> — </>
                    )}
                    {e.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="deco-section deco-skills-section">
              <div className="deco-section-title">Skills & Languages</div>
              <div className="deco-skills-grid">
                <span className="deco-skills-key">Languages</span>
                <span className="deco-skills-val">{cv.skills.languages}</span>
                <span className="deco-skills-key">Advanced</span>
                <span className="deco-skills-val">{cv.skills.advanced}</span>
                <span className="deco-skills-key">Good</span>
                <span className="deco-skills-val">{cv.skills.good}</span>
                <span className="deco-skills-key">Soft</span>
                <span className="deco-skills-val">{cv.skills.soft}</span>
                <span className="deco-skills-key">Interests</span>
                <span className="deco-skills-val">{cv.skills.interests}</span>
              </div>
            </div>
          </div>

          <div>
            {/* Education */}
            <div className="deco-section">
              <div className="deco-section-title">Education</div>
              {cv.education.map((e, i) => (
                <div className="deco-entry" key={i}>
                  <div className="deco-entry-header">
                    <span className="deco-entry-title">{e.institution}</span>
                    <span className="deco-entry-period">{e.period}</span>
                  </div>
                  <div className="deco-entry-detail">{e.degree} — {e.detail}</div>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="deco-section">
              <div className="deco-section-title">Projects</div>
              {cv.projects.map((p, i) => (
                <div className="deco-entry" key={i}>
                  <div className="deco-entry-header">
                    <span className="deco-entry-title">
                      <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#c3a361', textDecoration: 'none' }}>
                        {p.name}
                      </a>
                    </span>
                    <span className="deco-entry-period">{p.period}</span>
                  </div>
                  <div className="deco-entry-detail">{p.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

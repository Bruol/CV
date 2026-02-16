import { cv } from "../data/cv";

/**
 * Design 4: Brutalist / Raw Concrete
 *
 * Exposed structure, harsh contrasts, monospace type, heavy borders,
 * off-white with black and construction-yellow accents.
 * Deliberately "ugly" yet arresting. A4 single-page PDF-ready.
 */
export function CVBrutalist() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Instrument+Serif:ital@0;1&display=swap');

        .brut-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #edebe6;
          color: #111;
          font-family: 'Space Mono', monospace;
          font-size: 7.5pt;
          line-height: 1.4;
          position: relative;
          box-sizing: border-box;
          padding: 0;
        }

        @media screen {
          .brut-page {
            box-shadow: 12px 12px 0 #111;
            margin-top: 40px;
            margin-bottom: 60px;
          }
          body { background: #d5d0c8; }
        }

        @media print {
          body { background: #edebe6; }
          .brut-page { box-shadow: none; margin: 0; }
        }

        @page { size: A4; margin: 0; }

        .brut-banner {
          background: #111;
          color: #edebe6;
          padding: 10mm 14mm 8mm 14mm;
          position: relative;
          overflow: hidden;
        }

        .brut-banner::before {
          content: 'CV CV CV CV CV CV CV CV CV CV CV CV CV CV CV';
          position: absolute;
          top: 3mm;
          left: 0;
          right: 0;
          font-size: 80pt;
          font-weight: 700;
          color: rgba(255,255,255,0.03);
          white-space: nowrap;
          letter-spacing: 0.05em;
          line-height: 1;
          pointer-events: none;
        }

        .brut-name {
          font-family: 'Instrument Serif', serif;
          font-size: 38pt;
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: -0.03em;
        }

        .brut-name-highlight {
          background: #f5de3c;
          color: #111;
          padding: 0 6px;
          display: inline;
        }

        .brut-tagline {
          font-size: 7.5pt;
          color: #999;
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .brut-contact-strip {
          background: #f5de3c;
          color: #111;
          padding: 3mm 14mm;
          display: flex;
          gap: 18px;
          font-size: 7pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-bottom: 3px solid #111;
        }

        .brut-contact-strip a {
          color: #111;
          text-decoration: none;
        }

        .brut-body {
          padding: 6mm 14mm 8mm 14mm;
        }

        .brut-section {
          margin-bottom: 6px;
        }

        .brut-section-head {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
        }

        .brut-section-num {
          font-size: 18pt;
          font-weight: 700;
          color: #f5de3c;
          line-height: 1;
          min-width: 28px;
          text-shadow: 1px 1px 0 #111, -1px -1px 0 #111, 1px -1px 0 #111, -1px 1px 0 #111;
        }

        .brut-section-title {
          font-size: 8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          border-bottom: 2px solid #111;
          padding-bottom: 1px;
          flex-grow: 1;
        }

        .brut-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 2px;
        }

        .brut-table td {
          padding: 2px 0;
          vertical-align: top;
          border-bottom: 1px solid #ccc;
        }

        .brut-table td:first-child {
          font-weight: 700;
          width: auto;
          padding-right: 8px;
        }

        .brut-table td:last-child {
          font-size: 7pt;
          text-align: right;
          white-space: nowrap;
          color: #777;
          width: 80px;
        }

        .brut-table .brut-detail {
          font-weight: 400;
          font-size: 7pt;
          color: #555;
          display: block;
        }

        .brut-table a {
          color: #111;
          text-decoration: none;
          border-bottom: 2px solid #f5de3c;
        }

        .brut-skills-row {
          display: flex;
          gap: 0;
          flex-wrap: wrap;
          border: 2px solid #111;
          margin-top: 2px;
        }

        .brut-skill-cell {
          flex: 1 1 auto;
          min-width: 120px;
          padding: 4px 8px;
          border-right: 2px solid #111;
          border-bottom: 2px solid #111;
        }

        .brut-skill-cell:last-child {
          border-right: none;
        }

        .brut-skill-label {
          font-size: 6pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #111;
          background: #f5de3c;
          display: inline-block;
          padding: 0 4px;
          margin-bottom: 2px;
        }

        .brut-skill-value {
          font-size: 7pt;
          color: #444;
          line-height: 1.35;
        }

        .brut-stamp {
          position: absolute;
          bottom: 12mm;
          right: 14mm;
          font-family: 'Instrument Serif', serif;
          font-size: 28pt;
          font-style: italic;
          color: rgba(0,0,0,0.04);
          transform: rotate(-8deg);
          pointer-events: none;
        }
      `}</style>

      <div className="brut-page">
        <div className="brut-banner">
          <h1 className="brut-name">
            Lorin <span className="brut-name-highlight">Urbantat</span>
          </h1>
          <p className="brut-tagline">{cv.tagline}</p>
        </div>

        <div className="brut-contact-strip">
          <span>{cv.contact.email}</span>
          <span>{cv.contact.phone}</span>
          <a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a>
          <a href={cv.contact.github.url}>{cv.contact.github.label}</a>
          <a href={cv.contact.website.url}>{cv.contact.website.label}</a>
        </div>

        <div className="brut-body">
          {/* 01 Education */}
          <div className="brut-section">
            <div className="brut-section-head">
              <span className="brut-section-num">01</span>
              <span className="brut-section-title">Education</span>
            </div>
            <table className="brut-table">
              <tbody>
                {cv.education.map((e, i) => (
                  <tr key={i}>
                    <td>
                      {e.institution}, {e.degree}
                      <span className="brut-detail">{e.detail}</span>
                    </td>
                    <td>{e.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 02 Experience */}
          <div className="brut-section">
            <div className="brut-section-head">
              <span className="brut-section-num">02</span>
              <span className="brut-section-title">Work Experience</span>
            </div>
            <table className="brut-table">
              <tbody>
                {cv.experience.map((e, i) => (
                  <tr key={i}>
                    <td>
                      {e.title}{e.company ? ` — ${e.company}` : ''}
                      <span className="brut-detail">
                        {e.link && (
                          <><a href={e.link.url} target="_blank" rel="noreferrer">{e.link.label}</a> &mdash; </>
                        )}
                        {e.description}
                      </span>
                    </td>
                    <td>{e.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 03 Projects */}
          <div className="brut-section">
            <div className="brut-section-head">
              <span className="brut-section-num">03</span>
              <span className="brut-section-title">Projects</span>
            </div>
            <table className="brut-table">
              <tbody>
                {cv.projects.map((p, i) => (
                  <tr key={i}>
                    <td>
                      <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
                      <span className="brut-detail">{p.description}</span>
                    </td>
                    <td>{p.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 04 Skills */}
          <div className="brut-section">
            <div className="brut-section-head">
              <span className="brut-section-num">04</span>
              <span className="brut-section-title">Skills & Interests</span>
            </div>
            <div className="brut-skills-row">
              <div className="brut-skill-cell">
                <div className="brut-skill-label">Languages</div>
                <div className="brut-skill-value">{cv.skills.languages}</div>
              </div>
              <div className="brut-skill-cell">
                <div className="brut-skill-label">Advanced Tech</div>
                <div className="brut-skill-value">{cv.skills.advanced}</div>
              </div>
            </div>
            <div className="brut-skills-row" style={{ borderTop: 'none' }}>
              <div className="brut-skill-cell">
                <div className="brut-skill-label">Good</div>
                <div className="brut-skill-value">{cv.skills.good}</div>
              </div>
              <div className="brut-skill-cell">
                <div className="brut-skill-label">Soft Skills</div>
                <div className="brut-skill-value">{cv.skills.soft}</div>
              </div>
              <div className="brut-skill-cell">
                <div className="brut-skill-label">Interests</div>
                <div className="brut-skill-value">{cv.skills.interests}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="brut-stamp">CURRICULUM VITAE</div>
      </div>
    </>
  );
}

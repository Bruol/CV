import { cv } from "../data/cv";

/**
 * Design 1: Swiss Modernist / International Typographic Style
 *
 * Inspired by Josef Muller-Brockmann and the Zurich school of design.
 * Strict grid, Helvetica-adjacent typography, red accent, stark contrast.
 * A4 single-page PDF-ready layout.
 */
export function CVSwiss() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Overpass+Mono:wght@400;600&display=swap');

        .swiss-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #fafafa;
          color: #0a0a0a;
          font-family: 'Archivo', 'Helvetica Neue', sans-serif;
          font-size: 9pt;
          line-height: 1.4;
          position: relative;
          box-sizing: border-box;
          padding: 18mm 16mm 14mm 16mm;
        }

        @media screen {
          .swiss-page {
            box-shadow: 0 20px 60px rgba(0,0,0,0.12);
            margin-top: 40px;
            margin-bottom: 40px;
          }
          body { background: #e8e6e1; }
        }

        @media print {
          body { background: white; }
          .swiss-page {
            box-shadow: none;
            margin: 0;
            background: white;
          }
        }

        @page { size: A4; margin: 0; }

        /* red vertical rule on left */
        .swiss-page::before {
          content: '';
          position: absolute;
          left: 10mm;
          top: 0;
          bottom: 0;
          width: 2.5px;
          background: #e63329;
        }

        .swiss-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: start;
          padding-bottom: 10px;
          border-bottom: 2.5px solid #0a0a0a;
          margin-bottom: 10px;
        }

        .swiss-name {
          font-size: 28pt;
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
          text-transform: uppercase;
        }

        .swiss-name span {
          color: #e63329;
        }

        .swiss-tagline {
          font-size: 8.5pt;
          font-weight: 500;
          color: #444;
          margin-top: 4px;
          letter-spacing: 0.02em;
        }

        .swiss-contact {
          text-align: right;
          font-family: 'Overpass Mono', monospace;
          font-size: 7.5pt;
          color: #333;
          line-height: 1.6;
        }

        .swiss-contact a {
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #e63329;
        }

        .swiss-grid {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 0;
        }

        .swiss-section-label {
          font-family: 'Overpass Mono', monospace;
          font-size: 7pt;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #e63329;
          padding-top: 8px;
          padding-right: 14px;
          border-right: 1px solid #ccc;
        }

        .swiss-section-content {
          padding: 8px 0 8px 14px;
          border-bottom: 1px solid #e0e0e0;
        }

        .swiss-grid > :nth-child(odd) {
          border-bottom: 1px solid #e0e0e0;
        }

        .swiss-entry {
          margin-bottom: 5px;
        }

        .swiss-entry:last-child {
          margin-bottom: 0;
        }

        .swiss-entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .swiss-entry-title {
          font-weight: 700;
          font-size: 9pt;
          letter-spacing: -0.01em;
        }

        .swiss-entry-period {
          font-family: 'Overpass Mono', monospace;
          font-size: 7pt;
          color: #888;
          flex-shrink: 0;
          margin-left: 8px;
        }

        .swiss-entry-detail {
          font-size: 8pt;
          color: #555;
          margin-top: 1px;
        }

        .swiss-entry-detail a {
          color: #e63329;
          text-decoration: none;
          font-weight: 500;
        }

        .swiss-skills-grid {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 2px 10px;
          font-size: 8pt;
        }

        .swiss-skills-label {
          font-weight: 700;
          font-size: 7pt;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #0a0a0a;
          padding-top: 1px;
        }

        .swiss-skills-value {
          color: #444;
        }
      `}</style>

      <div className="swiss-page">
        <header className="swiss-header">
          <div>
            <h1 className="swiss-name">
              Lorin<span> Urbantat</span>
            </h1>
            <p className="swiss-tagline">{cv.tagline}</p>
          </div>
          <div className="swiss-contact">
            <div>{cv.contact.email}</div>
            <div>{cv.contact.phone}</div>
            <div>
              <a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a>
              {" / "}
              <a href={cv.contact.github.url}>{cv.contact.github.label}</a>
              {" / "}
              <a href={cv.contact.website.url}>{cv.contact.website.label}</a>
            </div>
          </div>
        </header>

        <div className="swiss-grid">
          {/* Education */}
          <div className="swiss-section-label">Education</div>
          <div className="swiss-section-content">
            {cv.education.map((e, i) => (
              <div className="swiss-entry" key={i}>
                <div className="swiss-entry-header">
                  <span className="swiss-entry-title">
                    {e.institution}, {e.degree}
                  </span>
                  <span className="swiss-entry-period">{e.period}</span>
                </div>
                <div className="swiss-entry-detail">{e.detail}</div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="swiss-section-label">Experience</div>
          <div className="swiss-section-content">
            {cv.experience.map((e, i) => (
              <div className="swiss-entry" key={i}>
                <div className="swiss-entry-header">
                  <span className="swiss-entry-title">
                    {e.title}
                    {e.company ? `, ${e.company}` : ""}
                  </span>
                  <span className="swiss-entry-period">{e.period}</span>
                </div>
                <div className="swiss-entry-detail">
                  {e.link && (
                    <>
                      <a href={e.link.url} target="_blank" rel="noreferrer">
                        {e.link.label}
                      </a>
                      {" — "}
                    </>
                  )}
                  {e.description}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="swiss-section-label">Projects</div>
          <div className="swiss-section-content">
            {cv.projects.map((p, i) => (
              <div className="swiss-entry" key={i}>
                <div className="swiss-entry-header">
                  <span className="swiss-entry-title">
                    <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#e63329', textDecoration: 'none' }}>
                      {p.name}
                    </a>
                  </span>
                  <span className="swiss-entry-period">{p.period}</span>
                </div>
                <div className="swiss-entry-detail">{p.description}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="swiss-section-label">Skills</div>
          <div className="swiss-section-content">
            <div className="swiss-skills-grid">
              <div className="swiss-skills-label">Languages</div>
              <div className="swiss-skills-value">{cv.skills.languages}</div>
              <div className="swiss-skills-label">Advanced</div>
              <div className="swiss-skills-value">{cv.skills.advanced}</div>
              <div className="swiss-skills-label">Good</div>
              <div className="swiss-skills-value">{cv.skills.good}</div>
              <div className="swiss-skills-label">Soft</div>
              <div className="swiss-skills-value">{cv.skills.soft}</div>
              <div className="swiss-skills-label">Interests</div>
              <div className="swiss-skills-value">{cv.skills.interests}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

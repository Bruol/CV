import { cv } from "../data/cv";

/**
 * Design 7: Monospace Clean
 * Source Code Pro for headings, Karla for body text.
 * Light cool gray background, burnt-orange accent.
 * Same single-column linear layout as original.
 */
export function CV7() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&family=Karla:wght@300;400;500;600;700&display=swap');

        .cv7-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #f7f7f5;
          color: #1c1c1c;
          font-family: 'Karla', sans-serif;
          font-size: 8.5pt;
          line-height: 1.45;
          box-sizing: border-box;
          padding: 16mm 18mm 12mm 18mm;
        }

        @media screen {
          .cv7-page { box-shadow: 0 16px 48px rgba(0,0,0,0.08); margin: 40px auto; }
          body { background: #e8e8e4; }
        }
        @media print {
          body { background: white; }
          .cv7-page { box-shadow: none; margin: 0; background: white; }
        }
        @page { size: A4; margin: 0; }

        .cv7-name {
          font-family: 'Source Code Pro', monospace;
          font-size: 21pt;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #1c1c1c;
        }

        .cv7-tagline {
          font-size: 8.5pt;
          color: #666;
          margin-top: 2px;
        }

        .cv7-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 6px;
          font-size: 7.5pt;
          font-family: 'Source Code Pro', monospace;
          color: #555;
        }

        .cv7-contact a {
          color: #c65d1a;
          text-decoration: none;
        }

        .cv7-header-line {
          border: none;
          border-top: 2px solid #1c1c1c;
          margin: 10px 0 0 0;
        }

        .cv7-section {
          margin-top: 10px;
        }

        .cv7-section-title {
          font-family: 'Source Code Pro', monospace;
          font-size: 9pt;
          font-weight: 600;
          color: #c65d1a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 5px;
          padding-bottom: 3px;
          border-bottom: 1px solid #e0ddd8;
        }

        .cv7-entry {
          margin-bottom: 4px;
        }

        .cv7-entry-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }

        .cv7-entry-title {
          font-size: 9pt;
          font-weight: 600;
          color: #1c1c1c;
        }

        .cv7-entry-period {
          font-family: 'Source Code Pro', monospace;
          font-size: 7pt;
          color: #999;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cv7-entry-detail {
          font-size: 8pt;
          color: #555;
          margin-top: 1px;
        }

        .cv7-entry-detail a {
          color: #c65d1a;
          text-decoration: none;
        }

        .cv7-skills-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 3px;
        }

        .cv7-skills-label {
          font-family: 'Source Code Pro', monospace;
          font-size: 7pt;
          font-weight: 600;
          color: #c65d1a;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          white-space: nowrap;
          flex-shrink: 0;
          width: 82px;
        }

        .cv7-skills-value {
          font-size: 8pt;
          color: #555;
          flex: 1;
        }
      `}</style>

      <div className="cv7-page">
        <header>
          <h1 className="cv7-name">{cv.name}</h1>
          <p className="cv7-tagline">{cv.tagline}</p>
          <div className="cv7-contact">
            <span>{cv.contact.email}</span>
            <span>{cv.contact.phone}</span>
            <a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a>
            <a href={cv.contact.github.url}>{cv.contact.github.label}</a>
            <a href={cv.contact.website.url}>{cv.contact.website.label}</a>
          </div>
          <hr className="cv7-header-line" />
        </header>

        <section className="cv7-section">
          <h2 className="cv7-section-title">Education</h2>
          {cv.education.map((e, i) => (
            <div className="cv7-entry" key={i}>
              <div className="cv7-entry-row">
                <span className="cv7-entry-title">{e.institution}, {e.degree}</span>
                <span className="cv7-entry-period">{e.period}</span>
              </div>
              <div className="cv7-entry-detail">{e.detail}</div>
            </div>
          ))}
        </section>

        <section className="cv7-section">
          <h2 className="cv7-section-title">Work Experience</h2>
          {cv.experience.map((e, i) => (
            <div className="cv7-entry" key={i}>
              <div className="cv7-entry-row">
                <span className="cv7-entry-title">
                  {e.title}{e.company ? `, ${e.company}` : ""}
                </span>
                <span className="cv7-entry-period">{e.period}</span>
              </div>
              <div className="cv7-entry-detail">
                {e.link && <><a href={e.link.url} target="_blank" rel="noreferrer">{e.link.label}</a> &mdash; </>}
                {e.description}
              </div>
            </div>
          ))}
        </section>

        <section className="cv7-section">
          <h2 className="cv7-section-title">Personal Projects</h2>
          {cv.projects.map((p, i) => (
            <div className="cv7-entry" key={i}>
              <div className="cv7-entry-row">
                <span className="cv7-entry-title">
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#c65d1a', textDecoration: 'none', fontWeight: 600 }}>{p.name}</a>
                </span>
                <span className="cv7-entry-period">{p.period}</span>
              </div>
              <div className="cv7-entry-detail">{p.description}</div>
            </div>
          ))}
        </section>

        <section className="cv7-section">
          <h2 className="cv7-section-title">Skills & Interests</h2>
          <div className="cv7-skills-row">
            <span className="cv7-skills-label">Languages</span>
            <span className="cv7-skills-value">{cv.skills.languages}</span>
          </div>
          <div className="cv7-skills-row">
            <span className="cv7-skills-label">Advanced</span>
            <span className="cv7-skills-value">{cv.skills.advanced}</span>
          </div>
          <div className="cv7-skills-row">
            <span className="cv7-skills-label">Good</span>
            <span className="cv7-skills-value">{cv.skills.good}</span>
          </div>
          <div className="cv7-skills-row">
            <span className="cv7-skills-label">Soft Skills</span>
            <span className="cv7-skills-value">{cv.skills.soft}</span>
          </div>
          <div className="cv7-skills-row">
            <span className="cv7-skills-label">Interests</span>
            <span className="cv7-skills-value">{cv.skills.interests}</span>
          </div>
        </section>
      </div>
    </>
  );
}

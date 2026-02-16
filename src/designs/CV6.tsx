import { cv } from "../data/cv";

/**
 * Design 6: Warm Serif
 * Libre Baskerville headings, Source Sans 3 body.
 * Warm cream background, teal accent for links and section borders.
 * Same single-column linear layout as original.
 */
export function CV6() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        .cv6-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #fffdf8;
          color: #1e1e1e;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 9pt;
          line-height: 1.45;
          box-sizing: border-box;
          padding: 16mm 18mm 12mm 18mm;
        }

        @media screen {
          .cv6-page { box-shadow: 0 16px 48px rgba(0,0,0,0.08); margin: 40px auto; }
          body { background: #f0ece4; }
        }
        @media print {
          body { background: white; }
          .cv6-page { box-shadow: none; margin: 0; background: white; }
        }
        @page { size: A4; margin: 0; }

        .cv6-name {
          font-family: 'Libre Baskerville', serif;
          font-size: 22pt;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #1a1a1a;
        }

        .cv6-tagline {
          font-size: 9pt;
          color: #5a5650;
          margin-top: 2px;
        }

        .cv6-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 6px;
          font-size: 8pt;
          color: #444;
        }

        .cv6-contact a {
          color: #1a7a6d;
          text-decoration: none;
        }

        .cv6-divider {
          border: none;
          border-top: 1.5px solid #1a7a6d;
          margin: 10px 0 0 0;
          opacity: 0.4;
        }

        .cv6-section {
          margin-top: 10px;
        }

        .cv6-section-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 11pt;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 5px;
          padding-bottom: 3px;
          border-bottom: 1px solid #ddd5c8;
        }

        .cv6-entry {
          margin-bottom: 4px;
        }

        .cv6-entry-title {
          font-size: 9pt;
          font-weight: 600;
          color: #1e1e1e;
        }

        .cv6-entry-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }

        .cv6-entry-detail {
          font-size: 8pt;
          color: #5a5650;
          margin-top: 1px;
        }

        .cv6-entry-detail a {
          color: #1a7a6d;
          text-decoration: none;
        }

        .cv6-entry-period {
          font-size: 8pt;
          color: #8a8580;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cv6-skills-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 3px;
        }

        .cv6-skills-label {
          font-size: 8pt;
          font-weight: 600;
          color: #1e1e1e;
          white-space: nowrap;
          flex-shrink: 0;
          width: 80px;
        }

        .cv6-skills-value {
          font-size: 8pt;
          color: #5a5650;
          flex: 1;
        }
      `}</style>

      <div className="cv6-page">
        <header>
          <h1 className="cv6-name">{cv.name}</h1>
          <p className="cv6-tagline">{cv.tagline}</p>
          <div className="cv6-contact">
            <span>{cv.contact.email}</span>
            <span>{cv.contact.phone}</span>
            <a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a>
            <a href={cv.contact.github.url}>{cv.contact.github.label}</a>
            <a href={cv.contact.website.url}>{cv.contact.website.label}</a>
          </div>
          <hr className="cv6-divider" />
        </header>

        <section className="cv6-section">
          <h2 className="cv6-section-title">Education</h2>
          {cv.education.map((e, i) => (
            <div className="cv6-entry" key={i}>
              <div className="cv6-entry-row">
                <span className="cv6-entry-title">{e.institution}, {e.degree}</span>
                <span className="cv6-entry-period">{e.period}</span>
              </div>
              <div className="cv6-entry-detail">{e.detail}</div>
            </div>
          ))}
        </section>

        <section className="cv6-section">
          <h2 className="cv6-section-title">Work Experience</h2>
          {cv.experience.map((e, i) => (
            <div className="cv6-entry" key={i}>
              <div className="cv6-entry-row">
                <span className="cv6-entry-title">
                  {e.title}{e.company ? `, ${e.company}` : ""}
                </span>
                <span className="cv6-entry-period">{e.period}</span>
              </div>
              <div className="cv6-entry-detail">
                {e.link && <><a href={e.link.url} target="_blank" rel="noreferrer">{e.link.label}</a> &mdash; </>}
                {e.description}
              </div>
            </div>
          ))}
        </section>

        <section className="cv6-section">
          <h2 className="cv6-section-title">Personal Projects</h2>
          {cv.projects.map((p, i) => (
            <div className="cv6-entry" key={i}>
              <div className="cv6-entry-row">
                <span className="cv6-entry-title">
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#1a7a6d', textDecoration: 'none', fontWeight: 600 }}>{p.name}</a>
                </span>
                <span className="cv6-entry-period">{p.period}</span>
              </div>
              <div className="cv6-entry-detail">{p.description}</div>
            </div>
          ))}
        </section>

        <section className="cv6-section">
          <h2 className="cv6-section-title">Skills & Interests</h2>
          <div className="cv6-skills-row">
            <span className="cv6-skills-label">Languages</span>
            <span className="cv6-skills-value">{cv.skills.languages}</span>
          </div>
          <div className="cv6-skills-row">
            <span className="cv6-skills-label">Advanced</span>
            <span className="cv6-skills-value">{cv.skills.advanced}</span>
          </div>
          <div className="cv6-skills-row">
            <span className="cv6-skills-label">Good</span>
            <span className="cv6-skills-value">{cv.skills.good}</span>
          </div>
          <div className="cv6-skills-row">
            <span className="cv6-skills-label">Soft Skills</span>
            <span className="cv6-skills-value">{cv.skills.soft}</span>
          </div>
          <div className="cv6-skills-row">
            <span className="cv6-skills-label">Interests</span>
            <span className="cv6-skills-value">{cv.skills.interests}</span>
          </div>
        </section>
      </div>
    </>
  );
}

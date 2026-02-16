import { cv } from "../data/cv";

/**
 * Design 8: Dark Professional
 * Dark charcoal background, white text, Manrope font.
 * Slate-blue accent for links and section markers.
 * Same single-column linear layout as original.
 */
export function CV8() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');

        .cv8-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #1a1a1f;
          color: #e4e2de;
          font-family: 'Manrope', sans-serif;
          font-size: 8.5pt;
          line-height: 1.45;
          box-sizing: border-box;
          padding: 16mm 18mm 12mm 18mm;
        }

        @media screen {
          .cv8-page { box-shadow: 0 20px 60px rgba(0,0,0,0.35); margin: 40px auto; }
          body { background: #0c0c0e; }
        }
        @media print {
          body { background: #1a1a1f; }
          .cv8-page { box-shadow: none; margin: 0; }
        }
        @page { size: A4; margin: 0; }

        .cv8-name {
          font-size: 23pt;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #fff;
        }

        .cv8-tagline {
          font-size: 8.5pt;
          font-weight: 400;
          color: #8b8990;
          margin-top: 2px;
        }

        .cv8-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 6px;
          font-size: 7.5pt;
          color: #8b8990;
        }

        .cv8-contact a {
          color: #6b8acd;
          text-decoration: none;
        }

        .cv8-divider {
          border: none;
          border-top: 1px solid #2e2e35;
          margin: 10px 0 0 0;
        }

        .cv8-section {
          margin-top: 10px;
        }

        .cv8-section-title {
          font-size: 10pt;
          font-weight: 700;
          color: #fff;
          margin-bottom: 5px;
          padding-bottom: 3px;
          border-bottom: 1px solid #2e2e35;
        }

        .cv8-entry {
          margin-bottom: 4px;
        }

        .cv8-entry-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }

        .cv8-entry-title {
          font-size: 9pt;
          font-weight: 600;
          color: #e4e2de;
        }

        .cv8-entry-period {
          font-size: 7.5pt;
          font-weight: 400;
          color: #5e5c64;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cv8-entry-detail {
          font-size: 8pt;
          color: #8b8990;
          margin-top: 1px;
        }

        .cv8-entry-detail a {
          color: #6b8acd;
          text-decoration: none;
        }

        .cv8-skills-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 3px;
        }

        .cv8-skills-label {
          font-size: 8pt;
          font-weight: 600;
          color: #6b8acd;
          white-space: nowrap;
          flex-shrink: 0;
          width: 80px;
        }

        .cv8-skills-value {
          font-size: 8pt;
          color: #8b8990;
          flex: 1;
        }
      `}</style>

      <div className="cv8-page">
        <header>
          <h1 className="cv8-name">{cv.name}</h1>
          <p className="cv8-tagline">{cv.tagline}</p>
          <div className="cv8-contact">
            <span>{cv.contact.email}</span>
            <span>{cv.contact.phone}</span>
            <a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a>
            <a href={cv.contact.github.url}>{cv.contact.github.label}</a>
            <a href={cv.contact.website.url}>{cv.contact.website.label}</a>
          </div>
          <hr className="cv8-divider" />
        </header>

        <section className="cv8-section">
          <h2 className="cv8-section-title">Education</h2>
          {cv.education.map((e, i) => (
            <div className="cv8-entry" key={i}>
              <div className="cv8-entry-row">
                <span className="cv8-entry-title">{e.institution}, {e.degree}</span>
                <span className="cv8-entry-period">{e.period}</span>
              </div>
              <div className="cv8-entry-detail">{e.detail}</div>
            </div>
          ))}
        </section>

        <section className="cv8-section">
          <h2 className="cv8-section-title">Work Experience</h2>
          {cv.experience.map((e, i) => (
            <div className="cv8-entry" key={i}>
              <div className="cv8-entry-row">
                <span className="cv8-entry-title">
                  {e.title}{e.company ? `, ${e.company}` : ""}
                </span>
                <span className="cv8-entry-period">{e.period}</span>
              </div>
              <div className="cv8-entry-detail">
                {e.link && <><a href={e.link.url} target="_blank" rel="noreferrer">{e.link.label}</a> &mdash; </>}
                {e.description}
              </div>
            </div>
          ))}
        </section>

        <section className="cv8-section">
          <h2 className="cv8-section-title">Personal Projects</h2>
          {cv.projects.map((p, i) => (
            <div className="cv8-entry" key={i}>
              <div className="cv8-entry-row">
                <span className="cv8-entry-title">
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#6b8acd', textDecoration: 'none', fontWeight: 600 }}>{p.name}</a>
                </span>
                <span className="cv8-entry-period">{p.period}</span>
              </div>
              <div className="cv8-entry-detail">{p.description}</div>
            </div>
          ))}
        </section>

        <section className="cv8-section">
          <h2 className="cv8-section-title">Skills & Interests</h2>
          <div className="cv8-skills-row">
            <span className="cv8-skills-label">Languages</span>
            <span className="cv8-skills-value">{cv.skills.languages}</span>
          </div>
          <div className="cv8-skills-row">
            <span className="cv8-skills-label">Advanced</span>
            <span className="cv8-skills-value">{cv.skills.advanced}</span>
          </div>
          <div className="cv8-skills-row">
            <span className="cv8-skills-label">Good</span>
            <span className="cv8-skills-value">{cv.skills.good}</span>
          </div>
          <div className="cv8-skills-row">
            <span className="cv8-skills-label">Soft Skills</span>
            <span className="cv8-skills-value">{cv.skills.soft}</span>
          </div>
          <div className="cv8-skills-row">
            <span className="cv8-skills-label">Interests</span>
            <span className="cv8-skills-value">{cv.skills.interests}</span>
          </div>
        </section>
      </div>
    </>
  );
}

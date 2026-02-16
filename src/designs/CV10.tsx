import { cv } from "../data/cv";

/**
 * Design 10: Soft Pastel
 * Nunito font, light lavender-gray background, muted plum accent.
 * Rounded section dividers, gentle feel.
 * Same single-column linear layout as original.
 */
export function CV10() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap');

        .cv10-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #f9f7fc;
          color: #2d2a35;
          font-family: 'Nunito', sans-serif;
          font-size: 8.5pt;
          line-height: 1.48;
          box-sizing: border-box;
          padding: 16mm 18mm 12mm 18mm;
        }

        @media screen {
          .cv10-page { box-shadow: 0 14px 44px rgba(100,80,140,0.08); margin: 40px auto; }
          body { background: #eee8f4; }
        }
        @media print {
          body { background: white; }
          .cv10-page { box-shadow: none; margin: 0; background: white; }
        }
        @page { size: A4; margin: 0; }

        .cv10-name {
          font-size: 22pt;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #2d2a35;
        }

        .cv10-tagline {
          font-size: 8.5pt;
          font-weight: 400;
          color: #7c7489;
          margin-top: 2px;
        }

        .cv10-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 6px;
          font-size: 7.5pt;
          color: #7c7489;
        }

        .cv10-contact a {
          color: #7b5ea7;
          text-decoration: none;
        }

        .cv10-divider {
          border: none;
          height: 3px;
          background: linear-gradient(90deg, #c4b1db 0%, #e8dff2 100%);
          margin: 10px 0 0 0;
          border-radius: 2px;
        }

        .cv10-section {
          margin-top: 10px;
        }

        .cv10-section-title {
          font-size: 10pt;
          font-weight: 700;
          color: #7b5ea7;
          margin-bottom: 5px;
          padding-bottom: 3px;
          border-bottom: 1.5px solid #e4dced;
        }

        .cv10-entry {
          margin-bottom: 4px;
        }

        .cv10-entry-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }

        .cv10-entry-title {
          font-size: 9pt;
          font-weight: 700;
          color: #2d2a35;
        }

        .cv10-entry-period {
          font-size: 7.5pt;
          font-weight: 400;
          color: #a89cb5;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cv10-entry-detail {
          font-size: 8pt;
          color: #6a6175;
          margin-top: 1px;
        }

        .cv10-entry-detail a {
          color: #7b5ea7;
          text-decoration: none;
        }

        .cv10-skills-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 3px;
        }

        .cv10-skills-label {
          font-size: 8pt;
          font-weight: 700;
          color: #7b5ea7;
          white-space: nowrap;
          flex-shrink: 0;
          width: 80px;
        }

        .cv10-skills-value {
          font-size: 8pt;
          color: #6a6175;
          flex: 1;
        }
      `}</style>

      <div className="cv10-page">
        <header>
          <h1 className="cv10-name">{cv.name}</h1>
          <p className="cv10-tagline">{cv.tagline}</p>
          <div className="cv10-contact">
            <span>{cv.contact.email}</span>
            <span>{cv.contact.phone}</span>
            <a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a>
            <a href={cv.contact.github.url}>{cv.contact.github.label}</a>
            <a href={cv.contact.website.url}>{cv.contact.website.label}</a>
          </div>
          <hr className="cv10-divider" />
        </header>

        <section className="cv10-section">
          <h2 className="cv10-section-title">Education</h2>
          {cv.education.map((e, i) => (
            <div className="cv10-entry" key={i}>
              <div className="cv10-entry-row">
                <span className="cv10-entry-title">{e.institution}, {e.degree}</span>
                <span className="cv10-entry-period">{e.period}</span>
              </div>
              <div className="cv10-entry-detail">{e.detail}</div>
            </div>
          ))}
        </section>

        <section className="cv10-section">
          <h2 className="cv10-section-title">Work Experience</h2>
          {cv.experience.map((e, i) => (
            <div className="cv10-entry" key={i}>
              <div className="cv10-entry-row">
                <span className="cv10-entry-title">
                  {e.title}{e.company ? `, ${e.company}` : ""}
                </span>
                <span className="cv10-entry-period">{e.period}</span>
              </div>
              <div className="cv10-entry-detail">
                {e.link && <><a href={e.link.url} target="_blank" rel="noreferrer">{e.link.label}</a> &mdash; </>}
                {e.description}
              </div>
            </div>
          ))}
        </section>

        <section className="cv10-section">
          <h2 className="cv10-section-title">Personal Projects</h2>
          {cv.projects.map((p, i) => (
            <div className="cv10-entry" key={i}>
              <div className="cv10-entry-row">
                <span className="cv10-entry-title">
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#7b5ea7', textDecoration: 'none', fontWeight: 700 }}>{p.name}</a>
                </span>
                <span className="cv10-entry-period">{p.period}</span>
              </div>
              <div className="cv10-entry-detail">{p.description}</div>
            </div>
          ))}
        </section>

        <section className="cv10-section">
          <h2 className="cv10-section-title">Skills & Interests</h2>
          <div className="cv10-skills-row">
            <span className="cv10-skills-label">Languages</span>
            <span className="cv10-skills-value">{cv.skills.languages}</span>
          </div>
          <div className="cv10-skills-row">
            <span className="cv10-skills-label">Advanced</span>
            <span className="cv10-skills-value">{cv.skills.advanced}</span>
          </div>
          <div className="cv10-skills-row">
            <span className="cv10-skills-label">Good</span>
            <span className="cv10-skills-value">{cv.skills.good}</span>
          </div>
          <div className="cv10-skills-row">
            <span className="cv10-skills-label">Soft Skills</span>
            <span className="cv10-skills-value">{cv.skills.soft}</span>
          </div>
          <div className="cv10-skills-row">
            <span className="cv10-skills-label">Interests</span>
            <span className="cv10-skills-value">{cv.skills.interests}</span>
          </div>
        </section>
      </div>
    </>
  );
}

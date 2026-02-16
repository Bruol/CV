import { cv } from "../data/cv";

/**
 * Design 9: Classic LaTeX / Academic
 * EB Garamond for everything, pure white background, black text.
 * Thin horizontal rules, no color accents, academic feel.
 * Same single-column linear layout as original.
 */
export function CV9() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        .cv9-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #fff;
          color: #111;
          font-family: 'EB Garamond', 'Times New Roman', serif;
          font-size: 10pt;
          line-height: 1.4;
          box-sizing: border-box;
          padding: 18mm 20mm 14mm 20mm;
        }

        @media screen {
          .cv9-page { box-shadow: 0 12px 40px rgba(0,0,0,0.07); margin: 40px auto; }
          body { background: #e8e8e8; }
        }
        @media print {
          body { background: white; }
          .cv9-page { box-shadow: none; margin: 0; }
        }
        @page { size: A4; margin: 0; }

        .cv9-header {
          text-align: center;
          padding-bottom: 8px;
          border-bottom: 0.5px solid #111;
          margin-bottom: 2px;
        }

        .cv9-name {
          font-size: 20pt;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #111;
        }

        .cv9-tagline {
          font-size: 9.5pt;
          font-weight: 400;
          color: #444;
          margin-top: 2px;
          font-style: italic;
        }

        .cv9-contact {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
          font-size: 8.5pt;
          color: #333;
        }

        .cv9-contact span::after {
          content: ' \\2022';
          color: #999;
          margin-left: 6px;
        }

        .cv9-contact span:last-child::after {
          content: '';
        }

        .cv9-contact a {
          color: #333;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .cv9-section {
          margin-top: 8px;
        }

        .cv9-section-title {
          font-size: 11pt;
          font-weight: 600;
          color: #111;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 3px;
          padding-bottom: 2px;
          border-bottom: 0.5px solid #888;
        }

        .cv9-entry {
          margin-bottom: 4px;
        }

        .cv9-entry-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }

        .cv9-entry-title {
          font-size: 9.5pt;
          font-weight: 600;
          color: #111;
        }

        .cv9-entry-period {
          font-size: 9pt;
          font-style: italic;
          color: #666;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cv9-entry-detail {
          font-size: 9pt;
          color: #444;
          margin-top: 0px;
        }

        .cv9-entry-detail a {
          color: #333;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .cv9-skills-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 2px;
        }

        .cv9-skills-label {
          font-size: 9pt;
          font-weight: 600;
          color: #111;
          white-space: nowrap;
          flex-shrink: 0;
          width: 80px;
        }

        .cv9-skills-value {
          font-size: 9pt;
          color: #444;
          flex: 1;
        }
      `}</style>

      <div className="cv9-page">
        <header className="cv9-header">
          <h1 className="cv9-name">{cv.name}</h1>
          <p className="cv9-tagline">{cv.tagline}</p>
          <div className="cv9-contact">
            <span>{cv.contact.email}</span>
            <span>{cv.contact.phone}</span>
            <span><a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a></span>
            <span><a href={cv.contact.github.url}>{cv.contact.github.label}</a></span>
            <span><a href={cv.contact.website.url}>{cv.contact.website.label}</a></span>
          </div>
        </header>

        <section className="cv9-section">
          <h2 className="cv9-section-title">Education</h2>
          {cv.education.map((e, i) => (
            <div className="cv9-entry" key={i}>
              <div className="cv9-entry-row">
                <span className="cv9-entry-title">{e.institution}, {e.degree}</span>
                <span className="cv9-entry-period">{e.period}</span>
              </div>
              <div className="cv9-entry-detail">{e.detail}</div>
            </div>
          ))}
        </section>

        <section className="cv9-section">
          <h2 className="cv9-section-title">Work Experience</h2>
          {cv.experience.map((e, i) => (
            <div className="cv9-entry" key={i}>
              <div className="cv9-entry-row">
                <span className="cv9-entry-title">
                  {e.title}{e.company ? `, ${e.company}` : ""}
                </span>
                <span className="cv9-entry-period">{e.period}</span>
              </div>
              <div className="cv9-entry-detail">
                {e.link && <><a href={e.link.url} target="_blank" rel="noreferrer">{e.link.label}</a> &mdash; </>}
                {e.description}
              </div>
            </div>
          ))}
        </section>

        <section className="cv9-section">
          <h2 className="cv9-section-title">Personal Projects</h2>
          {cv.projects.map((p, i) => (
            <div className="cv9-entry" key={i}>
              <div className="cv9-entry-row">
                <span className="cv9-entry-title">
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#333', fontWeight: 600 }}>{p.name}</a>
                </span>
                <span className="cv9-entry-period">{p.period}</span>
              </div>
              <div className="cv9-entry-detail">{p.description}</div>
            </div>
          ))}
        </section>

        <section className="cv9-section">
          <h2 className="cv9-section-title">Skills & Interests</h2>
          <div className="cv9-skills-row">
            <span className="cv9-skills-label">Languages</span>
            <span className="cv9-skills-value">{cv.skills.languages}</span>
          </div>
          <div className="cv9-skills-row">
            <span className="cv9-skills-label">Advanced</span>
            <span className="cv9-skills-value">{cv.skills.advanced}</span>
          </div>
          <div className="cv9-skills-row">
            <span className="cv9-skills-label">Good</span>
            <span className="cv9-skills-value">{cv.skills.good}</span>
          </div>
          <div className="cv9-skills-row">
            <span className="cv9-skills-label">Soft Skills</span>
            <span className="cv9-skills-value">{cv.skills.soft}</span>
          </div>
          <div className="cv9-skills-row">
            <span className="cv9-skills-label">Interests</span>
            <span className="cv9-skills-value">{cv.skills.interests}</span>
          </div>
        </section>
      </div>
    </>
  );
}

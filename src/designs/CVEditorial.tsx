import { cv } from "../data/cv";

/**
 * Design 3: Editorial / Magazine Layout
 *
 * Two-column asymmetric layout inspired by print magazines.
 * Elegant serif headings (Playfair Display) + clean sans body (DM Sans).
 * Warm ivory background, deep navy text, copper accent.
 * A4 single-page PDF-ready.
 */
export function CVEditorial() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ed-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          overflow: hidden;
          margin: 0 auto;
          background: #f8f5ee;
          color: #1a1f36;
          font-family: 'DM Sans', sans-serif;
          font-size: 8pt;
          line-height: 1.45;
          position: relative;
          box-sizing: border-box;
        }

        @media screen {
          .ed-page {
            box-shadow: 0 25px 80px rgba(0,0,0,0.1);
            margin-top: 40px;
            margin-bottom: 40px;
          }
          body { background: #e5e0d5; }
        }

        @media print {
          body { background: #f8f5ee; }
          .ed-page { box-shadow: none; margin: 0; }
        }

        @page { size: A4; margin: 0; }

        .ed-masthead {
          background: #1a1f36;
          color: #f8f5ee;
          padding: 14mm 16mm 10mm 16mm;
          position: relative;
        }

        .ed-masthead::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 16mm;
          right: 16mm;
          height: 2px;
          background: #c47d3c;
        }

        .ed-name {
          font-family: 'Playfair Display', serif;
          font-size: 30pt;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .ed-name em {
          font-style: italic;
          font-weight: 400;
          color: #c47d3c;
        }

        .ed-tagline {
          font-size: 8pt;
          font-weight: 300;
          color: #a0a5b8;
          margin-top: 5px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .ed-contact-bar {
          display: flex;
          gap: 14px;
          margin-top: 6px;
          font-size: 7pt;
          color: #8a90a6;
        }

        .ed-contact-bar a {
          color: #c47d3c;
          text-decoration: none;
        }

        .ed-body {
          display: grid;
          grid-template-columns: 1fr 62mm;
          gap: 0;
          padding: 0;
        }

        .ed-main {
          padding: 10mm 8mm 10mm 16mm;
          border-right: 1px solid #d8d2c4;
        }

        .ed-sidebar {
          padding: 10mm 16mm 10mm 8mm;
          background: #f2ede3;
        }

        .ed-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 11pt;
          font-weight: 600;
          color: #1a1f36;
          margin-bottom: 6px;
          padding-bottom: 3px;
          border-bottom: 1.5px solid #c47d3c;
          display: inline-block;
        }

        .ed-section {
          margin-bottom: 10px;
        }

        .ed-entry {
          margin-bottom: 5px;
        }

        .ed-entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .ed-entry-title {
          font-weight: 600;
          font-size: 8.5pt;
          color: #1a1f36;
        }

        .ed-entry-period {
          font-size: 7pt;
          font-weight: 300;
          color: #888;
          white-space: nowrap;
          margin-left: 6px;
          font-style: italic;
        }

        .ed-entry-subtitle {
          font-size: 7.5pt;
          color: #666;
          margin-top: 1px;
        }

        .ed-entry-subtitle a {
          color: #c47d3c;
          text-decoration: none;
          font-weight: 500;
        }

        /* Sidebar styles */
        .ed-sidebar-section {
          margin-bottom: 10px;
        }

        .ed-sidebar-title {
          font-family: 'Playfair Display', serif;
          font-size: 9pt;
          font-weight: 600;
          color: #1a1f36;
          margin-bottom: 4px;
          padding-bottom: 2px;
          border-bottom: 1px solid #c47d3c;
        }

        .ed-sidebar-label {
          font-size: 6.5pt;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #c47d3c;
          margin-top: 4px;
          margin-bottom: 1px;
        }

        .ed-sidebar-value {
          font-size: 7.5pt;
          color: #555;
          line-height: 1.4;
        }

        .ed-project {
          margin-bottom: 4px;
        }

        .ed-project-name {
          font-weight: 600;
          font-size: 7.5pt;
        }

        .ed-project-name a {
          color: #1a1f36;
          text-decoration: none;
          border-bottom: 1px solid #c47d3c;
        }

        .ed-project-desc {
          font-size: 7pt;
          color: #777;
          margin-top: 0.5px;
        }

        .ed-project-period {
          font-size: 6.5pt;
          color: #aaa;
          font-style: italic;
        }

        .ed-pull-quote {
          font-family: 'Playfair Display', serif;
          font-size: 13pt;
          font-style: italic;
          color: #c47d3c;
          line-height: 1.25;
          margin: 6px 0 10px 0;
          padding-left: 10px;
          border-left: 3px solid #c47d3c;
        }
      `}</style>

      <div className="ed-page">
        <div className="ed-masthead">
          <h1 className="ed-name">
            Lorin <em>Urbantat</em>
          </h1>
          <p className="ed-tagline">{cv.tagline}</p>
          <div className="ed-contact-bar">
            <span>{cv.contact.email}</span>
            <span>{cv.contact.phone}</span>
            <a href={cv.contact.linkedin.url}>{cv.contact.linkedin.label}</a>
            <a href={cv.contact.github.url}>{cv.contact.github.label}</a>
            <a href={cv.contact.website.url}>{cv.contact.website.label}</a>
          </div>
        </div>

        <div className="ed-body">
          <div className="ed-main">
            {/* Experience */}
            <div className="ed-section">
              <div className="ed-section-title">Work Experience</div>
              {cv.experience.map((e, i) => (
                <div className="ed-entry" key={i}>
                  <div className="ed-entry-header">
                    <span className="ed-entry-title">
                      {e.title}{e.company ? ` — ${e.company}` : ''}
                    </span>
                    <span className="ed-entry-period">{e.period}</span>
                  </div>
                  <div className="ed-entry-subtitle">
                    {e.link && (
                      <><a href={e.link.url} target="_blank" rel="noreferrer">{e.link.label}</a> &mdash; </>
                    )}
                    {e.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="ed-section">
              <div className="ed-section-title">Education</div>
              {cv.education.map((e, i) => (
                <div className="ed-entry" key={i}>
                  <div className="ed-entry-header">
                    <span className="ed-entry-title">{e.institution}</span>
                    <span className="ed-entry-period">{e.period}</span>
                  </div>
                  <div className="ed-entry-subtitle">{e.degree} &mdash; {e.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="ed-sidebar">
            <div className="ed-pull-quote">Building things that matter.</div>

            {/* Projects */}
            <div className="ed-sidebar-section">
              <div className="ed-sidebar-title">Projects</div>
              {cv.projects.map((p, i) => (
                <div className="ed-project" key={i}>
                  <div className="ed-project-name">
                    <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
                    <span className="ed-project-period"> &middot; {p.period}</span>
                  </div>
                  <div className="ed-project-desc">{p.description}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="ed-sidebar-section">
              <div className="ed-sidebar-title">Skills & Technologies</div>

              <div className="ed-sidebar-label">Languages</div>
              <div className="ed-sidebar-value">{cv.skills.languages}</div>

              <div className="ed-sidebar-label">Advanced</div>
              <div className="ed-sidebar-value">{cv.skills.advanced}</div>

              <div className="ed-sidebar-label">Proficient</div>
              <div className="ed-sidebar-value">{cv.skills.good}</div>

              <div className="ed-sidebar-label">Soft Skills</div>
              <div className="ed-sidebar-value">{cv.skills.soft}</div>

              <div className="ed-sidebar-label">Interests</div>
              <div className="ed-sidebar-value">{cv.skills.interests}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

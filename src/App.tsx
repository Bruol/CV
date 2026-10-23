import type { ReactNode } from "react";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv-section mt-2.5">
      <h2 className="border-b border-[#2d2c29]/25 text-[15px] font-semibold text-[#2d2c29]">{title}</h2>
      <div className="cv-section-entries mt-1.5 flex flex-col gap-1.5 pl-2">{children}</div>
    </section>
  );
}

function Entry({ title, date, children }: { title: ReactNode; date: string; children?: ReactNode }) {
  return (
    <div className="cv-entry">
      <div className="cv-entry-heading flex items-baseline justify-between gap-3">
        <div className="cv-entry-title text-[12px] font-medium">{title}</div>
        <div className="cv-entry-date shrink-0 text-[11px] text-[#6c6760]">{date}</div>
      </div>
      {children && <div className="cv-entry-description text-[11px] text-[#4b4842] [&_ul]:list-disc [&_ul]:pl-4">{children}</div>}
    </div>
  );
}

function Skill({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="cv-skill grid grid-cols-[1fr_110px] gap-2 text-[11px]">
      <div className="text-[#4b4842]">{children}</div>
      <div className="text-right text-[#6c6760]">{label}</div>
    </div>
  );
}

function App({ draft = false }: { draft?: boolean }) {
  return (
    <main className={`${draft ? "cv-classic-draft " : ""}min-h-screen bg-[#f6f4ef] py-6 text-[#101010] sm:py-10 print:min-h-0 print:bg-white print:py-0`}>
      <div className="cv-page mx-auto w-full max-w-[900px] bg-[#fbfaf7] px-6 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:px-10 sm:py-8 print:max-w-none print:bg-white print:shadow-none print:px-[12mm] print:py-[10mm]">
        <header className="pb-2.5">
          <h1 className="text-2xl font-semibold tracking-[-0.02em]">
            Lorin Urbantat
          </h1>
          <p className="mt-0.5 text-[13px] text-[#4c4a45]">
            Computer Science Student @ ETH Zurich &middot; Software Engineer @
            ETH-CES
          </p>
          {draft ? (
            <div className="cv-contact">
              <a href="mailto:lorin.urbantat@gmail.com">lorin.urbantat@gmail.com</a><span aria-hidden="true"> | </span>
              <a href="https://linkedin.com/in/bruol" target="_blank" rel="noreferrer">LinkedIn</a><span aria-hidden="true"> | </span>
              <a href="https://github.com/bruol" target="_blank" rel="noreferrer">GitHub</a><span aria-hidden="true"> | </span>
              <a href="https://bruol.me/" target="_blank" rel="noreferrer">bruol.me</a>
            </div>
          ) : (
          <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-0.5 text-[12px] text-[#2d2c29]">
            <a
              href="mailto:lorin.urbantat@gmail.com"
              className="inline-flex items-center gap-1"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3 w-3 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              lorin.urbantat@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/bruol"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3 w-3 shrink-0"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/bruol"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3 w-3 shrink-0"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
            <a href="https://bruol.me/" target="_blank" rel="noreferrer">bruol.me</a>
          </div>
          )}
        </header>

        <Section title="Education">
          <Entry title="ETH Zurich, MSc Computer Science" date="2025 - 2027">
            <ul>
              <li>Expected Graduation: September 2027</li>
              <li>Major: Data Management Systems</li>
              <li><strong>Information Security Lab (5.75)</strong>, Computational Semantics for Natural Language Processing (5.75), Advanced Formal Language Theory (5.5)</li>
            </ul>
          </Entry>
          <Entry title="ETH Zurich, BSc Computer Science" date="2021 - 2024">
            <ul>
              <li>Graduated August 2024, GPA 5.04 (6.0 – highest)</li>
              <li><strong>Parallel Programming (5.75)</strong>, Numerical Methods (5.75), Analysis (5.5), Visual Computing (5.75), <strong>Applied Computer Architecture (6)</strong></li>
            </ul>
          </Entry>
          <Entry title="Waldorfschule Mülheim an der Ruhr, Abitur" date="2007 - 2020">
            GPA 1.3 (1.0 – highest)
          </Entry>
          <Entry title="Deutsche Schüler Akademie" date="2019">
            Summer school for gifted students
          </Entry>
        </Section>

        <Section title="Work Experience">
          <Entry title="Information Security Lab Teaching Assistant, ETH Zurich (part-time)" date="2026 - Present">
            Test lab exercises and host exercise sessions
          </Entry>
          <Entry title="Software Engineer, ETH Chair of Education Systems (part-time)" date="2025 - Present">
            Sole engineer responsible for end-to-end development of a research-focused RAG chatbot using Next.js, Convex and Microsoft Foundry, serving 1,000 users
          </Entry>
          <Entry title="Software Engineer, ETH Game Technology Center (part-time)" date="2023 - 2025">
            <ul>
              <li><a href="https://ethz.ch/en/campus/getting-to-know/discover/tours/morph-tales.html" target="_blank" rel="noreferrer">Morph Tales Game</a>, Unity 3D</li>
              <li>Developed Unity features for Morph Tales and built a game analytics pipeline using Firebase, BigQuery and Looker Studio.</li>
            </ul>
          </Entry>
          <Entry title="Coach, mint & pepper (part-time)" date="2025">
            STEM and AI tutor for high school students
          </Entry>
          <Entry title="Calculus Teaching Assistant, ETH Zurich (part-time)" date="2023">
            Host exercise classes, 15 - 30 students
          </Entry>
          <Entry title="Tutor, Waldorfschule Mülheim an der Ruhr (part-time)" date="2017 - 2019">
            Tutorial classes (10 - 25 participants) in Math and Computer Science
          </Entry>
        </Section>

        <Section title="Personal Projects & Relevant Experience">
          <Entry title={<><a href="https://bruol.me/other/Porting_Unikraft_to_Raspberry_Pi_5.pdf" target="_blank" rel="noreferrer">Unikraft on Raspberry Pi 5</a>, ETH Semester Project</>} date="2026">
            <ul>
              <li>Ported Unikraft to Raspberry Pi 5, implementing AArch64 boot, memory initialization, interrupts and timers</li>
              <li>Developed a cache-safe kernel reload mechanism using OpenOCD and GDB, enabling repeated deployment without power-cycling.</li>
            </ul>
          </Entry>
          <Entry title={<><a href="https://flateroo.com/" target="_blank" rel="noreferrer">Flateroo</a>, Flat sharing platform</>} date="2024 - 2025">
            <ul>
              <li>React Native application with real-time chat, video streaming infrastructure</li>
              <li>Node backend, video transcoding, HLS streaming, PostgreSQL, fly.io</li>
            </ul>
          </Entry>
          <Entry title={<><a href="https://opendemocracy.ai/electomate" target="_blank" rel="noreferrer">OpenDemocracy</a>, RAG Powered Voting Advice application for elections</>} date="2024" />
          <Entry title={<><a href="https://bruol.me/other/A_Comprehensive_Test_Environment_For_SCION_Control_Plane_Algorithms.pdf" target="_blank" rel="noreferrer">SCION Control Plane Algorithms Test Environment</a>, Bachelor Thesis</>} date="2024">
            Built a Docker-based environment and traffic generator to evaluate SCION control-plane algorithms under configurable topologies and changing link conditions.
          </Entry>
          <Entry title={<><a href="https://tldr.bruol.me/" target="_blank" rel="noreferrer">TLDR</a>, Lecture Summarizer (VIScon Hackathon)</>} date="2023">
            Lecture summarizer using OpenAI Whisper to create searchable lecture summaries from videos
          </Entry>
        </Section>

        <Section title="Skills & Interests">
          <Skill label="Languages">German (native), English (fluent), French (DELF B1)</Skill>
          <Skill label="Technologies">AArch64 Assembly, C, C++, Kernel Development, TypeScript, React, Python, Java, Git, Linux, Containerization, Unity 3D, React Native, Node.js, SQL, RAG, Machine Learning, PCA</Skill>
          <Skill label="Interests">Biking, Sports, Cooking, Dancing, Singing</Skill>
        </Section>
      </div>
    </main>
  );
}

export default App;

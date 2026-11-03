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

function SmartGlassesVlmCV() {
  return (
    <main className="cv-classic cv-roomy min-h-screen bg-white py-6 text-black sm:py-10 print:min-h-0 print:py-0">
      <div className="cv-page mx-auto w-full max-w-[900px] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:px-10 sm:py-8 print:max-w-none print:bg-white print:shadow-none print:px-[12mm] print:py-[10mm]">
        <header className="pb-2.5">
          <h1 className="text-2xl font-semibold tracking-[-0.02em]">
            Lorin Urbantat
          </h1>
          <p className="mt-0.5 text-[13px] text-[#4c4a45]">
            Computer Science Student @ ETH Zurich &middot; Software Engineer @
            ETH-CES
          </p>

            <div className="cv-contact">
              <a href="mailto:lurbantat@ethz.ch">lurbantat@ethz.ch</a><span aria-hidden="true"> | </span>
              <a href="https://linkedin.com/in/bruol" target="_blank" rel="noreferrer">LinkedIn</a><span aria-hidden="true"> | </span>
              <a href="https://github.com/bruol" target="_blank" rel="noreferrer">GitHub</a><span aria-hidden="true"> | </span>
              <a href="https://bruol.com/" target="_blank" rel="noreferrer">bruol.com</a>
            </div>

        </header>


        <Section title="Education">
          <Entry title="ETH Zurich, MSc Computer Science" date="2025 - 2027">
            <ul>
              <li>Expected Graduation: 2027</li>
              <li>Major: Data Management Systems; <strong>Minor: Machine Learning</strong></li>
              <li><strong>Machine Perception</strong>, <strong>Computational Semantics for Natural Language Processing (5.75)</strong>, Computational Intelligence Lab, Information Security Lab (5.75)</li>
            </ul>
          </Entry>
          <Entry title="ETH Zurich, BSc Computer Science" date="2021 - 2024">
            <ul>
              <li>Graduated August 2024, GPA 5.04 (6.0 – highest)</li>
              <li><strong>Applied Computer Architecture (6)</strong>, <strong>Visual Computing (5.75)</strong>, Parallel Programming (5.75), Numerical Methods (5.75), Systems Programming and Computer Architecture (5.5), Autonomous Mobile Robots (5.25)</li>
            </ul>
          </Entry>
        </Section>

        <Section title="Work Experience">
          <Entry title="Information Security Lab Teaching Assistant, ETH Zurich (part-time)" date="2026 - Present">
            Test lab exercises and host exercise sessions
          </Entry>
          <Entry title="Software Engineer, ETH Chair of Education Systems (part-time)" date="2025 - Present">
            Sole engineer for a <a href="https://bruol.me/projects/cesbot/" target="_blank" rel="noreferrer">research-focused RAG chatbot</a> serving 1,000 users. Built a multimodal document processing pipeline with OCR and model-generated image descriptions, plus the application itself, using Next.js, Convex and Microsoft Foundry.
          </Entry>
          <Entry title="Software Engineer, ETH Game Technology Center (part-time)" date="2023 - 2025">
            <ul>
              <li><a href="https://ethz.ch/en/campus/getting-to-know/discover/tours/morph-tales.html" target="_blank" rel="noreferrer">Morph Tales Game</a>, Unity 3D</li>
              <li>Developed features for an interactive Unity 3D game and worked on generative AI in game characters.</li>
              <li>Built a game analytics pipeline using Firebase, BigQuery and Looker Studio.</li>
            </ul>
          </Entry>
          <Entry title="Coach, mint & pepper (part-time)" date="2025">
            STEM and AI tutor for high school students
          </Entry>
          <Entry title="Calculus Teaching Assistant, ETH Zurich (part-time)" date="2023">
            Host exercise classes, 15 - 30 students
          </Entry>
        </Section>

        <Section title="Personal Projects & Relevant Experience">
          <Entry title={<><a href="https://bruol.com/other/Porting_Unikraft_to_Raspberry_Pi_5.pdf" target="_blank" rel="noreferrer">Unikraft on Raspberry Pi 5</a>, ETH Semester Project</>} date="2026">
            <ul>
              <li>Ported Unikraft to Raspberry Pi 5, implementing AArch64 boot, memory initialization, interrupts and timers</li>
              <li>Developed a cache-safe kernel reload mechanism using OpenOCD and GDB, enabling repeated deployment without power-cycling.</li>
              <li>Bare-metal development and on-target debugging on an ARM SoC</li>
            </ul>
          </Entry>
          <Entry title={<><a href="https://flateroo.com/" target="_blank" rel="noreferrer">Flateroo</a>, Flat sharing platform</>} date="2024 - 2025">
            React Native app with real-time chat, Node backend and HLS video streaming
          </Entry>
          <Entry title={<><a href="https://opendemocracy.ai/electomate" target="_blank" rel="noreferrer">OpenDemocracy</a>, RAG Powered Voting Advice application for elections</>} date="2024" />
          <Entry title={<><a href="https://bruol.com/other/A_Comprehensive_Test_Environment_For_SCION_Control_Plane_Algorithms.pdf" target="_blank" rel="noreferrer">SCION Control Plane Algorithms Test Environment</a>, Bachelor Thesis</>} date="2024">
            Built a Docker-based environment and traffic generator to evaluate SCION control-plane algorithms under configurable topologies and changing link conditions.
          </Entry>
          <Entry title={<><a href="https://bruol.me/projects/sql-ast-research/" target="_blank" rel="noreferrer">SQL AST Research Project</a>, Schema-aware SQLite fuzzer in C++20</>} date="2026" />
          <Entry title={<><a href="https://bruol.me/projects/database-query-reduction/" target="_blank" rel="noreferrer">Database Query Reduction</a>, Bug reproducer reducer, 95.9% token reduction</>} date="2026" />
        </Section>

        <Section title="Skills & Interests">
          <Skill label="Languages">German (native), English (fluent), French (DELF B1)</Skill>
          <Skill label="Technologies">Python, PyTorch, C, C++, AArch64 Assembly, Embedded / Bare-metal, Kernel Development, Linux, Git, Containerization, TypeScript, React, Node.js, Java, RAG</Skill>
          <Skill label="Interests">Biking, Sports, Cooking, Dancing, Singing</Skill>
        </Section>
      </div>
    </main>
  );
}

export default SmartGlassesVlmCV;

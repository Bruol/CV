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

function AvatarMotionCV() {
  return (
    <main className="cv-classic min-h-screen bg-white py-6 text-black sm:py-10 print:min-h-0 print:py-0">
      <div className="cv-page mx-auto w-full max-w-[900px] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:px-10 sm:py-8 print:max-w-none print:bg-white print:shadow-none print:px-[12mm] print:py-[10mm]">
        <header className="pb-2.5">
          <h1 className="text-2xl font-semibold tracking-[-0.02em]">
            Lorin Urbantat
          </h1>
          <p className="mt-0.5 text-[13px] text-[#4c4a45]">
            MSc Computer Science, ETH Zurich &middot; Machine Learning & Interactive Systems
          </p>

            <div className="cv-contact">
              <a href="mailto:lorin.urbantat@gmail.com">lorin.urbantat@gmail.com</a><span aria-hidden="true"> | </span>
              <a href="https://linkedin.com/in/bruol" target="_blank" rel="noreferrer">LinkedIn</a><span aria-hidden="true"> | </span>
              <a href="https://github.com/bruol" target="_blank" rel="noreferrer">GitHub</a><span aria-hidden="true"> | </span>
              <a href="https://bruol.me/" target="_blank" rel="noreferrer">bruol.me</a>
            </div>

        </header>


        <Section title="Education">
          <Entry title="ETH Zurich, MSc Computer Science" date="2025 - 2027">
            <ul>
              <li>Expected Graduation: 2027</li>
              <li>Major: Data Management Systems; Minor: Machine Learning</li>
              <li><strong>Information Security Lab (5.75)</strong>, Computational Semantics for Natural Language Processing (5.75), Advanced Formal Language Theory (5.5)</li>
            </ul>
          </Entry>
          <Entry title="ETH Zurich, BSc Computer Science" date="2021 - 2024">
            <ul>
              <li>Graduated August 2024, GPA 5.04 (6.0 – highest)</li>
              <li>Parallel Programming (5.75), Numerical Methods (5.75), Analysis (5.5), <strong>Visual Computing (5.75)</strong>, Applied Computer Architecture (6), Human Computer Interaction (5.25)</li>
            </ul>
          </Entry>
        </Section>

        <Section title="Work Experience">
          <Entry title="Information Security Lab Teaching Assistant, ETH Zurich (part-time)" date="2026 - Present">
            Test lab exercises and host exercise sessions
          </Entry>
          <Entry title="Software Engineer, ETH Chair of Education Systems (part-time)" date="2025 - Present">
            Sole engineer for a research-focused RAG chatbot serving 1,000 users. Built the application and document processing pipeline, including OCR and image descriptions, using Next.js, Convex and Microsoft Foundry.
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

        <Section title="Selected Projects & Research Experience">
          <Entry title={<><a href="https://tldr.bruol.me/">TLDR - Speech-based Lecture Summarizer</a>, VIScon Hackathon</>} date="2023">
            Used OpenAI Whisper and language model APIs to turn lecture recordings into searchable summaries.
          </Entry>
          <Entry title={<><a href="https://bruol.me/other/A_Comprehensive_Test_Environment_For_SCION_Control_Plane_Algorithms.pdf">SCION Control Plane Algorithms Test Environment</a>, Bachelor Thesis</>} date="2024">
            Built a Docker-based test environment and traffic generator to evaluate algorithms under configurable network topologies and changing link conditions.
          </Entry>
          <Entry title={<><a href="https://bruol.me/other/Porting_Unikraft_to_Raspberry_Pi_5.pdf">Unikraft on Raspberry Pi 5</a>, ETH Semester Project</>} date="2026">
            Ported Unikraft to Raspberry Pi 5, implementing AArch64 boot, memory initialization, interrupts and timers; developed a cache-safe kernel reload mechanism with OpenOCD and GDB.
          </Entry>
          <Entry title={<><a href="https://flateroo.com/">Flateroo</a>, Flat Sharing Platform</>} date="2024 - 2025">
            Built a React Native application with real-time chat and video streaming; implemented video transcoding, HLS delivery and a PostgreSQL backend.
          </Entry>
        </Section>

        <Section title="Skills & Interests">
          <Skill label="Languages">German (native), English (fluent), French (DELF B1)</Skill>
          <Skill label="Technologies">Python, PyTorch, C, C++, Unity 3D, Machine Learning, RAG, SQL, TypeScript, React, Git, Linux, Docker</Skill>
          <Skill label="Interests">Biking, Sports, Cooking, Dancing, Singing</Skill>
        </Section>
      </div>
    </main>
  );
}

export default AvatarMotionCV;

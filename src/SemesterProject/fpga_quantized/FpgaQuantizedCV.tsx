function FpgaQuantizedCV() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] py-6 text-[#101010] sm:py-10 print:min-h-0 print:bg-white print:py-0">
    <div className="mx-auto w-full max-w-[900px] bg-[#fbfaf7] px-6 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:px-10 sm:py-8 print:max-w-none print:bg-white print:shadow-none print:px-[12mm] print:py-[10mm]">
      <header className="pb-2.5">
        <h1 className="text-2xl font-semibold tracking-[-0.02em]">
          Lorin Urbantat
        </h1>
        <p className="mt-0.5 text-[13px] text-[#4c4a45]">
          Computer Science Student @ ETH Zurich &middot; Software Engineer @
          ETH-CES
        </p>
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
        </div>
      </header>

      <section className="mt-4 pt-3">
        <h2 className="text-[15px] font-semibold text-[#2d2c29]">
          Education
        </h2>
        <div className="mt-1.5 flex flex-col gap-1.5">
          <div>
            <div className="text-[12px] font-medium">
              ETH Zurich, MSc Computer Science
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Major: Data Management Systems, Minor: Machine Learning
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2025 - present
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              ETH Zurich, BSc Computer Science 
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Graduated August 2024 with 5.04 GPA <span className="font-bold">Highlights:</span> Applied
                Computer Architecture (6.0)
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2020 - 2024
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              Waldorfschule Muelheim an der Ruhr, Abitur
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Grade 1.3 (best 1.0, worst 6.0)
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2007 - 2020
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              Deutsche Schueler Akademie
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Summer school for gifted students
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2019
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-3">
        <h2 className="text-[15px] font-semibold text-[#2d2c29]">
          Work Experience
        </h2>
        <div className="mt-1.5 flex flex-col gap-1.5">
          <div>
            <div className="text-[12px] font-medium">
              Software Engineer @ ETH Chair of Education Systems
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                <a
                  href="https://cesbot.ces.ethz.ch/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-2 hover:underline"
                >
                  CesBot
                </a>{" "}
                RAG chatbot, chat UI (Next.js, Convex), PDF processing
                pipeline (OCR, image description), Analytics, user management,
                and auth
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2024 - present
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              Software Engineer @ ETH Game Technology Center
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                <a
                  href="https://ethz.ch/en/campus/getting-to-know/discover/tours/morph-tales.html"
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-2 hover:underline"
                >
                  Morph Tales
                </a>{" "}
                2000+ users, game in Unity 3D, Analytics pipeline (Firebase,
                BigQuery, Looker Studio), GenAI in game characters
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2023 - 2025
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              Coach @ mint & pepper
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Introduce children and young people to AI
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2025
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              Calculus Exam-Preparation Course
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Exam preparation course with ~20 participants
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2023
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              Calculus Teaching Assistant, ETH Zurich
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Exercise classes with 15 - 30 students
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2023
              </div>
            </div>
          </div>
          {/* <div>
            <div className="text-[12px] font-medium">
              House Representative, WOKO
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Organization of move-outs/ins and communication between
                students and WOKO
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2021 - 2022
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              Tutor, Waldorfschule Muelheim an der Ruhr
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Tutorial classes (10 - 25 participants) in math and CS
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2017 - 2019
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              Intern, Dept, of Experimental Neurosurgery Charité
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Internship at Neurosurgery Lab
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2017
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="mt-3">
        <h2 className="text-[15px] font-semibold text-[#2d2c29]">
          Personal Projects
        </h2>
        <div className="mt-1.5 flex flex-col gap-1.5">
          <div>
            <div className="text-[12px] font-medium">
              <a
                href="https://flateroo.com/"
                target="_blank"
                rel="noreferrer"
              >
                Flateroo
              </a>
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                1000+ users, flat sharing platform (React Native and React)
                with real-time chat, video streaming
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2024 - 2025
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              <a
                href="https://opendemocracy.ai/electomate"
                target="_blank"
                rel="noreferrer"
              >
                OpenDemocracy
              </a>
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                AI powered voting advice for elections, RAG tool
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2024
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              <a
                href="https://bruol.me/other/A_Comprehensive_Test_Environment_For_SCION_Control_Plane_Algorithms.pdf"
                target="_blank"
                rel="noreferrer"
              >
                SCION Control Plane Test Environment
              </a>
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
              SCION routing, IP gateway service, link properties (tc/netem),
                beacon metadata, and internet map UI for Docker-based network
                emulator
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2024
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              <a
                href="https://tldr.bruol.me/"
                target="_blank"
                rel="noreferrer"
              >
                TLDR
              </a>
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Lecture summarizer using OpenAI Whisper and API to create
                searchable summaries
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2023
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              <a
                href="https://github.com/Bruol/kubernetes-cluster"
                target="_blank"
                rel="noreferrer"
              >
                Kubernetes Cluster
              </a>
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Homelab with k3s on Proxmox, LXC, metallb, Traefik,
                cert-manager
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2022
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-medium">
              <a href="https://bruol.me/" target="_blank" rel="noreferrer">
                bruol.me
              </a>
            </div>
            <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Portfolio website built with Next.js and Tailwind CSS
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                2022
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-3">
        <h2 className="text-[15px] font-semibold text-[#2d2c29]">
          Skills & Interests
        </h2>
        <div className="mt-1.5 flex flex-col gap-1">
          <div className="grid grid-cols-[1fr_110px] gap-2">
            <div className="text-[11px] text-[#4b4842]">
              German (native), English (fluent), French (DELF B1)
            </div>
            <div className="text-[11px] text-[#6c6760] text-right">
              Languages
            </div>
          </div>
          <div className="grid grid-cols-[1fr_110px] gap-2">
            <div className="text-[11px] text-[#4b4842]">
              <span className="font-bold">Advanced:</span> C, C++, Python,
              PyTorch, Linux, Git, Docker, bash, RAG, node, SQL, <br />
              <span className="font-bold">Good:</span> FPGA, Verilog,
              x86 Assembly, Kubernetes
            </div>
            <div className="text-[11px] text-[#6c6760] text-right">
              Technologies
            </div>
          </div>
          <div className="grid grid-cols-[1fr_110px] gap-2">
            <div className="text-[11px] text-[#4b4842]">
              Communication, Time Management, Analytical Thinking, Problem
              Solving
            </div>
            <div className="text-[11px] text-[#6c6760] text-right">
              Skills
            </div>
          </div>

          <div className="grid grid-cols-[1fr_110px] gap-2">
              <div className="text-[11px] text-[#4b4842]">
                Biking, Gym, Cooking, Dancing, Singing
              </div>
              <div className="text-[11px] text-[#6c6760] text-right">
                Interests
              </div>
            </div>
        </div>
      </section>
    </div>
  </main>
  );
}

export default FpgaQuantizedCV;

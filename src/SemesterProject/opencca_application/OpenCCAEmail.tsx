function OpenCCAEmail() {
  return (
    <main className="min-h-screen bg-white py-6 text-[#101010] sm:py-10 print:min-h-0 print:bg-white print:py-0">
      <div className="mx-auto w-full max-w-[900px] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:px-10 sm:py-8 print:max-w-none print:bg-white print:shadow-none print:px-[12mm] print:py-[10mm]">
        {/* Header / From */}
        <header className="pb-4 border-b border-[#e5e2db]">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-semibold tracking-[-0.02em]">
                Lorin Urbantat
              </h1>
              <p className="mt-0.5 text-[12px] text-[#4c4a45]">
                MSc Computer Science, ETH Zurich
              </p>
              <a
                href="mailto:lorin.urbantat@gmail.com"
                className="mt-1 inline-block text-[12px]"
              >
                lorin.urbantat@gmail.com
              </a>
            </div>
            <div className="text-right text-[11px] text-[#6c6760]">
              <p>February 2026</p>
            </div>
          </div>
        </header>

        {/* Recipient */}
        <div className="mt-5 text-[12.5px] leading-relaxed text-[#2d2c29]">
          <p className="font-medium">Andrin Bertschi</p>
          <p className="text-[#6c6760] text-[11.5px]">
            Secure and Trustworthy Systems Group
          </p>
          <p className="text-[#6c6760] text-[11.5px]">
            Department of Computer Science, ETH Zurich
          </p>
          <p className="mt-0.5">
            <a
              href="mailto:andrin.bertschi@inf.ethz.ch"
              className="text-[11.5px]"
            >
              andrin.bertschi@inf.ethz.ch
            </a>
          </p>
        </div>

        {/* Subject line */}
        <div className="mt-5 border-y border-[#e5e2db] py-2.5">
          <p className="text-[12px] text-[#6c6760]">
            <span className="font-medium text-[#2d2c29]">Subject:</span>{" "}
            Application for Semester Project &mdash; Porting OpenCCA to New Arm
            Boards and Improving Device Driver Support
          </p>
        </div>

        {/* Body */}
        <div className="mt-5 flex flex-col gap-3.5 text-[12.5px] leading-[1.7] text-[#2d2c29]">
          <p>Dear Andrin Bertschi,</p>

          <p>
            I am a Master's student in Computer Science at ETH Zurich and I am
            writing to express my interest in the semester project on porting{" "}
            <a
              href="https://opencca.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              OpenCCA
            </a>{" "}
            to new Arm boards and improving device driver support.
          </p>

          <p>
            I am genuinely fascinated by system software. Last semester I took a
            System Security course and thoroughly enjoyed it. The hands-on
            projects in particular gave me a strong appreciation for the
            challenges and intricacies of low-level security. I have been a
            Linux user for over ten years and know my way around the system in
            depth, from kernel configuration and device trees to systemd,
            networking, and shell scripting. I also have experience with
            virtualization and run my own homelab with Proxmox, LXC containers
            on a{" "}
            <a
              href="https://github.com/Bruol/kubernetes-cluster"
              target="_blank"
              rel="noreferrer"
            >
              Kubernetes cluster
            </a>
            . While I have not yet contributed to the Linux kernel, working on
            OpenCCA and its firmware/driver bring-up is exactly the kind of work
            I want to get into.
          </p>

          <p>
            Throughout my studies and work, I have been involved in several
            large-scale software projects. At the ETH Game Technology Center I
            worked on{" "}
            <a
              href="https://ethz.ch/en/campus/getting-to-know/discover/tours/morph-tales.html"
              target="_blank"
              rel="noreferrer"
            >
              Morph Tales
            </a>
            , a Unity 3D game with over 2,000 users, including its analytics
            pipeline. At the ETH Chair of Education Systems I built{" "}
            <a
              href="https://cesbot.ces.ethz.ch/"
              target="_blank"
              rel="noreferrer"
            >
              CesBot
            </a>
            , a RAG chatbot with a full PDF processing pipeline. On the side, I
            co-founded{" "}
            <a href="https://flateroo.com/" target="_blank" rel="noreferrer">
              Flateroo
            </a>
            , a flat-sharing platform with 1,000+ users. I have plenty of
            experience with C, x86 Assembly, Docker, Kubernetes, and Linux. Thus
            I think this project will be the perfect challenge because it
            involves technologies that I am not super experienced with while not
            being way over my head.
          </p>

          <p>
            A piece of code I am particularly proud of is the Flateroo video
            streaming codebase. It is an entire video streaming pipeline built
            on FFmpeg and S3 that implements a complete HLS streaming workflow,
            all maintained by me. I am proud of it because it required a deep
            understanding of video codecs, chunked streaming, and cloud
            infrastructure, and it works reliably at scale. Unfortunately, the
            repository is not open source, but I would be happy to grant access
            to anyone reviewing my application.
          </p>

          <p>
            I should be transparent that most of my work has been in private or
            proprietary codebases, and I have not yet contributed significantly
            to open source. My{" "}
            <a href="https://github.com/bruol" target="_blank" rel="noreferrer">
              GitHub profile
            </a>{" "}
            reflects this. My public projects include a Kubernetes cluster setup
            and smaller tools, but the bulk of my engineering work is in
            repositories I cannot share publicly. I see this project as an
            opportunity to change that and make meaningful open-source
            contributions.
          </p>

          <p>
            I have attached my CV for your reference. I would be glad to discuss
            my background further at your convenience.
          </p>

          <p>Best regards,</p>

          <div className="mt-1">
            <p className="font-medium">Lorin Urbantat</p>
          </div>
        </div>

        {/* Print button - hidden on print */}
        <div className="mt-8 flex gap-3 print:hidden">
          <button
            onClick={() => window.print()}
            className="rounded bg-[#2d2c29] px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#4c4a45]"
          >
            Print / Save as PDF
          </button>
          <a
            href="/"
            className="flex items-center rounded border border-[#e5e2db] px-4 py-2 text-[12px] font-medium text-[#2d2c29] transition-colors hover:bg-[#f0ede6] no-underline hover:no-underline"
          >
            View CV
          </a>
        </div>
      </div>
    </main>
  );
}

export default OpenCCAEmail;

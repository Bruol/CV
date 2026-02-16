type Experience = {
  title: string;
  company: string;
  description: string;
  link?: { url: string; label: string };
  period: string;
};

export const cv: {
  name: string;
  tagline: string;
  contact: {
    phone: string;
    email: string;
    linkedin: { url: string; label: string };
    github: { url: string; label: string };
    website: { url: string; label: string };
  };
  education: { institution: string; degree: string; detail: string; highlights?: string; period: string }[];
  experience: Experience[];
  projects: { name: string; url: string; description: string; period: string }[];
  skills: {
    languages: string;
    advanced: string;
    good: string;
    soft: string;
    interests: string;
  };
} = {
  name: "Lorin Urbantat",
  tagline: "Computer Science Student @ ETH Zurich & Software Engineer @ ETH-CES",
  contact: {
    phone: "+41 76 470 67 32",
    email: "lorin.urbantat@gmail.com",
    linkedin: { url: "https://linkedin.com/in/bruol", label: "LinkedIn" },
    github: { url: "https://github.com/bruol", label: "GitHub" },
    website: { url: "https://bruol.me", label: "bruol.me" },
  },
  education: [
    {
      institution: "ETH Zurich",
      degree: "MSc Computer Science",
      detail: "Major: Data Management Systems",
      period: "2025 - present",
    },
    {
      institution: "ETH Zurich",
      degree: "BSc Computer Science",
      detail: "Graduated August 2024 with 5.04 GPA",
      highlights: "Parallel Programming (5.75), Numerical Methods (5.75), Analysis (5.5), Visual Computing (5.75), Angewandte Computer Architektur (6)",
      period: "2020 - 2024",
    },
    {
      institution: "Waldorfschule Muelheim an der Ruhr",
      degree: "Abitur",
      detail: "Grade 1.3 (best 1.0, worst 6.0)",
      period: "2007 - 2020",
    },
    {
      institution: "Deutsche Schueler Akademie",
      degree: "Summer School",
      detail: "Summer school for gifted students",
      period: "2019",
    },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "ETH Chair of Education Systems",
      description: "CesBot RAG chatbot, chat UI (Next.js, Convex). PDF processing pipeline (OCR, image description). Analytics, user management, and auth",
      link: { url: "https://cesbot.ces.ethz.ch/", label: "CesBot" },
      period: "2024 - now",
    },
    {
      title: "Software Engineer",
      company: "ETH Game Technology Center",
      description: "Morph Tales: 2000+ users, game in Unity 3D. Analytics pipeline (Firebase, BigQuery, Looker Studio). GenAI in game characters",
      link: { url: "https://ethz.ch/en/campus/getting-to-know/discover/tours/morph-tales.html", label: "Morph Tales" },
      period: "2023 - 2025",
    },
    {
      title: "Coach",
      company: "mint & pepper",
      description: "Introduce children and young people to AI",
      period: "2025",
    },
    {
      title: "Calculus Exam-Preparation Course",
      company: "",
      description: "Exam preparation course with ~20 participants",
      period: "2023",
    },
    {
      title: "Calculus Teaching Assistant",
      company: "ETH Zurich",
      description: "Exercise classes with 15 - 30 students",
      period: "2023",
    },
    {
      title: "House Representative",
      company: "WOKO",
      description: "Organization of move-outs/ins and communication between students and WOKO",
      period: "2021 - 2022",
    },
    {
      title: "Tutor",
      company: "Waldorfschule Muelheim an der Ruhr",
      description: "Tutorial classes (10 - 25 participants) in math and CS",
      period: "2017 - 2019",
    },
    {
      title: "Intern",
      company: "Dept. of Experimental Neurosurgery Charite",
      description: "Internship at Neurosurgery Lab",
      period: "2017",
    },
  ],
  projects: [
    {
      name: "Flateroo",
      url: "https://flateroo.com/",
      description: "1000+ users, Flat sharing platform (React Native) with real-time chat, video streaming",
      period: "2024 - 2025",
    },
    {
      name: "Electomate",
      url: "https://electomate.com/",
      description: "AI powered voting advice for elections. RAG tool",
      period: "2024",
    },
    {
      name: "SCION Control Plane Test Environment",
      url: "https://bruol.me/other/A_Comprehensive_Test_Environment_For_SCION_Control_Plane_Algorithms.pdf",
      description: "Network emulator and traffic generator",
      period: "2024",
    },
    {
      name: "TLDR",
      url: "https://tldr.bruol.me/",
      description: "Lecture summarizer using OpenAI Whisper and API to create searchable summaries",
      period: "2023",
    },
    {
      name: "3 Node Kubernetes Cluster",
      url: "https://github.com/Bruol/kubernetes-cluster",
      description: "k3s on Proxmox LXC. metallb, Traefik, cert-manager",
      period: "2022",
    },
    {
      name: "bruol.me",
      url: "https://bruol.me/",
      description: "Portfolio website built with Next.js and Tailwind CSS",
      period: "2022",
    },
  ],
  skills: {
    languages: "German (native), English (fluent), French (DELF B1)",
    advanced: "C, C++, Typescript, React, Python, Java, Git, Linux, Docker, Kubernetes, Unity 3D, React-Native, Node, SQL, RAG, PCA",
    good: "Ansible, LaTeX, x86 Assembly, Eigen, FPGA, Bash, Virtualization, BigQuery, Firebase, Google Looker Studio, Jenkins",
    soft: "Communication, Time Management, Analytical Thinking, Problem Solving",
    interests: "Biking, Sports, Cooking, Dancing, Singing",
  },
};

export type CV = typeof cv;

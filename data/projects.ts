export type Project = {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    githubUrl: "https://github.com/kaewkamol-a4/portfolio",
    liveUrl: "#",
  },
  {
    title: "Dashboard App",
    description: "Responsive dashboard UI with modern design",
    githubUrl: "#",
  },
  {
    title: "Todo App",
    description: "Simple todo app using React hooks",
    githubUrl: "#",
  },
];

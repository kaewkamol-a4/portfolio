import ProjectCard from "@/components/Projectcard";
// import { projects } from "@/data/projects";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    githubUrl: "https://github.com/kaewkamol-a4/portfolio",
    liveUrl: "#",
  },
  {
    title: "Dashboard App",
    description: "Responsive dashboard with modern UI",
    githubUrl: "#",
  },
  {
    title: "Todo App",
    description: "Simple todo app using React hooks",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    githubUrl: "https://github.com/kaewkamol-a4/portfolio",
    liveUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div
  className="
    border rounded-xl p-6 flex flex-col justify-between
    transition
    hover:shadow-lg
    hover:-translate-y-1
  "
>

      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="flex gap-4 mt-6">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            className="flex items-center gap-2 text-sm hover:underline"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}

        <a
  href={githubUrl}
  target="_blank"
  className="
    flex items-center gap-2 text-sm
    text-gray-600
    hover:text-black
    transition
  "
>

          <Github size={16} />
          Code
        </a>
      </div>
    </div>
  );
}

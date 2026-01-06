import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Hi, I’m Kan 👋
      </h1>

      <p className="text-gray-600 text-lg max-w-2xl mb-8">
        Junior Frontend Developer passionate about building modern,
        responsive web applications with React and Next.js.
      </p>

      <div className="flex gap-4">
        <Link
          href="/projects"
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg"
        >
          View Projects
          <ArrowRight size={18} />
        </Link>

        <Link
          href="/contact"
          className="border px-6 py-3 rounded-lg"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

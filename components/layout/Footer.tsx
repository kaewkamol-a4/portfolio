
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col items-center gap-4">

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/kaewkamol-a4"
            target="_blank"
            className="text-gray-500 hover:text-black transition"
          >
            <Github />
          </a>

          <a
            href="#"
            className="text-gray-500 hover:text-black transition"
          >
            <Linkedin />
          </a>

          <a
            href="mailto:you@email.com"
            className="text-gray-500 hover:text-black transition"
          >
            <Mail />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 Kan Kaewkamol. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


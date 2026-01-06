export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I’m kan kaewkamol
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Junior Frontend Developer who loves building modern web applications.
        </p>
        <a
          href="/projects"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg"
        >
          View My Projects
        </a>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex gap-4 flex-wrap">
          <li className="px-4 py-2 border rounded-lg">React</li>
          <li className="px-4 py-2 border rounded-lg">Next.js</li>
          <li className="px-4 py-2 border rounded-lg">TypeScript</li>
          <li className="px-4 py-2 border rounded-lg">Tailwind CSS</li>
        </ul>
      </section>
    </main>
  );
}
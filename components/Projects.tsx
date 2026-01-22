const projects = [
  {
    title: "Dash2Career",
    description: "Career path navigator for tech enthusiasts.",
    tech: ["React Native", "TailwindCSS", "AWS Lambda", "DynamoDB"],
    link: "https://dash2career.ph/",
  },
  {
    title: "tape.",
    description: "Secure note-taking and task management app.",
    tech: ["React Native", "Node.js", "MySQL"],
    link: "https://github.com/unesssss/tape-app.git",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Project Gallery</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-2xl border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-2 text-zinc-600">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                {project.tech.join(" • ")}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

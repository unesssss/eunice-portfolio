import Image from "next/image";

const projects = [
  {
    title: "Dash2Career",
    description: "Web app for exploring tech career paths.",
    tech: ["React Native", "TailwindCSS", "AWS Lambda", "DynamoDB"],
    link: "https://dash2career.ph/",
    image: "/images/dash2career.png",
  },
  {
    title: "tape.",
    description: "Secure note-taking and task management app.",
    tech: ["React Native", "Node.js", "MySQL"],
    link: "https://github.com/unesssss/tape-app.git",
    image: "/images/tape.png",
  },
  {
    title: "GabayPH",
    description: "Legal reference mobile app developed for DILG.",
    tech: ["Figma", "FlutterFlow", "Google App Script"],
    link: "https://app.flutterflow.io/project/g-a-b-a-y-p-h-search-4ovpne",
    image: "/images/gabayph.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Project Gallery</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={350}
                className="object-cover w-full h-56"
              />

              <div className="p-6">
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
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

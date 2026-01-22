import Image from "next/image";

const projects = [
  {
    title: "Dash2Career",
    description: "Web app for exploring tech career paths with personalized recommendations and interactive learning paths.",
    tech: ["React Native", "TailwindCSS", "AWS Lambda", "DynamoDB"],
    link: "https://dash2career.ph/",
    image: "/dash2career.png",
    category: "Web App",
    role: "UI/UX Designer & Developer"
  },
  {
    title: "tape.",
    description: "Secure note-taking and task management app with end-to-end encryption and intuitive organization.",
    tech: ["React Native", "Node.js", "MySQL"],
    link: "https://github.com/unesssss/tape-app.git",
    image: "/tape.png",
    category: "Mobile App",
    role: "UI/UX Designer & Developer"
  },
  {
    title: "GabayPH",
    description: "Legal reference mobile app developed for DILG-Cavite, providing accessible legal information to citizens.",
    tech: ["Figma", "FlutterFlow", "Google App Script"],
    link: "https://app.flutterflow.io/project/g-a-b-a-y-p-h-search-4ovpne",
    image: "/gabayph.png",
    category: "Mobile App",
    role: "UI/UX Designer"
  },
  {
    title: "Redesign of SHL Game Center",
    description: "UI/UX redesign of the Swedish Hockey League Game Center, focusing on improved game visibility and modern sports dashboard aesthetics.",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Design Systems"],
    link: "https://www.figma.com/design/aTleOaaowk6EQrgRWd92u4/Redesign-SHL-Game-Center?node-id=0-1&t=NAP4Ug4cbyPYCkko-1",
    image: "/shl.png",
    category: "UI/UX Design",
    role: "UI/UX Designer"
  },
  {
    title: "FitSync",
    description: "Gym data synchronization system for user progress tracking with real-time analytics and social features.",
    tech: ["Next.js", "Firebase", "TailwindCSS"],
    link: "https://github.com/chopsuee/Softeng2.git",
    image: "/fit.png",
    category: "Web App",
    role: "UI/UX Designer & Developer"
  },
  {
    title: "Paw-Sprint: The Hungry Cat's Dash",
    description: "2D endless runner game with engaging UI/UX design, character progression, and intuitive game mechanics.",
    tech: ["Game Design", "UI/UX", "Godot Engine"],
    link: "https://drive.google.com/file/d/1r_frXQSLcJjjo4ZEiynU084OzIpe-Jne/view?usp=sharing",
    image: "/paww.png",
    category: "Game Design",
    role: "UI/UX Designer"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium mb-6 hover:bg-stone-200 hover:scale-105 transition-all duration-300">
            <span className="w-2 h-2 bg-stone-600 rounded-full animate-pulse"></span>
            Featured Work
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 hover:text-stone-700 transition-colors duration-300">
            Projects That{" "}
            <span className="text-stone-700 hover:text-black transition-colors duration-300">
              Solve Problems
            </span>
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed hover:text-stone-700 transition-colors duration-300">
            Each project represents a unique challenge solved through thoughtful design, 
            user research, and iterative development. From concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-stone-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-700 text-sm font-medium rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8 bg-white">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-stone-700 transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm font-medium text-stone-700 mb-3 group-hover:text-stone-800 transition-colors duration-300">{project.role}</p>
                  <p className="text-stone-600 leading-relaxed group-hover:text-stone-700 transition-colors duration-300">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-stone-100 text-stone-700 text-sm rounded-full font-medium hover:bg-stone-200 hover:scale-105 transition-all duration-300"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-xl font-semibold hover:bg-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  View Project
                  <svg className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-stone-50 rounded-2xl shadow-sm border border-stone-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-2xl font-bold text-black hover:text-stone-700 transition-colors duration-300">Interested in working together?</h3>
            <p className="text-stone-600 hover:text-stone-700 transition-colors duration-300">Let's create something amazing that users will love.</p>
            <a
              href="https://www.linkedin.com/in/eunice-ope%C3%B1a/"
              target="_blank"
              className="px-8 py-4 bg-stone-800 text-white rounded-2xl font-semibold hover:bg-black hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
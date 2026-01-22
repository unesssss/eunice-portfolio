export default function Experience() {
  const experiences = [
    {
      title: "UI/UX Designer & Frontend Developer",
      company: "CloudSensei",
      period: "2024 - Present",
      type: "Internship",
      description: "Led the design and development of Dash2Career, a comprehensive career path navigator for tech enthusiasts. Collaborated with cross-functional teams to create user-centered solutions.",
      achievements: [
        "Designed end-to-end user experience for 500+ users",
        "Improved user engagement by 40% through intuitive interface design",
        "Implemented responsive design system using React Native and TailwindCSS"
      ],
      skills: ["UI/UX Design", "React Native", "User Research", "Prototyping"]
    },
    {
      title: "UI/UX Designer & Developer (Intern)",
      company: "Department of the Interior and Local Government – Cavite",
      period: "2023 - 2024",
      type: "Internship",
      description: "Contributed to GabayPH, a legal information mobile application designed to make legal resources accessible to Filipino citizens.",
      achievements: [
        "Designed user-friendly interface for complex legal information",
        "Conducted user testing sessions with government officials",
        "Created comprehensive design documentation and style guides"
      ],
      skills: ["Figma", "FlutterFlow", "User Testing", "Government Systems"]
    },
    {
      title: "Co-lead and Chief of Finance",
      company: "Amazon Web Services Learning Club",
      period: "2023 - 2024",
      type: "Leadership",
      description: "Co-led organizational initiatives while supporting the design and planning of tech-focused events. Contributed to creating clear, user-friendly learning experiences by aligning cloud concepts with intuitive workflows and visual structures.",
      achievements: [
        "Co-led planning and execution of technical workshops with a focus on clear information hierarchy and user flow",
        "Supported budgeting and resource allocation for design- and tech-driven events",
        "Mentored members on presenting complex technical concepts in a user-friendly manner"
      ],
      skills: ["Team Leadership", "Event Planning", "AWS Services", "Design Thinking", "Community Building"]
    }
  ];

  return (
    <section className="py-32 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-stone-600 rounded-full"></span>
            Professional Journey
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Experience &{" "}
            <span className="text-stone-700">
              Growth
            </span>
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Building expertise through hands-on experience in UI/UX design, 
            frontend development, and collaborative problem-solving.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-stone-800 rounded-full border-4 border-white shadow-sm hidden md:block"></div>
                
                {/* Content */}
                <div className="md:ml-20 bg-white rounded-2xl p-8 border border-stone-200 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">{exp.title}</h3>
                      <p className="text-lg font-semibold text-stone-700 mb-1">{exp.company}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-stone-600">{exp.period}</span>
                        <span className="px-3 py-1 bg-stone-100 text-stone-700 text-sm rounded-full font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-stone-600 leading-relaxed mb-6">{exp.description}</p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-stone-600 rounded-full mt-2 shrink-0"></div>
                          <span className="text-stone-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-black mb-3">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-stone-50 border border-stone-200 text-stone-700 text-sm rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 p-8 bg-stone-800 rounded-2xl text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
            <p className="text-stone-300">Skills developed through professional experience and continuous learning</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-sm text-stone-300">UI/UX Design, Prototyping, Design Systems, User Research</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2">Development</h4>
              <p className="text-sm text-stone-300">React Native, Next.js, TailwindCSS, Frontend Architecture</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">☁️</div>
              <h4 className="font-semibold mb-2">Cloud & Tools</h4>
              <p className="text-sm text-stone-300">AWS Services, Figma, Adobe Creative Suite, Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
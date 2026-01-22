export default function About() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-black hover:text-stone-700 transition-colors duration-300">
                Crafting Digital Experiences That{" "}
                <span className="text-stone-700 hover:text-black transition-colors duration-300">
                  Matter
                </span>
              </h2>
              
              <div className="w-20 h-1 bg-stone-800 rounded-full hover:w-32 transition-all duration-500"></div>
            </div>

            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p className="hover:text-stone-700 transition-colors duration-300">
                I'm a <span className="font-semibold text-black hover:text-stone-800 transition-colors duration-300">fourth-year Computer Science student</span> with a passion for creating intuitive, accessible, and meaningful digital experiences. My design philosophy centers on the belief that great design should be invisible — it should feel natural and effortless to users.
              </p>
              
              <p className="hover:text-stone-700 transition-colors duration-300">
                I specialize in <span className="font-semibold text-black hover:text-stone-800 transition-colors duration-300">UI/UX design, front-end development, and cloud technologies</span>, always approaching projects with a user-first mindset. Every pixel, interaction, and user journey is carefully considered to create solutions that not only look beautiful but solve real problems.
              </p>
            </div>

            {/* Design Process */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-black mb-6 hover:text-stone-700 transition-colors duration-300">My Design Process</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { step: "01", title: "Research", desc: "Understanding users & problems" },
                  { step: "02", title: "Ideate", desc: "Exploring creative solutions" },
                  { step: "03", title: "Design", desc: "Creating intuitive interfaces" },
                  { step: "04", title: "Test", desc: "Validating with real users" }
                ].map((item, index) => (
                  <div 
                    key={item.step} 
                    className="p-4 bg-stone-50 rounded-xl border border-stone-200 hover:bg-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-sm font-bold text-stone-700 mb-1 hover:text-stone-800 transition-colors duration-300">{item.step}</div>
                    <div className="font-semibold text-black text-sm hover:text-stone-800 transition-colors duration-300">{item.title}</div>
                    <div className="text-xs text-stone-600 mt-1 hover:text-stone-700 transition-colors duration-300">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="space-y-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 hover:bg-stone-100 hover:shadow-lg transition-all duration-500">
              <h3 className="text-2xl font-bold text-black mb-6 hover:text-stone-700 transition-colors duration-300">Impact & Experience</h3>
              
              <div className="space-y-6">
                {[
                  { number: "2+", label: "Years of Design Experience", icon: "🎨" },
                  { number: "5+", label: "Projects Completed", icon: "🚀" },
                  { number: "2", label: "Industry Internships", icon: "💼" },
                  { number: "4", label: "Professional Certifications", icon: "🏆" }
                ].map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="flex items-center gap-4 hover:transform hover:scale-105 transition-all duration-300 cursor-default"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-2xl hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div>
                      <div className="text-2xl font-bold text-black hover:text-stone-700 transition-colors duration-300">{stat.number}</div>
                      <div className="text-sm text-stone-600 hover:text-stone-700 transition-colors duration-300">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Tools */}
            <div className="space-y-6">
              <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-lg text-black mb-3 hover:text-stone-700 transition-colors duration-300">Education</h3>
                <p className="text-stone-700 font-medium hover:text-black transition-colors duration-300">Cavite State University – Main Campus</p>
                <p className="text-stone-600 hover:text-stone-700 transition-colors duration-300">Bachelor of Science in Computer Science</p>
                <p className="text-sm text-stone-500 mt-2 hover:text-stone-600 transition-colors duration-300">2022 – Present</p>
              </div>
              
              <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-lg text-black mb-4 hover:text-stone-700 transition-colors duration-300">Design Tools</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Figma", "Wix Studio", "Blender", "Principle", "Canva", "Notion"].map((tool, index) => (
                    <div 
                      key={tool} 
                      className="text-center p-2 bg-stone-50 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-black hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
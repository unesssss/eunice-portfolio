export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      {/* Main Footer Content */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - CTA */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight hover:text-stone-200 transition-colors duration-300">
                  Let's Create Something{" "}
                  <span className="text-stone-300 hover:text-white transition-colors duration-300">
                    Amazing Together
                  </span>
                </h2>
                <p className="text-xl text-stone-300 leading-relaxed hover:text-stone-200 transition-colors duration-300">
                  Ready to bring your ideas to life with thoughtful design and seamless user experiences? 
                  I'd love to hear about your project.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:michelle.opena03@gmail.com"
                  className="group px-8 py-4 bg-white text-stone-800 rounded-2xl font-semibold hover:bg-stone-100 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Get In Touch
                </a>
                
                <a
                  href="https://www.linkedin.com/in/eunice-ope%C3%B1a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 border-2 border-stone-600 hover:border-stone-400 rounded-2xl font-semibold hover:bg-stone-700 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-8">
              <div className="p-8 bg-stone-700 rounded-2xl border border-stone-600 hover:bg-stone-600 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 hover:text-stone-200 transition-colors duration-300">Contact Information</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      ),
                      title: "Location",
                      content: "Cavite, Philippines"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      ),
                      title: "Email",
                      content: "michelle.opena03@gmail.com",
                      isLink: true
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.001 4.568C14.463 13.832 12.858 14.56 11 14.56s-3.463-.728-4.567-1.832C5.328 11.623 4.6 10.018 4.6 8.16 4.6 6.302 5.328 4.697 6.433 3.593 7.537 2.488 9.142 1.76 11 1.76s3.463.728 4.567 1.833C16.672 4.697 17.4 6.302 17.4 8.16z"/>
                        </svg>
                      ),
                      title: "Status",
                      content: "Available for UI/UX Design Roles"
                    }
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="flex items-center gap-4 hover:transform hover:scale-105 transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-white text-stone-800 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold hover:text-stone-200 transition-colors duration-300">{item.title}</p>
                        {item.isLink ? (
                          <a 
                            href={`mailto:${item.content}`}
                            className="text-stone-300 hover:text-white transition-colors duration-300"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-stone-300 hover:text-stone-200 transition-colors duration-300">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { href: "#projects",label: "Projects" },
                  { href: "#about", label: "About" }
                ].map((link, index) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    className="p-4 bg-stone-700 rounded-2xl text-center hover:bg-stone-600 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="font-semibold hover:text-stone-200 transition-colors duration-300">{link.label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-600 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-white text-stone-800 rounded-xl flex items-center justify-center font-bold hover:rotate-12 hover:scale-110 transition-all duration-300">
              E
            </div>
            <div>
              <p className="font-semibold hover:text-stone-200 transition-colors duration-300">Eunice Opeña</p>
              <p className="text-sm text-stone-400 hover:text-stone-300 transition-colors duration-300">UI/UX Designer & Developer</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-stone-400 hover:text-stone-300 transition-colors duration-300">
              © {new Date().getFullYear()} Eunice Opeña. Crafted with passion for great design.
            </p>
            <p className="text-xs text-stone-500 mt-1 hover:text-stone-400 transition-colors duration-300">
              Built with Next.js, TailwindCSS, and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
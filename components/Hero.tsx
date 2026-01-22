"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-stone-50">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium hover:bg-stone-200 transition-all duration-300 transform hover:scale-105">
              <span className="w-2 h-2 bg-stone-600 rounded-full animate-pulse"></span>
              Available for UI/UX Design Roles
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="text-stone-800 hover:text-black transition-colors duration-300">
                Eunice
              </span>
            </h1>
            
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
              UI/UX Designer passionate about creating{" "}
              <span className="font-semibold text-black">meaningful digital experiences</span>{" "}
              that bridge technology and human needs through thoughtful design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-stone-800 text-white rounded-2xl font-semibold hover:bg-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/eunice-ope%C3%B1a/"
              target="_blank"
              className="px-8 py-4 border-2 border-stone-300 hover:border-stone-800 rounded-2xl font-semibold hover:bg-stone-100 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Skills Preview */}
          <div className="pt-8">
            <p className="text-sm font-medium text-stone-500 mb-4">CORE EXPERTISE</p>
            <div className="flex flex-wrap gap-3">
              {["UI/UX Design", "Figma", "Design Systems", "User Research", "Prototyping"].map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-medium text-stone-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-stone-300 rounded-3xl blur-2xl opacity-20 scale-110 group-hover:opacity-30 transition-opacity duration-500"></div>
            <Image
              src="/hero.png"
              alt="Eunice - UI/UX Designer"
              width={500}
              height={500}
              className="relative rounded-3xl shadow-lg border-4 border-white hover:shadow-xl hover:scale-105 transition-all duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
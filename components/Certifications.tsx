import Image from "next/image";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "2024",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=46975D6FD88740C292CA17EDC756265EF15297AE9457BA8F923D322580D792A5",
    image: "/oracle-cert.png",
    category: "Cloud & AI",
    description: "Advanced certification in generative AI technologies and Oracle Cloud Infrastructure services."
  },
  {
    title: "Amazon API Gateway – TutorialsDojo",
    issuer: "TutorialsDojo",
    date: "2025",
    link: "https://www.credly.com/badges/76ca3f81-1524-4ffe-98f1-4d52903375ac",
    image: "/aws-cert.png",
    category: "Cloud Services",
    description: "Comprehensive understanding of AWS API Gateway for building and managing APIs."
  },
  {
    title: "Enterprise Design Thinking Practitioner – IBM SkillsBuild",
    issuer: "IBM",
    date: "2026",
    link: "https://www.credly.com/badges/c8914bd9-7933-49cf-9b9e-854eb714479b",
    image: "/ibm-cert.png",
    category: "Design Thinking",
    description: "Professional certification in enterprise-level design thinking methodologies and practices."
  },
  {
    title: "Introduction to IoT – Cisco Networking Academy",
    issuer: "Cisco",
    date: "2026",
    link: "https://www.credly.com/badges/c8914bd9-7933-49cf-9b9e-854eb714479b",
    image: "/cisco-cert.png",
    category: "IoT & Networking",
    description: "Foundational knowledge in Internet of Things technologies and networking principles."
  },
];

export default function Certifications() {
  return (
    <section className="py-32 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-stone-600 rounded-full"></span>
            Professional Development
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Certifications
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through industry-recognized 
            certifications in design, cloud technologies, and emerging tech.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    width={80}
                    height={80}
                    className="rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-stone-800 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-medium rounded-full">
                      {cert.category}
                    </span>
                    <span className="text-sm text-stone-500">{cert.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-black leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-stone-700 font-semibold text-sm mb-3">{cert.issuer}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-600 leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* CTA */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-xl font-semibold hover:bg-black transition-all duration-300 w-full justify-center"
              >
                View Certificate
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
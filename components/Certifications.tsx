const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=46975D6FD88740C292CA17EDC756265EF15297AE9457BA8F923D322580D792A5",
  },
  {
    title: "Amazon API Gateway – TutorialsDojo",
    link: "https://www.credly.com/badges/76ca3f81-1524-4ffe-98f1-4d52903375ac",
  },
  {
    title: "Enterprise Design Thinking Practitioner – IBM SkillsBuild",
    link: "https://www.credly.com/badges/c8914bd9-7933-49cf-9b9e-854eb714479b",
  },
  {
    title: "Introduction to IoT – Cisco Networking Academy",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Certifications</h2>

        <ul className="space-y-5">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="border-l-4 border-blue-600 pl-4"
            >
              <a
                href={cert.link}
                target="_blank"
                className="text-zinc-700 hover:underline"
              >
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

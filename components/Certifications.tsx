const certifications = [
  "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
  "Amazon API Gateway – TutorialsDojo",
  "Enterprise Design Thinking Practitioner – IBM SkillsBuild",
  "Introduction to IoT – Cisco Networking Academy",
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Certifications</h2>

        <ul className="space-y-4 text-zinc-600">
          {certifications.map((cert) => (
            <li key={cert} className="border-l-4 border-blue-600 pl-4">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

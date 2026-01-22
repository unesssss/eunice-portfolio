export default function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">About Eunice Opeña</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <p className="text-zinc-600 leading-relaxed">
          I’m a fourth-year Computer Science student passionate about UI/UX design,
          front-end development, and cloud technologies.
          <br /><br />
          My design philosophy centers on simplicity and accessibility — creating
          interfaces that are not only beautiful but also intuitive and inclusive.
          <br /><br />
          Through experiences at CloudSensei, AWS Learning Club, and DILG,
          I’ve designed and developed applications that solve real-world problems.
        </p>

        <div className="bg-zinc-50 p-6 rounded-2xl border">
          <h3 className="font-semibold text-lg">Education</h3>
          <p className="mt-2 text-zinc-700">
            Cavite State University – Main Campus
          </p>
          <p className="text-zinc-500">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            2022 – Present
          </p>
        </div>
      </div>
    </section>
  );
}
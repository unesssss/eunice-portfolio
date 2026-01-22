import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <p className="text-sm uppercase tracking-wide text-zinc-500">
            Explore my journey below
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold">
            Hello, I am <span className="text-blue-600">Eunice!</span>
          </h1>

          <p className="mt-6 text-zinc-600 leading-relaxed max-w-xl">
            I believe design should be both functional and meaningful.
            My works combine creativity, usability, and innovation —
            bridging technology and user experience.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/eunice-ope%C3%B1a/"
              target="_blank"
              className="px-6 py-3 rounded-xl border hover:bg-zinc-100 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/hero.png"
            alt="Eunice portrait"
            width={420}
            height={420}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
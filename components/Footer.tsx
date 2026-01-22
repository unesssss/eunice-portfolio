export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-zinc-900 text-zinc-300">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <p>📍 Cavite, Philippines</p>

        <p>
          📧{" "}
          <a
            href="mailto:michelle.opena03@gmail.com"
            className="hover:underline"
          >
            michelle.opena03@gmail.com
          </a>
        </p>

        <a
          href="https://www.linkedin.com/in/eunice-ope%C3%B1a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>

        <p className="text-sm text-zinc-500 pt-6">
          © {new Date().getFullYear()} Eunice Opeña
        </p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-forest-surface bg-alpine-black py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-stone">
          &copy; {new Date().getFullYear()} Shane. Built with React &amp;
          Tailwind. Color palette stolen from my{" "}
          <a
            href="https://outway.com/products/howl-crew"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone transition-colors hover:text-frost"
          >
            Outway Howl Crews
          </a>
          . Great sock brand, I own many - go buy some.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-stone transition-colors hover:text-frost"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

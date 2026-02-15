import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-alpine-black/90 via-alpine-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-alpine-black via-transparent to-transparent" />

      <a
        href="https://outway.com/products/howl-crew"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-6 z-10 text-[10px] text-stone/40 transition-colors hover:text-stone/70"
      >
        * design inspired by my Outway socks, highly recommend
      </a>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-frost">Shane</span>.
          </h1>
          <p className="mt-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            I build products that{" "}
            <span className="text-blossom">scale</span>.
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-silver">
            Staff engineer with over a decade in fintech and SaaS.
            I care deeply about building the right thing for the user,
            owning complex systems, and leveling up the people around me.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-glacier px-6 py-3 text-sm font-semibold text-moonlight transition-colors hover:bg-frost"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-ember px-6 py-3 text-sm font-semibold text-ember transition-colors hover:bg-ember/10 hover:text-moonlight"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

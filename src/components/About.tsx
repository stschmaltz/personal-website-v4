import aboutPhoto from "../assets/about-photo.webp";
import { useFadeIn } from "../hooks/useFadeIn";

const TAGS = [
  { label: "Systems Builder", color: "bg-glacier/20 text-frost border-glacier/30" },
  { label: "AI Tinkerer", color: "bg-petal/12 text-petal border-petal/25" },
  { label: "Snowboarder", color: "bg-ember/15 text-ember border-ember/25" },
  { label: "Dungeon Master", color: "bg-[#7c3aed]/15 text-[#a78bfa] border-[#7c3aed]/25" },
  { label: "Music Lover", color: "bg-[#0ea5e9]/15 text-[#38bdf8] border-[#0ea5e9]/25" },
];

const STATS = [
  { value: "10+", label: "Years building" },
  { value: "Staff", label: "Level engineer" },
  { value: "∞", label: "Things left to learn" },
];

export default function About() {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <section id="about" className="scroll-mt-20 bg-deep-night py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 fade-in-up ${visible ? "visible" : ""}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-glacier sm:text-4xl">
              About Me
            </h2>

            <p className="mt-6 leading-relaxed text-silver">
              I'm a staff engineer based in Calgary, Canada, currently building at
              EdVisorly. I've spent my career at startups and high-growth
              companies — joining early, building core systems from scratch,
              and figuring out what to ship next alongside the people who use it.
            </p>
            <p className="mt-4 leading-relaxed text-silver">
              Outside of work I'm usually snowboarding in the Rockies, 3D printing
              something, playing drums in my basement, or running D&D campaigns
              that go off the rails. I live with my wife and two cats who run
              the house.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-frost">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-stone">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-forest-surface shadow-2xl">
            <img
              src={aboutPhoto}
              alt="Shane snowboarding in the Canadian Rockies"
              width={925}
              height={1024}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-night/80 via-deep-teal/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-deep-night/25" />
          </div>
        </div>
      </div>
    </section>
  );
}

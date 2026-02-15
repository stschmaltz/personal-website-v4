import aboutPhoto from "../assets/about-photo.webp";

const TAGS = [
  {
    label: "Systems Builder",
    color: "bg-glacier/20 text-frost border-glacier/30",
  },
  {
    label: "AI Tinkerer",
    color: "bg-deep-teal/30 text-frost border-deep-teal/40",
  },
  {
    label: "Dungeon Master",
    color: "bg-blossom/15 text-petal border-blossom/25",
  },
  { label: "Snowboarder", color: "bg-ember/15 text-ember border-ember/25" },
  { label: "Music Lover", color: "bg-glacier/15 text-glacier border-glacier/25" },
];

const STATS = [
  { value: "10+", label: "Years building" },
  { value: "Staff", label: "Level engineer" },
  { value: "∞", label: "Things left to learn" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-deep-night py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
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

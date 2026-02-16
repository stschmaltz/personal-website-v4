import { Link } from "react-router-dom";

const INTERESTS = [
  {
    title: "Snowboarding",
    description:
      "I ride as much as I can in the Canadian Rockies. Lake Louise, Sunshine, Kicking Horse, wherever the snow is good. It's the thing that clears my head the most.",
    emoji: "🏂",
  },
  {
    title: "3D Printing",
    description:
      "I'm always printing something. Organizers, minis for D&D, stuff for around the house. Every finished print gives you three new ideas.",
    emoji: "🖨️",
  },
  {
    title: "Drumming",
    description:
      "Self-taught and still learning. I play in my basement, mostly to whatever's in my headphones. I built Practice Pal partly to track my own progress.",
    emoji: "🥁",
  },
  {
    title: "D&D",
    description:
      "I DM a regular campaign and I've built two apps to support it. World-building and encounter design scratch the same itch as software architecture for me.",
    emoji: "🐉",
  },
  {
    title: "Cats",
    description:
      "Two cats run the house. They have opinions about my standing desk, my keyboard, and when it's time to stop working.",
    emoji: "🐈",
  },
  {
    title: "Music",
    description:
      "Always digging for something new. I listen to a bit of everything, so if you have a recommendation, send it my way.",
    emoji: "🎵",
  },
];


export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-alpine-black pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-4">
          <Link
            to="/"
            className="text-sm text-stone transition-colors hover:text-frost"
          >
            ← Back home
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-moonlight sm:text-5xl">
          Beyond the Code
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-silver">
          The stuff I do when I'm not staring at a terminal. I like building things with my hands,
          learning things slowly, and spending time with the people (and cats) I care about.
        </p>

        <section className="mt-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-glacier">
            Things I'm Into
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {INTERESTS.map((interest) => (
              <div
                key={interest.title}
                className="rounded-lg border border-forest-surface bg-deep-night/50 p-5 transition-colors hover:border-glacier/30"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{interest.emoji}</span>
                  <h3 className="text-lg font-bold text-moonlight">{interest.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-silver">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-lg border border-forest-surface bg-deep-night/30 p-6 text-center">
          <p className="text-silver">
            Want to chat about any of this stuff?
          </p>
          <Link
            to="/#contact"
            className="mt-4 inline-block rounded-lg bg-glacier px-6 py-2.5 text-sm font-semibold text-moonlight transition-colors hover:bg-frost"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    name: "Behind the Screen",
    description:
      "I DM a lot. Got tired of juggling paper and tabs mid-combat, so I built a proper encounter and initiative tracker.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    link: "https://github.com/stschmaltz/behind-the-screen",
  },
  {
    name: "DME Mastra",
    description:
      "AI-powered D&D loot and NPC generator. Built with the Mastra agent framework — point it at SRD data and let it create encounters.",
    tags: ["TypeScript", "Mastra", "AI Agents"],
    link: "https://github.com/stschmaltz/dme-mastra",
  },
  {
    name: "Fitness Fam",
    description:
      "A free PWA for building workout routines. Search a huge exercise catalogue, organize your splits, and track what you're doing.",
    tags: ["Next.js", "React", "GraphQL", "MongoDB"],
    link: "https://github.com/stschmaltz/fitness-fam",
  },
  {
    name: "Practice Pal",
    description:
      "I play drums and bass. This tracks practice sessions across instruments so I can see where my time actually goes.",
    tags: ["Nuxt.js", "Vue", "Firebase", "Tailwind"],
    link: "https://github.com/stschmaltz/practice-pal",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-deep-night py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-glacier sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-silver">
          I like building things outside of work too. These are the ones that stuck.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-forest-surface bg-forest-surface/40 p-6 transition-all hover:border-glacier/30 hover:shadow-lg hover:shadow-glacier/5"
            >
              <h3 className="text-lg font-semibold text-moonlight group-hover:text-frost transition-colors">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-silver">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-deep-teal/25 px-3 py-1 text-xs font-medium text-frost"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

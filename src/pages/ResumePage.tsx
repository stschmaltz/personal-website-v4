import { Link } from "react-router-dom";

const EXPERIENCE = [
  {
    title: "Staff Software Engineer",
    company: "EdVisorly",
    location: "Remote (Calgary, AB)",
    period: "Mar 2025 – Present",
    tech: "TypeScript, React, Next.js, Node.js, PostgreSQL, AWS",
    bullets: [
      "Edtech startup using AI to help students navigate college-transfer pathways.",
      "Full ownership across the stack — architecture, feature development, infrastructure, and shipping directly to users.",
    ],
  },
  {
    title: "Staff Software Engineer / Engineering Manager",
    company: "Boulevard",
    location: "Remote (Calgary, AB)",
    period: "Aug 2024 – Mar 2025",
    tech: "Elixir, GraphQL, TypeScript, React, AWS",
    bullets: [
      "Led the Payments team at a salon and spa SaaS platform handling multi-million-dollar daily transaction volumes in Elixir — owned architecture decisions, technical scoping, and delivery.",
      "Managed five engineers while staying hands-on. Ran 1:1s, code reviews, and mentorship focused on leveling engineers up, not just keeping them busy.",
      "Drove cross-functional alignment with product, design, and marketing — translated business goals into technical plans and shipped them on time.",
    ],
  },
  {
    title: "Staff Software Engineer – Invoicing Tech Lead",
    company: "Jobber",
    location: "Remote (Calgary, AB)",
    period: "May 2023 – Aug 2024",
    tech: "TypeScript, React, React Native, Ruby on Rails, GraphQL, Stripe, AWS",
    bullets: [
      "Owned and hardened the invoicing systems behind multi-billion-dollar annual transaction volumes across ACH and credit card rails.",
      "Led the integration of direct ACH payments — a complex cross-system effort that unlocked enterprise clients and increased transaction confidence.",
      "Introduced structured technical planning and proactive release monitoring, cutting rework and reducing time-to-detect for deployment issues.",
    ],
  },
  {
    title: "Staff Software Engineer & Team Lead",
    company: "Neo Financial",
    location: "Calgary, AB",
    period: "Oct 2019 – May 2023",
    tech: "TypeScript, GraphQL, MongoDB, Serverless, Terraform, AWS",
    bullets: [
      "Employee #22. Helped scale from zero to 1M+ users and ~800 employees through 3.5 years of hypergrowth.",
      "Built the real-time rewards engine from scratch — became Neo's core product differentiator. Led the card team across issuance, activation, and replacement.",
      "Led performance refactors that took critical pages from ~5s to ~400ms, directly improving retention and engagement metrics.",
      "Grew multiple engineers from senior to team lead, building the leadership bench the org needed to scale.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Osperity",
    location: "Calgary, AB",
    period: "Mar 2019 – Oct 2019",
    tech: "Ember.js",
    bullets: [
      "Primary frontend engineer for a SaaS smart-camera platform, delivering pixel-perfect UIs from high-fidelity designs within a small, fast-moving team.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Replicon",
    location: "Calgary, AB",
    period: "May 2015 – Mar 2019",
    tech: "Kotlin, JavaScript, Node.js, React, GraphQL, DynamoDB, Kafka",
    bullets: [
      "Progressed from test automation to software engineering, adopting GraphQL, React, and Kotlin early. Full-stack feature development for enterprise customers.",
    ],
  },
];

const SKILLS = [
  { label: "Languages", value: "TypeScript, JavaScript, Elixir, Ruby, Kotlin, Node.js" },
  { label: "Frontend", value: "React, React Native, Next.js, Vue/Nuxt, Ember" },
  { label: "Data", value: "PostgreSQL, MongoDB, DynamoDB, Redis, GraphQL, REST" },
  {
    label: "Cloud & Infra",
    value: "AWS (Lambda, ECS/Fargate, S3, SQS, KMS), Terraform, Docker, GitHub Actions, Cloudflare Workers",
  },
  { label: "Architecture", value: "Event-Driven, Microservices, Domain-Driven Design, Serverless" },
];

const PROJECTS = [
  {
    name: "Behind the Screen",
    description: "D&D 5e encounter manager and combat tracker (Next.js, TypeScript, MongoDB)",
  },
  {
    name: "DME Mastra",
    description: "AI agent-based D&D loot/NPC generator built with the Mastra framework",
  },
  {
    name: "Fitness Fam",
    description: "Workout routine PWA",
    link: "https://fitnessfam.app",
  },
  {
    name: "Practice Pal",
    description: "Music practice tracker",
    link: "https://practicepal.app",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-alpine-black pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-moonlight sm:text-5xl">
              Shane Schmaltz
            </h1>
            <p className="mt-2 text-silver">
              <a href="mailto:stschmaltz@gmail.com" className="transition-colors hover:text-frost">
                stschmaltz@gmail.com
              </a>
              {" · "}Calgary, AB, Canada
            </p>
            <p className="mt-1 text-sm text-stone">
              <a
                href="https://www.linkedin.com/in/stschmaltz"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-frost"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                href="https://github.com/stschmaltz"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-frost"
              >
                GitHub
              </a>
              {" · "}
              <Link to="/" className="transition-colors hover:text-frost">
                shaneschmaltz.com
              </Link>
            </p>
          </div>
        </div>

        <div className="h-px bg-glacier/40" />

        <p className="mt-6 leading-relaxed text-silver">
          Staff-level engineer with over 10 years of experience building and scaling products at
          startups and high-growth companies. Comfortable owning complex systems end to end, leading
          difficult refactors and migrations, and leveling up the engineers around me. I ship fast
          and I build things that hold up.
        </p>

        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-glacier">Experience</h2>
          <div className="mt-6 space-y-8">
            {EXPERIENCE.map((job) => (
              <div key={`${job.company}-${job.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-moonlight">{job.title}</h3>
                  <span className="text-sm text-stone">{job.period}</span>
                </div>
                <p className="text-sm text-silver">{job.company} — {job.location}</p>
                <p className="mt-1 text-xs italic text-stone">{job.tech}</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-silver">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-glacier/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 h-px bg-forest-surface" />

        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-glacier">Skills</h2>
          <div className="mt-6 space-y-3">
            {SKILLS.map((skill) => (
              <div key={skill.label} className="flex gap-4 text-sm">
                <span className="w-28 shrink-0 font-semibold text-moonlight">{skill.label}</span>
                <span className="text-silver">{skill.value}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 h-px bg-forest-surface" />

        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-glacier">Education</h2>
          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-sm text-moonlight">
              <span className="font-semibold">University of Calgary</span> — B.Sc. Computer Science
            </p>
            <span className="text-sm text-stone">2015</span>
          </div>
        </section>

        <div className="mt-10 h-px bg-forest-surface" />

        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-glacier">Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className="rounded-lg border border-forest-surface bg-deep-night/50 px-4 py-3"
              >
                <p className="font-semibold text-moonlight">{project.name}</p>
                <p className="mt-1 text-sm text-stone">
                  {project.description}
                  {project.link && (
                    <>
                      {" — "}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-glacier transition-colors hover:text-frost"
                      >
                        {project.link.replace("https://", "")}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-12 text-center text-xs text-stone/60">
          This resume may not be fully up to date.{" "}
          <Link to="/#contact" className="text-glacier/60 transition-colors hover:text-frost">
            Reach out
          </Link>{" "}
          for the latest.
        </p>
      </div>
    </div>
  );
}

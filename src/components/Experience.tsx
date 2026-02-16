import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";

const EXPERIENCE = [
  {
    role: "Staff Software Engineer",
    company: "EdVisorly",
    period: "Present",
    description:
      "Edtech startup using AI to help students navigate college-transfer pathways. Full ownership across the stack.",
  },
  {
    role: "Staff Software Engineer / Engineering Manager",
    company: "Boulevard",
    period: "Previously",
    description:
      "Salon and spa SaaS. Led the payments team handling multi-million-dollar daily volumes. Managed five engineers while staying hands-on.",
  },
  {
    role: "Staff Software Engineer",
    company: "Jobber",
    period: "Previously",
    description:
      "Home service SaaS. Invoicing tech lead. Hardened billing systems, led ACH integration, and owned the invoicing domain across web and mobile.",
  },
  {
    role: "Staff Software Engineer & Team Lead",
    company: "Neo Financial",
    period: "Previously",
    description:
      "Employee #22. Helped scale from zero to 1M+ users. Built the rewards system from scratch and led the card team.",
  },
];

export default function Experience() {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <section id="experience" className="scroll-mt-20 bg-alpine-black py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 fade-in-up ${visible ? "visible" : ""}`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-glacier sm:text-4xl">
          Experience
        </h2>

        <p className="mt-4 text-silver">
          A few highlights. See my{" "}
          <Link to="/resume" className="text-glacier transition-colors hover:text-frost">
            full resume
          </Link>{" "}
          for the complete picture.
        </p>

        <div className="mt-12 space-y-8">
          {EXPERIENCE.map((job) => (
            <div
              key={job.company}
              className="group rounded-xl border border-forest-surface bg-deep-night/50 p-6 transition-colors hover:border-glacier/30 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <div>
                  <h3 className="text-lg font-semibold text-moonlight">
                    {job.role}
                  </h3>
                  <p className="text-frost">{job.company}</p>
                </div>
                <span className="shrink-0 text-sm text-stone">{job.period}</span>
              </div>
              <p className="mt-4 leading-relaxed text-silver">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

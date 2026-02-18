const timelineItems = [
  {
  year: "2026",
  title: "BSc Completed — Fully Committed to Data Engineering & AI",
  description:
    "Graduated with a BSc in Computer Science, completed the IBM Professional Data Science Certificate, officially transitioned into the data engineering and AI space.  and positioning myself for opportunities in data engineering, AI, and intelligent systems.",
  tags: ["Data Engineering", "Python", "SQL", "AI", "Machine Learning"],
  },
  {
    year: "2025",
    title: "Hackathon Experience & Industry Recognition",
    description:
      "Started the IBM Professional Data Science Certificate and competed in the Intellibus Hackathon, where I collaborated on real-world data solutions under pressure. Following the competition, I was recruited for a Data Engineer role, reinforcing my growing reputation and capability in the data space.",
    tags: ["IBM Data Science", "Hackathon", "Team Projects", "Data Engineering", "AI"],
  },
  {
    year: "2024",
    title: "Data Engineering Foundations & Personal Projects",
    description:
      "While still in university, I dedicated this year to building strong data engineering and analytics foundations through personal projects. Focused on Python, SQL, ETL workflows, and data visualization while creating portfolio-ready systems and real-world inspired solutions.",
    tags: ["Python", "SQL", "ETL", "Pandas", "Data Projects"],
  },
  {
    year: "2023",
    title: "Data Projects",
    description:
      "This phase marked a turning point where my interest in data grew exponentially, evolving into a strong passion for data, AI, and building real-world data solutions.",
    tags: ["Python", "SQL", "Statistics", "Pandas"],
  },
  {
    year: "2022",
    title: "Computer Science Studies",
    description:
      "Started university, studied data structures, algorithms, databases, and statistics. Discovered passion for data infrastructure and backend systems.",
    tags: ["Python", "SQL"],
  },
  {
    year: "2020-2021",
    title: "Started Coding Journey",
    description:
      "Began learning Python fundamentals. First exposure to small automation scripts.",
    tags: ["Python"],
  },
]

export function JourneySection() {
  return (
    <section id="journey" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Timeline
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">My Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            From first lines of code to building production data pipelines —
            here is how my path has unfolded.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 hidden h-full w-px bg-border md:left-1/2 md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col gap-4 md:flex-row md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`glass flex-1 rounded-xl p-6 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="mb-2 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {item.year}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden items-center md:flex">
                  <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

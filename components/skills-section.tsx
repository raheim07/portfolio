import {
  Database,
  Code,
  Cloud,
  BrainCircuit,
  GitBranch,
  BarChart3,
} from "lucide-react"

const skillCategories = [
  {
    title: "Data Engineering",
    icon: Database,
    skills: [
      "Apache Airflow",
      "dbt",
      "Apache Spark/PySpark",
      "ETL/ELT",
      "Data Modeling",
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL", "R", "Java"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (S3)", "Docker", "Terraform", "CI/CD"],
  },
  {
    title: "Databases",
    icon: BarChart3,
    skills: ["Snowflake", "PostgreSQL", "MySQL", "MongoDB" ],
  },
  {
    title: "AI / ML Exposure",
    icon: BrainCircuit,
    skills: ["pandas", "NumPy", "scikit-learn", "MLflow", "Jupyter"],
  },
  {
    title: "Tools & Workflow",
    icon: GitBranch,
    skills: ["Git", "GitHub Actions", "VS Code"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Expertise
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Skills & Tools</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The technologies and tools I use to build reliable, scalable data
            systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass group rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

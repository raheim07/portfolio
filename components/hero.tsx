import Image from "next/image"
import { Github, Linkedin, Mail, ChevronDown, Instagram } from "lucide-react"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/raheim07",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raheim-hoilett07/",
    icon: Linkedin,
  },
  // {
  //   label: "Email",
  //   href: "mailto:raheimhoiletth@gmail.com",
  //   icon: Mail,
  // },
  {
    label: "Instagram",
    href: "https://www.instagram.com/raheim_codes/",
    icon: Instagram,
  },
]


export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.08 230), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 pt-24 md:flex-row md:gap-16 md:pt-0">
        {/* Photo */}
        <div className="relative shrink-0">
          <div className="glass relative h-48 w-48 overflow-hidden rounded-full p-1 md:h-56 md:w-56">
            <Image
              src="/images/profile.png"
              alt="Raheim Hoilett professional headshot"
              width={224}
              height={224}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
          {/* Status indicator */}
          <span className="absolute bottom-3 right-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-green-500">
            <span className="sr-only">Available for hire</span>
          </span>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Junior Data Engineer
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            <span className="text-balance">Raheim Hoilett</span>
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Junior Data Engineer with a BSc in Computer Science, focused on creating data-driven systems through 
            effective data transformation, pipeline development, and scalable solutions. 
            My portfolio illustrates hands-on projects that demonstrate strong analytical 
            skills and a dedication to continuous learning and practical problem solving
             in the realms of data, AI, and machine learning.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
            <a
              href="#projects"
              className="ml-2 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  )
}

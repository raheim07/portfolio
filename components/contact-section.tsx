"use client"

import { Mail, Github, Linkedin, Send } from "lucide-react"

const contactLinks = [
  {
    label: "Email",
    value: "raheimhoiletth@gmail.com",
    href: "mailto:raheimhoiletth@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "https://github.com/raheim07",
    href: "https://github.com/raheim07",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/raheim-hoilett07/",
    href: "https://www.linkedin.com/in/raheim-hoilett07/",
    icon: Linkedin,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">{"Let's Connect"}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {"Open to data engineering roles, freelance projects, and collaboration opportunities. Don't hesitate to reach out."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact links */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium text-foreground">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form
            className="glass flex flex-col gap-4 rounded-xl p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

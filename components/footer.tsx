export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Raheim Hoilett. All rights reserved."}
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export function Navigation() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-lg tracking-tight">
          Alex Rivera
        </a>
        <ul className="flex items-center gap-8 text-sm text-muted-foreground">
          <li>
            <a
              href="#work"
              className="transition-colors hover:text-foreground"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="transition-colors hover:text-foreground"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

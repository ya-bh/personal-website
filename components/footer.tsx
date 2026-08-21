export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Alex Rivera</span>
        <span>Photography Portfolio</span>
      </div>
    </footer>
  )
}

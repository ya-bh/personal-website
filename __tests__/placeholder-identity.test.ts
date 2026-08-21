import { describe, it, expect } from "vitest"
import { readFileSync, readdirSync, statSync } from "fs"
import { join, extname } from "path"

const ROOT = join(__dirname, "..")

function collectSourceFiles(dir: string): string[] {
  const results: string[] = []
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".git" || entry === ".next" || entry === "__tests__") continue
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...collectSourceFiles(full))
    } else if ([".ts", ".tsx", ".json", ".mjs", ".css", ".md"].includes(extname(full))) {
      if (entry === "package-lock.json") continue
      results.push(full)
    }
  }
  return results
}

function readAll(): { path: string; content: string }[] {
  return collectSourceFiles(ROOT).map((p) => ({
    path: p,
    content: readFileSync(p, "utf-8"),
  }))
}

describe("placeholder identity", () => {
  const files = readAll()

  it("uses 'Alex Rivera' as the photographer name in layout metadata", () => {
    const layout = files.find((f) => f.path.endsWith("layout.tsx"))!
    expect(layout.content).toContain("Alex Rivera")
  })

  it("uses 'Alex Rivera' in the navigation brand", () => {
    const nav = files.find((f) => f.path.endsWith("navigation.tsx"))!
    expect(nav.content).toContain("Alex Rivera")
  })

  it("uses 'Alex Rivera' in the footer copyright", () => {
    const footer = files.find((f) => f.path.endsWith("footer.tsx"))!
    expect(footer.content).toContain("Alex Rivera")
  })

  it("uses hello@example.com as the contact email", () => {
    const contact = files.find((f) => f.path.endsWith("contact.tsx"))!
    expect(contact.content).toContain("hello@example.com")
  })

  it("has no email addresses other than hello@example.com in source files", () => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    for (const file of files) {
      const matches = file.content.match(emailRegex) || []
      for (const email of matches) {
        expect(email).toBe("hello@example.com")
      }
    }
  })
})
const packages = [
  {
    name: "Half day",
    duration: "Up to 4 hours",
    price: "$1,200",
    includes: [
      "Pre-shoot planning call",
      "On-location shooting (single location)",
      "40+ edited images",
      "Private online gallery",
      "Print-ready files",
    ],
  },
  {
    name: "Full day",
    duration: "Up to 8 hours",
    price: "$2,200",
    includes: [
      "Pre-shoot planning call",
      "On-location shooting (multiple locations)",
      "100+ edited images",
      "Private online gallery",
      "Print-ready files",
      "5 fine-art retouched selects",
    ],
    featured: true,
  },
  {
    name: "Editorial",
    duration: "Custom scope",
    price: "From $3,000",
    includes: [
      "Creative direction & moodboard",
      "Multi-day shooting",
      "Full post-production",
      "Usage licensing included",
      "Print-ready files",
      "Dedicated project timeline",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
          Pricing
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Transparent rates, no surprises. Every package includes planning,
          shooting, and full editing. Travel within the city is included; travel
          fees apply beyond that.
        </p>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between bg-background p-8 ${
                pkg.featured ? "ring-1 ring-foreground/10" : ""
              }`}
            >
              <div>
                <h3 className="font-heading text-xl">{pkg.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pkg.duration}
                </p>
                <p className="mt-6 text-2xl font-light tracking-tight">
                  {pkg.price}
                </p>
                <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className="mt-10 inline-block border border-border px-5 py-2.5 text-center text-sm tracking-wide transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Get in touch
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

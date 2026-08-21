export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
          Let&rsquo;s work together
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Whether it&rsquo;s a portrait session, an editorial commission, or
          something else entirely — I&rsquo;d love to hear about it. Drop me a
          line and I&rsquo;ll get back to you within a day or two.
        </p>

        <a
          href="mailto:hello@example.com"
          className="mt-10 inline-block border border-foreground bg-foreground px-8 py-3.5 text-sm tracking-wide text-background transition-colors hover:bg-transparent hover:text-foreground"
        >
          hello@example.com
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          Based in London. Available worldwide.
        </p>
      </div>
    </section>
  )
}

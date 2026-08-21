import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end px-6 pb-24 pt-32">
      {/* PLACEHOLDER: Replace with your own hero image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Landscape photograph — mountain ridgeline at dawn"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <h1 className="font-heading text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Quiet moments,
          <br />
          honest light.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
          I photograph people and places as they are — no direction, no
          artifice. Documentary portraits, editorial work, and the in-between
          moments that hold a story together.
        </p>
        <a
          href="#work"
          className="mt-10 inline-block border border-white/30 px-6 py-3 text-sm tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
        >
          See the work
        </a>
      </div>
    </section>
  )
}

import Image from "next/image"

const images = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    alt: "Portrait — woman in natural light",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800&q=80",
    alt: "Street scene — figure walking through light and shadow",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Portrait — man against neutral backdrop",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    alt: "Landscape — rolling green hills under overcast sky",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    alt: "Portrait — woman with direct gaze, soft daylight",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    alt: "Travel — coastal path at golden hour",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    alt: "Editorial — monochrome fashion study",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    alt: "Nature — field of wildflowers in soft focus",
    span: "col-span-1 row-span-2",
  },
]

export function Gallery() {
  return (
    <section id="work" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          A mix of portraits, documentary projects, and personal work. Every
          shoot starts with observation — I wait for the frame to happen rather
          than build it.
        </p>

        {/* PLACEHOLDER: Replace these Unsplash images with your own photographs */}
        <div className="mt-16 grid auto-rows-[280px] grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

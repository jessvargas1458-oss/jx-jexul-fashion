import Image from 'next/image'

export function Promo() {
  return (
    <section id="otono" className="bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div className="overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/50">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/promo-otono.png"
              alt="Boutique de otoño con descuentos de hasta el 25% en la nueva colección"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.25em] text-accent">
              EDICIÓN ESPECIAL
            </span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            ¡Toda la temporada de otoño!
          </h2>
          <p className="mt-2 font-serif text-4xl font-bold text-terracotta sm:text-5xl">
            Descuentos hasta el 25%
          </p>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Renueva tu armario con nuestra exclusiva selección otoñal. Diseños
            cálidos, texturas suaves y siluetas elegantes pensadas para acompañar
            cada uno de tus pasos con comodidad y actitud.
          </p>

          <a
            href="#colecciones"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-olive px-8 py-3.5 text-xs font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive/90 hover:shadow-lg"
          >
            COMPRA AHORA
          </a>
        </div>
      </div>
    </section>
  )
}

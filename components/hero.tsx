import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-12 lg:px-10 lg:py-20">
          <div className="mb-5 flex flex-col items-start">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground/70">
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                JX
              </span>
            </span>
            <span className="mt-3 font-serif text-2xl font-bold tracking-tight text-foreground">
              JEXUL FASHION
            </span>
          </div>

          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-balance text-foreground sm:text-6xl">
            Moda en tendencia que marca la diferencia
          </h1>

          <p className="mt-6 text-lg font-medium text-muted-foreground">
            Estilo Elegante y Divertido
          </p>

          <div className="mt-8">
            <a
              href={`https://wa.me/593987741693?text=${encodeURIComponent(
                'Hola, JX Jexul Fashion te da la bienvenida, es un gusto saludarte y estaremos encantados en atenderte.\n\nQuiero presentarte nuestros productos/servicios y ayudarte a encontrar la opcion que mejor se adapte a lo que necesita.\n\n¿ Le gustaria que le comparta nuestra informacion ?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-olive px-7 py-3.5 text-xs font-semibold tracking-wider text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive/90 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              <span>CONSULTAR POR WHATSAPP</span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[280px] lg:min-h-[520px]">
          <Image
            src="/images/hero-boutique.png"
            alt="Interior de la boutique Jexul Fashion con prendas de temporada y una clienta observando la colección"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

const categories = [
  {
    name: 'Damas',
    count: '120+ prendas',
    description: 'Elegancia natural y siluetas modernas',
    image: '/images/cat-damas.png',
    alt: 'Mujer con abrigo largo verde oliva',
  },
  {
    name: 'Caballeros',
    count: '90+ prendas',
    description: 'Estilo sofisticado y confort diario',
    image: '/images/cat-caballeros.png',
    alt: 'Hombre con chaqueta de ante marrón',
  },
  {
    name: 'Niños',
    count: '65+ prendas',
    description: 'Diversión y comodidad en cada paso',
    image: '/images/cat-ninos.png',
    alt: 'Cuatro niños con suéteres de otoño',
  },
  {
    name: 'Mixta',
    count: '45+ prendas',
    description: 'Prendas versátiles sin límites',
    image: '/images/cat-mixta.png',
    alt: 'Perchero con prendas en tonos tierra',
  },
]

export function Categories() {
  return (
    <section id="colecciones" className="bg-cream-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-olive sm:text-4xl">
            Productos - Categorías de Vestir
          </h2>
          <p className="mt-3 text-muted-foreground">
            Explora colecciones curadas especialmente para tu ritmo de vida
          </p>
          <span className="mx-auto mt-5 block h-0.5 w-16 rounded-full bg-olive/60" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <article
              key={cat.name}
              className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={cat.image || '/placeholder.svg'}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {cat.name}
                  </h3>
                  <span className="text-xs font-semibold text-accent">
                    {cat.count}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

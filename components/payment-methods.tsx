import { Wallet, CreditCard, Landmark } from 'lucide-react'

const methods = [
  {
    name: 'Efectivo',
    description: 'Pago directo en nuestro local',
    Icon: Wallet,
  },
  {
    name: 'PayPal',
    description: 'Transacciones en línea seguras',
    Icon: CreditCard,
  },
  {
    name: 'Transferencia',
    description: 'Bancaria directa y rápida',
    Icon: Landmark,
  },
]

export function PaymentMethods() {
  return (
    <section id="pagos" className="bg-cream-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-olive sm:text-4xl">
            Métodos de Pago
          </h2>
          <p className="mt-3 text-muted-foreground">
            Facilidades de pago seguras y accesibles para tu comodidad
          </p>
          <span className="mx-auto mt-5 block h-0.5 w-16 rounded-full bg-olive/60" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {methods.map(({ name, description, Icon }) => (
            <div
              key={name}
              className="flex items-center gap-4 rounded-xl bg-card p-6 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream-alt">
                <Icon className="h-5 w-5 text-olive" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

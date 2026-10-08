import { Camera, AtSign, MessageCircle, MapPin, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-footer-foreground/10">
                <span className="font-serif text-sm font-bold text-footer-foreground">
                  JX
                </span>
              </span>
              <span className="font-serif text-lg font-bold tracking-tight">
                JX JEXUL FASHION
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-footer-muted">
              Moda pensada para personas modernas, versátiles y seguras de sí
              mismas. Encuentra la inspiración que necesitas para elevar tu imagen
              y proyectar tu mejor versión.
            </p>
            <div className="mt-6 flex gap-3">
              {[Camera, AtSign, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-footer-foreground/10 text-footer-foreground transition-colors hover:bg-olive"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Contacto</h3>
            <ul className="mt-5 space-y-4 text-sm text-footer-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                <span>Av. José Mejía &amp; 12 de Noviembre, Pelileo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-olive" />
                <span>0987741693</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Horario de Atención</h3>
            <ul className="mt-5 space-y-4 text-sm text-footer-muted">
              <li>
                <p className="font-semibold text-footer-foreground">
                  Lunes a Sábado:
                </p>
                <p>7:30 am – 8:00 pm</p>
              </li>
              <li>
                <p className="font-semibold text-footer-foreground">Domingos:</p>
                <p>8:00 am – 2:00 pm</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-footer-foreground/10 pt-6 text-xs text-footer-muted sm:flex-row">
          <p>© 2026 JX Jexul Fashion. Todos los derechos reservados.</p>
          <p>Hecho con actitud en Cotacachi</p>
        </div>
      </div>
    </footer>
  )
}

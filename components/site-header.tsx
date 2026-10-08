'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Colecciones', href: '#colecciones' },
  { label: 'Otoño 25%', href: '#otono' },
  { label: 'Métodos de Pago', href: '#pagos' },
  { label: 'Contacto', href: '#contacto' },
]

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card">
        <span className="font-serif text-sm font-bold text-olive">JX</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-base font-bold tracking-tight text-foreground">
          JX JEXUL FASHION
        </span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.2em] text-muted-foreground">
          ESTILO CON ACTITUD
        </span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-olive"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-full border border-foreground/25 px-6 py-2.5 text-xs font-semibold tracking-wider text-foreground transition-all duration-300 hover:border-olive hover:bg-olive hover:text-primary-foreground lg:inline-flex"
        >
          CONTACTAR
        </a>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-cream px-5 pb-6 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/40 py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-olive"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-olive px-6 py-3 text-xs font-semibold tracking-wider text-primary-foreground"
          >
            CONTACTAR
          </a>
        </nav>
      )}
    </header>
  )
}

import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Welcome } from '@/components/welcome'
import { Categories } from '@/components/categories'
import { Promo } from '@/components/promo'
import { PaymentMethods } from '@/components/payment-methods'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Welcome />
        <Categories />
        <Promo />
        <PaymentMethods />
      </main>
      <SiteFooter />
    </>
  )
}

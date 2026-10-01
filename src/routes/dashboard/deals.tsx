import { createFileRoute } from '@tanstack/react-router'
import { DealsList } from '../../components/dashboard/DealsList'

export const Route = createFileRoute('/dashboard/deals')({
  component: DealsPage,
})

function DealsPage() {
  return (
    <section aria-labelledby="deals-heading">
      <h2 id="deals-heading">Deals</h2>
      <p>Open and featured investment opportunities.</p>
      <DealsList />
    </section>
  )
}

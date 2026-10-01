import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/deals')({
  component: DealsPage,
})

function DealsPage() {
  return (
    <section aria-labelledby="deals-heading">
      <h2 id="deals-heading">Deals</h2>
      <p>Placeholder for open and past investment deals.</p>
    </section>
  )
}

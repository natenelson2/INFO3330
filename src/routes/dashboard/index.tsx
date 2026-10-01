import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardHomePage,
})

function DashboardHomePage() {
  return (
    <section aria-labelledby="dashboard-home-heading">
      <h2 id="dashboard-home-heading">Dashboard overview</h2>
      <p>Placeholder for portfolio value, open deals, and recent activity.</p>
    </section>
  )
}

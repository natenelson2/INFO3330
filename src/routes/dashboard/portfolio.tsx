import { createFileRoute } from '@tanstack/react-router'
import { PortfolioTable } from '../../components/dashboard/PortfolioTable'

export const Route = createFileRoute('/dashboard/portfolio')({
  component: PortfolioPage,
})

function PortfolioPage() {
  return (
    <section aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading">Portfolio</h2>
      <p>Holdings and current values for your investments.</p>
      <PortfolioTable />
    </section>
  )
}

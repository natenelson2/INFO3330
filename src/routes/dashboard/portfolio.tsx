import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/portfolio')({
  component: PortfolioPage,
})

function PortfolioPage() {
  return (
    <section aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading">Portfolio</h2>
      <p>Placeholder for holdings and performance.</p>
    </section>
  )
}

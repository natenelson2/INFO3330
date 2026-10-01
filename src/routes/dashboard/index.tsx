import { createFileRoute } from '@tanstack/react-router'
import { StatsCard } from '../../components/dashboard/StatsCard'
import { PortfolioSummary } from '../../components/dashboard/PortfolioSummary'
import { RecentActivity } from '../../components/dashboard/RecentActivity'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardHomePage,
})

function DashboardHomePage() {
  return (
    <div className="dashboard-home">
      <p className="sample-data-banner" role="note">
        Demo shell — all figures are placeholders
      </p>

      <div className="dashboard-home__stats">
        <StatsCard
          label="Total portfolio value"
          value="$300,000"
          hint="Sample total"
        />
        <StatsCard label="Open deals" value="3" hint="Sample count" />
        <StatsCard
          label="Contributions YTD"
          value="$24,000"
          hint="Sample YTD"
        />
      </div>

      <div className="dashboard-home__panels">
        <PortfolioSummary totalLabel="$300,000" />
        <RecentActivity />
      </div>
    </div>
  )
}

export type Deal = {
  id: string
  name: string
  location: string
  minimumInvestment: number
  status: 'Open' | 'Closing soon' | 'Waitlist'
}

const MOCK_DEALS: Deal[] = [
  {
    id: 'd1',
    name: 'Harbor View Residences',
    location: 'Tampa, FL',
    minimumInvestment: 25000,
    status: 'Open',
  },
  {
    id: 'd2',
    name: 'Summit Logistics Hub',
    location: 'Columbus, OH',
    minimumInvestment: 50000,
    status: 'Closing soon',
  },
  {
    id: 'd3',
    name: 'Pinecrest Retail Plaza',
    location: 'Charlotte, NC',
    minimumInvestment: 15000,
    status: 'Waitlist',
  },
]

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function statusClassName(status: Deal['status']): string {
  return `status status-${status.replace(/\s+/g, '-').toLowerCase()}`
}

type DealsListProps = {
  deals?: Deal[]
  emptyMessage?: string
  isSampleData?: boolean
}

/** Scannable mock open deals for the Deals page. */
export function DealsList({
  deals = MOCK_DEALS,
  emptyMessage = 'No open deals right now. Check back soon for new opportunities.',
  isSampleData = true,
}: DealsListProps) {
  if (deals.length === 0) {
    return (
      <section className="dashboard-panel" aria-label="Open deals">
        <h2>Open deals</h2>
        {isSampleData ? (
          <p className="sample-data-banner" role="note">
            Sample deals — not live offerings
          </p>
        ) : null}
        <p className="empty-state">{emptyMessage}</p>
      </section>
    )
  }

  return (
    <section className="dashboard-panel" aria-label="Open deals">
      <h2>Open deals</h2>
      {isSampleData ? (
        <p className="sample-data-banner" role="note">
          Sample deals — not live offerings
        </p>
      ) : null}
      <ul className="deals-list">
        {deals.map((deal) => (
          <li key={deal.id} className="deal-card">
            <div>
              <h3>{deal.name}</h3>
              <p>{deal.location}</p>
            </div>
            <p>Min. {formatCurrency(deal.minimumInvestment)}</p>
            <p className={statusClassName(deal.status)}>{deal.status}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

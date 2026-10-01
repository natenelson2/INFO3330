import { Link, useRouterState } from '@tanstack/react-router'
import { dashboardNavItems } from './navConfig'

type NavItemsProps = {
  /** Fired when a nav link is clicked (used to close the mobile drawer). */
  onNavigate?: () => void
}

/** Renders nav links from navConfig and marks the active route. */
export function NavItems({ onNavigate }: NavItemsProps) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  const normalized =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname

  return (
    <nav aria-label="Dashboard">
      <ul className="nav-list">
        {dashboardNavItems.map((item) => {
          const isActive =
            item.path === '/dashboard'
              ? normalized === '/dashboard'
              : normalized === item.path ||
                normalized.startsWith(`${item.path}/`)

          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={isActive ? 'nav-link nav-link-active' : 'nav-link'}
                activeOptions={{ exact: true }}
                aria-current={isActive ? 'page' : undefined}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

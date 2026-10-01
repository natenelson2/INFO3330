import { Link, useRouterState } from '@tanstack/react-router'
import { dashboardNavItems } from './navConfig'

/** Renders nav links from navConfig and marks the active route. */
export function NavItems() {
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
                aria-current={isActive ? 'page' : undefined}
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

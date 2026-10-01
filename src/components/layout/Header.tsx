import type { ReactNode } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { getPageTitle } from './navConfig'

type HeaderProps = {
  /** Optional override; when omitted, title comes from navConfig + current path. */
  title?: string
  children?: ReactNode
  /** Whether the mobile sidebar drawer is open. */
  navOpen?: boolean
  /** Toggle mobile sidebar open/closed. */
  onToggleNav?: () => void
  /** id of the sidebar element for aria-controls. */
  sidebarId?: string
}

/** Top bar: page title from navConfig + optional actions / user slot. */
export function Header({
  title,
  children,
  navOpen = false,
  onToggleNav,
  sidebarId = 'dash-sidebar',
}: HeaderProps) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const resolvedTitle = title ?? getPageTitle(pathname)

  return (
    <header className="dashboard-header dash-header">
      {onToggleNav ? (
        <button
          type="button"
          className="dash-menu-toggle"
          aria-expanded={navOpen}
          aria-controls={sidebarId}
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          onClick={onToggleNav}
        >
          <span className="dash-menu-toggle__icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="dash-menu-toggle__text">Menu</span>
        </button>
      ) : null}
      <h1 className="header-title">{resolvedTitle}</h1>
      <div className="header-actions">{children}</div>
    </header>
  )
}

import type { ReactNode } from 'react'
import { NavItems } from './NavItems'

type SidebarProps = {
  brandLabel?: string
  children?: ReactNode
  /** Element id for aria-controls from the mobile menu toggle. */
  id?: string
  /** Called after a nav link is activated (closes mobile drawer). */
  onNavigate?: () => void
}

/** Left navigation chrome for the investor dashboard shell. */
export function Sidebar({
  brandLabel = 'PREIshare',
  children,
  id = 'dash-sidebar',
  onNavigate,
}: SidebarProps) {
  return (
    <aside
      id={id}
      className="dashboard-sidebar dash-sidebar"
      aria-label="Investor navigation"
    >
      <div className="sidebar-brand">{brandLabel}</div>
      <div className="sidebar-nav dash-nav">
        <NavItems onNavigate={onNavigate} />
        {children}
      </div>
    </aside>
  )
}

// PAUL: dash classes + menu aria wired for responsive shell

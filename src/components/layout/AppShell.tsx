import { useEffect, useState, type ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

type AppShellProps = {
  children: ReactNode
}

/**
 * Shared investor chrome: sidebar + header + main content region.
 * Header title comes from navConfig based on the current path.
 * Below 768px the sidebar collapses; Header toggle sets nav-open.
 */
export function AppShell({ children }: AppShellProps) {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const sync = () => {
      if (media.matches) setNavOpen(false)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const closeNav = () => setNavOpen(false)

  return (
    <div className={`app-shell dash-shell${navOpen ? ' nav-open' : ''}`}>
      <button
        type="button"
        className="dash-sidebar-backdrop"
        aria-label="Close navigation"
        tabIndex={navOpen ? 0 : -1}
        onClick={closeNav}
      />
      <Sidebar id="dash-sidebar" onNavigate={closeNav} />
      <div className="app-shell-main-column dash-main">
        <Header
          navOpen={navOpen}
          onToggleNav={() => setNavOpen((open) => !open)}
          sidebarId="dash-sidebar"
        />
        <main className="app-shell-content dash-content" id="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}

// PAUL: dash classes + menu aria wired for responsive shell

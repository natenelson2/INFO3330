import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

type AppShellProps = {
  children: ReactNode
}

/**
 * Shared investor chrome: sidebar + header + main content region.
 * Header title comes from navConfig based on the current path.
 */
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-shell-main-column">
        <Header />
        <main className="app-shell-content" id="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}

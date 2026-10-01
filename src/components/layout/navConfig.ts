/** Single source of truth for investor-facing nav labels, paths, and page titles. */

export type NavItemConfig = {
  label: string
  path: string
  title: string
}

export const dashboardNavItems: NavItemConfig[] = [
  {
    label: 'Home',
    path: '/dashboard',
    title: 'Dashboard overview',
  },
  {
    label: 'Portfolio',
    path: '/dashboard/portfolio',
    title: 'Your portfolio',
  },
  {
    label: 'Deals',
    path: '/dashboard/deals',
    title: 'Open deals',
  },
  {
    label: 'Profile',
    path: '/dashboard/profile',
    title: 'Your profile',
  },
]

export function getPageTitle(pathname: string): string {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname

  const exact = dashboardNavItems.find((item) => item.path === normalized)
  if (exact) return exact.title

  const prefixMatch = [...dashboardNavItems]
    .sort((a, b) => b.path.length - a.path.length)
    .find(
      (item) =>
        item.path !== '/dashboard' &&
        (normalized === item.path ||
          normalized.startsWith(`${item.path}/`)),
    )

  return prefixMatch?.title ?? 'Dashboard'
}

export interface HeaderNavigationItem {
  label: string
  href: string
}

const headerNavigation: HeaderNavigationItem[] = [
  { label: 'О конкурсе', href: '#about' },
  { label: 'Номинации', href: '#nominations' },
  { label: 'Условия участия', href: '#terms' },
  { label: 'Контакты', href: '#contacts' },
]

export function useHeaderNavigation() {
  return {
    headerNavigation,
  }
}

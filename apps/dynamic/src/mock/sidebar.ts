export interface SidebarElement {
  category: boolean
  text: string
  link: string
  active: boolean
}

export const sidebarElements = [
  {
    text: 'Test',
    category: true,
    link: '',
    active: false,
  },
] as SidebarElement[]

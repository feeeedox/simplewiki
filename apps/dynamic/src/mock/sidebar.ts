import type { WikiSidebarItem } from '@simplewiki/ui'

export interface SidebarElement {
  category: boolean
  text: string
  link: string
  active: boolean
}

export const navElements = [
  {
    title: 'Test',
    path: '',
    order: 1,
    children: [
      {
        title: 'Element',
        path: '/',
      },
      {
        title: 'Element 2',
        path: '/e',
      },
      {
        title: 'Element 3 ',
        path: '/e',
      },
      {
        title: 'Element 4',
        path: '/e',
      },
    ],
  },
] as WikiSidebarItem[]

export const sidebarElements = [
  {
    text: 'Test',
    category: true,
    link: '',
    active: false,
  },
  {
    text: 'Home',
    category: false,
    link: '',
    active: false,
  },
] as SidebarElement[]

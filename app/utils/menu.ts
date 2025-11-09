export interface IMenu {
  label: string
  icon: string
  link: string
}

export const MENU_LIST: IMenu[] = [
  {
    label: 'menu.about',
    icon: 'mdi:account-details',
    link: '/about'
  },
  {
    label: 'menu.works',
    icon: 'mdi:web',
    link: '/works'
  },
  {
    label: 'menu.blog',
    icon: 'mdi:file-document',
    link: '/blog'
  },
  {
    label: 'menu.contacts',
    icon: 'mdi:contactless-payment-circle-outline',
    link: '/contacts'
  }
]

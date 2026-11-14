import { useColorMode } from '@vueuse/core'

export const useTheme = () =>
  useColorMode({
    selector: 'html',
    attribute: 'class',

    modes: {
      light: '',
      dark: 'dark',
    },

    initialValue: 'auto',
    storageKey: 'simplewiki-color-mode',
  })

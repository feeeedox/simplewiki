# @simplewiki/ui

The components use Vue 3 and work in a Vite app without Nuxt. Links render as native `<a>` elements by default.

```ts
import { createApp } from 'vue'
import { installWikiUi } from '@simplewiki/ui'
import App from './App.vue'

const app = createApp(App)
installWikiUi(app)
app.mount('#app')
```

`WikiToC` can also be imported directly from `@simplewiki/ui`. To use an app link component that accepts a `to` prop, pass it when installing the UI:

```ts
installWikiUi(app, { linkComponent: AppLink })
```

The Nuxt app passes `NuxtLink` through this option in its `wiki-ui` plugin. This keeps router integration in the app and the UI package independent of Nuxt.

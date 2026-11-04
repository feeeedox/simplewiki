import { installWikiUi } from "@simplewiki/ui";
import { NuxtLink } from '#components';

export default defineNuxtPlugin((nuxtApp) => {
  installWikiUi(nuxtApp.vueApp, { linkComponent: NuxtLink });
});

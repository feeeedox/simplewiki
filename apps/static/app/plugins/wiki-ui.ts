import { installWikiUi } from "@simplewiki/ui";

export default defineNuxtPlugin((nuxtApp) => {
  installWikiUi(nuxtApp.vueApp);
});
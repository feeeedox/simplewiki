
import type { App } from "vue";

import Badge from "./components/content/Badge.vue";
import Accordion from "./components/content/Accordion.vue";
import Timeline from "./components/content/Timeline.vue";

export const wikiComponents = {
  Badge,
  Accordion,
  Timeline,
};

export function installWikiUi(app: App): void {
  for (const [name, component] of Object.entries(wikiComponents)) {
    app.component(name, component);
  }
}

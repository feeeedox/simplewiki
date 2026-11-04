
import type { App } from "vue";

import Badge from "./components/content/Badge.vue";
import Accordion from "./components/content/Accordion.vue";
import Timeline from "./components/content/Timeline.vue";
import PullQuote from "./components/content/PullQuote.vue";
import LinkCard from "./components/content/LinkCard.vue";
import Hatnote from "./components/content/Hatnote.vue";
import ReferenceList from "./components/content/ReferenceList.vue";
import Collapsible from "./components/content/Collapsible.vue";
import SeeAlso from "./components/content/SeeAlso.vue";
import Keyboard from "./components/content/Keyboard.vue";
import References from "./components/content/References.vue";
import Diff from "./components/content/Diff.vue";
import CategoryList from "./components/content/CategoryList.vue";
import Steps from "./components/content/Steps.vue";

export const wikiComponents = {
  Badge,
  Accordion,
  Timeline,
  PullQuote,
  LinkCard,
  Hatnote,
  ReferenceList,
  Collapsible,
  SeeAlso,
  Keyboard,
  References,
  Diff,
  CategoryList,
  Steps
};

export function installWikiUi(app: App): void {
  for (const [name, component] of Object.entries(wikiComponents)) {
    app.component(name, component);
  }
}

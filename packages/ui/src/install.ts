
import type { App, Component } from "vue";
import { wikiLinkKey } from "./link";

import { Accordion } from "./components/content/Accordion";
import { Badge } from "./components/content/Badge";
import CategoryList from "./components/content/CategoryList.vue";
import Collapsible from "./components/content/Collapsible.vue";
import ContentH1 from "./components/content/ContentH1.vue";
import ContentPre from "./components/content/ContentPre.vue";
import Diff from "./components/content/Diff.vue";
import FieldTable from "./components/content/FieldTable.vue";
import Hatnote from "./components/content/Hatnote.vue";
import Highlight from "./components/content/Highlight.vue";
import InfoBox from "./components/content/InfoBox.vue";
import Keyboard from "./components/content/Keyboard.vue";
import LinkCard from "./components/content/LinkCard.vue";
import MermaidDiagram from "./components/content/MermaidDiagram.vue";
import PlantumlDiagram from "./components/content/PlantumlDiagram.vue";
import PullQuote from "./components/content/PullQuote.vue";
import ReferenceList from "./components/content/ReferenceList.vue";
import References from "./components/content/References.vue";
import SeeAlso from "./components/content/SeeAlso.vue";
import Steps from "./components/content/Steps.vue";
import Tabs from "./components/content/Tabs.vue";
import Timeline from "./components/content/Timeline.vue";
import Footer from "./components/Footer.vue";
import ToC from "./components/ToC.vue";

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
  Steps,
  ContentPre,
  MermaidDiagram,
  PlantumlDiagram,
  ContentH1,
  FieldTable,
  Highlight,
  InfoBox,
  Tabs,
  Footer,
  ToC
};

export function installWikiUi(app: App, options: { linkComponent?: Component } = {}): void {
  if (options.linkComponent) {
    app.provide(wikiLinkKey, options.linkComponent);
  }

  for (const [name, component] of Object.entries(wikiComponents)) {
    app.component(name, component);
  }
}

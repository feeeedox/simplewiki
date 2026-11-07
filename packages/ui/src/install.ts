
import type { App, Component } from "vue";
import { wikiLinkKey } from "./link";

import { Accordion } from "./components/content/Accordion";
import { Badge } from "./components/content/Badge";
import { CategoryList } from "./components/content/CategoryList";
import { Collapsible } from "./components/content/Collapsible";
import { ContentH1 } from "./components/content/ContentH1";
import { ContentPre } from "./components/content/ContentPre";
import { Diff } from "./components/content/Diff/";
import { FieldTable } from "./components/content/FieldTable";
import { Hatnote } from "./components/content/Hatnote";
import { Highlight } from "./components/content/Highlight";
import { InfoBox } from "./components/content/InfoBox";
import { Keyboard } from "./components/content/Keyboard";
import { LinkCard } from "./components/content/LinkCard";
import { MermaidDiagram } from "./components/content/MermaidDiagram";
import { PlantumlDiagram } from "./components/content/PlantumlDiagram";
import { PullQuote } from "./components/content/PullQuote";
import { ReferenceList } from "./components/content/ReferenceList";
import { References } from "./components/content/References";
import { SeeAlso } from "./components/content/SeeAlso";
import { Steps } from "./components/content/Steps";
import { Tabs } from "./components/content/Tabs";
import { Timeline } from "./components/content/Timeline";
import { Footer } from "./components/Footer";
import { ToC } from "./components/layout/ToC";

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

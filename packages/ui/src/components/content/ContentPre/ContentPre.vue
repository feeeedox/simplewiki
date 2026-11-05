<script lang="ts" setup>
import { MermaidDiagram } from '../MermaidDiagram';
import { PlantumlDiagram } from '../PlantumlDiagram';
import styles from './ContentPre.module.css';

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  filename?: string
  language?: string
}>()

const isMermaid  = props.language === 'mermaid'
const isPlantUML = props.language === 'plantuml' || props.language === 'puml'
const isDiagram  = isMermaid || isPlantUML
</script>

<template>
  <ClientOnly v-if="isDiagram">
    <MermaidDiagram  v-if="isMermaid"><slot /></MermaidDiagram>
    <PlantumlDiagram v-else><slot /></PlantumlDiagram>
  </ClientOnly>

  <div v-else :class="styles.codeWrapper">
    <div v-if="filename" :class="styles.codeHeader">
      <svg fill="none" height="14" viewBox="0 0 24 24" width="14">
        <path d="M6 2h9l5 5v15H6V2z" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>
        <path d="M15 2v6h6" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/>
      </svg>
      <span>{{ filename }}</span>
    </div>
    <pre v-bind="$attrs"><slot /></pre>
  </div>
</template>
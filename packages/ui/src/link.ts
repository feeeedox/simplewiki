import type { Component, InjectionKey } from 'vue'

export const wikiLinkKey: InjectionKey<Component | 'a'> = Symbol('wiki-link')

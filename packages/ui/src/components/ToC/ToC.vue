
<script setup lang="ts">
import WikiLink from './../WikiLink.vue';
import styles from './ToC.module.scss';

interface TocLink {
    id: string
    text: string
    children?: TocLink[]
}

defineProps<{
    isMobile: boolean
    tocLinks: TocLink[]
}>()
</script>

<template>
    <div
        v-if="tocLinks.length && !isMobile"
        :class="styles.container"
    >
        <div :class="styles.title">
            Table of Contents
        </div>

        <ol :class="styles.list">
            <li
                v-for="link in tocLinks"
                :key="link.id"
                :class="styles.item"
            >
                <WikiLink
                    :to="`#${link.id}`"
                    :class="styles.link"
                >
                    {{ link.text }}
                </WikiLink>

                <ol
                    v-if="link.children?.length"
                    :class="styles.subList"
                >
                    <li
                        v-for="subLink in link.children"
                        :key="subLink.id"
                        :class="styles.subItem"
                    >
                        <WikiLink
                            :to="`#${subLink.id}`"
                            :class="styles.link"
                        >
                            {{ subLink.text }}
                        </WikiLink>
                    </li>
                </ol>
            </li>
        </ol>
    </div>

    <div
        v-if="tocLinks.length && isMobile"
        :class="styles.mobileContainer"
    >
        <details :class="styles.details">
            <summary :class="styles.summary">
                <span>Table of Contents</span>
                <span :class="styles.arrow">▼</span>
            </summary>

            <div :class="styles.mobileContent">
                <ol :class="styles.mobileList">
                    <li
                        v-for="link in tocLinks"
                        :key="link.id"
                        :class="styles.item"
                    >
                        <WikiLink
                            :to="`#${link.id}`"
                            :class="styles.mobileLink"
                        >
                            {{ link.text }}
                        </WikiLink>

                        <ol
                            v-if="link.children?.length"
                            :class="styles.mobileSubList"
                        >
                            <li
                                v-for="subLink in link.children"
                                :key="subLink.id"
                                :class="styles.mobileSubItem"
                            >
                                <WikiLink
                                    :to="`#${subLink.id}`"
                                    :class="styles.mobileSubLink"
                                >
                                    {{ subLink.text }}
                                </WikiLink>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </details>
    </div>
</template>

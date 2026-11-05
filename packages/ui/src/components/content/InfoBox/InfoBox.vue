<script setup>
import styles from './InfoBox.module.scss'

defineProps({
    type: {
        type: String,
        default: 'info'
    },
    width: {
        type: String,
        default: '100%' 
    }
})

const images = {
    alert: 'alert.png',
    download: 'download.png',
    help: 'help.png',
    important: 'important.png',
    info: 'info.png',
    tip: 'tip.png',
    todo: 'todo.png',
    deprecated: 'deprecation.png'
}
</script>

<template>
    <div :class="styles.infoBox" :style="{ width: width }" :data-variant="type">
        <div :class="styles.infoBoxIcon">
            <img :src="`icons/${images[type]}`" alt="" />
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>
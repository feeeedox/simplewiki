<template>
    <div :class="['info-box', type]" :style="{ width: width }">
        <div class="info-box-icon">
            <img :src="`icons/${images[type]}`" alt="" />
        </div>
        <div class="info-box-content">
            <slot />
        </div>
    </div>
</template>

<script setup>
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
}
</script>

<style scoped>
.info-box {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin: 1.5rem 0;
    max-width: 100%;
}

.info-box.alert {
    border-left: 4px solid #f56565;
    background-color: #fff5f5;
}

.info-box.download {
    border-left: 4px solid #4fa808;
    background-color: #f0fff0;
}

.info-box.help {
    border-left: 4px solid #4299e1;
    background-color: #ebf8ff;
}

.info-box.important {
    border-left: 4px solid #ed8936;
    background-color: #fffaf0;
}

.info-box.info {
    border-left: 4px solid #4299e1;
    background-color: #ebf8ff;
}

.info-box.tip {
    border-left: 4px solid #fdf998;
    background-color: #fefce8;
}

.info-box.todo {
    border-left: 4px solid #f6ad55;
    background-color: #fffaf0;
}

.info-box-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
}
</style>
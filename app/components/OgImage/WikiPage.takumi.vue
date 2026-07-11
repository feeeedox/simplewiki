<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'My Page Title',
  description: 'My page description',
})
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between bg-[#f8f9fa] p-16 border-l-12 border-r-12 border-[#a2a9b1]">
    
    <div class="flex flex-col gap-6">
      <h1 class="text-[60px] font-normal text-black font-serif pb-2 border-b border-[#a2a9b1] leading-tight">
        {{ title }}
      </h1>
      
      <p class="text-[26px] text-[#202122] leading-relaxed max-w-[90%] font-sans">
        {{ description }}
      </p>
    </div>

    <div class="w-full border-t border-[#eaecf0]" />
  </div>
</template>
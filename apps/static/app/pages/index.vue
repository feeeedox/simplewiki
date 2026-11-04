<script setup lang="ts">
if (import.meta.prerender) {
    const pages = await queryCollection('content').select('path').all()
    prerenderRoutes(pages.map(page => page.path))
}

const { data: navigation } = await useAsyncData('root-redirect', () =>
    queryCollectionNavigation('content')
)

if (navigation.value && navigation.value.length > 0) {
    const firstGroup = navigation.value[0]
    let redirectPath = '/'

    if (firstGroup == null) {
        redirectPath = '/'
    } else {
        if (firstGroup.children && firstGroup.children.length > 0) {
            redirectPath = firstGroup.children?.[0]?.path ?? '/'
        } else if (firstGroup.path) {
            redirectPath = firstGroup.path
        }

        const target = redirectPath.endsWith('/') ? redirectPath : `${redirectPath}/`
        await navigateTo(target, { redirectCode: 302 })
    }
}
</script>

<template>
    <div class="flex h-screen items-center justify-center text-text-muted">
        Redirecting to documentation...
    </div>
</template>

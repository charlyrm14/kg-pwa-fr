<script setup lang="ts">
    import type { Content } from '#imports';
    import { contentTypeImage } from '#imports';

    const config = useRuntimeConfig()

    const route = useRoute()

    const props = defineProps<{
        content: Content
    }>()

    const thumbnail = computed(() => {
        return `${config.public.apiMediaBaseUrl}/${props.content?.thumbnail?.path}`
    })

</script>

<template>
    <div class="bg-white dark:bg-dark-light rounded-4xl p-3.5 shadow dark:shadow-none">
        <div class="flex justify-between items-start md:items-center gap-x-3">
            <div class="flex gap-x-3">
                <NuxtLink :to="`/contents/${route.params.typeSlug}/${content?.slug}`" class="shrink-0">
                    <img 
                        v-if="content?.thumbnail"
                        :src="thumbnail" 
                        :alt="content?.name ?? 'unknown'" 
                        class="w-30 h-auto object-cover rounded-2xl brightness-60"/>
                    <img 
                        v-else
                        :src="contentTypeImage(content?.type)" 
                        :alt="content?.name ?? 'unknown'"
                        class="w-30 h-auto object-cover rounded-2xl brightness-60">
                </NuxtLink>
                <div>
                    <NuxtLink :to="`/contents/${route.params.typeSlug}/${content?.slug}`">
                        <h2 class="text-pink-500 text-sm md:text-base font-extrabold md:hidden"> {{ content?.name.slice(0, 40)  ?? 'unknown' }} </h2>
                    </NuxtLink>
                    <NuxtLink :to="`/contents/${route.params.typeSlug}/${content?.slug}`">
                        <h2 class="text-pink-500 text-sm md:text-base font-extrabold hidden md:block"> {{ content?.name ?? 'unknown' }} </h2>
                    </NuxtLink>
                    <span class="hidden md:block text-gray-400"> {{ content?.content.slice(0, 100) ?? 'unknown' }} ... </span>
                    <p class="inline-flex items-center gap-x-2 text-xs md:text-sm text-gray-400 font-light mt-4 md:mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1"><path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                        <span> {{ content?.created_at ?? 'unknown' }} </span>
                    </p>
                </div>
            </div>
            <NuxtLink :to="`/contents/${route.params.typeSlug}/${content?.slug}`" class="text-gray-600 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </NuxtLink>
        </div>
    </div>
</template>

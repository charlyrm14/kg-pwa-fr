<script setup lang="ts">
    import type { Content } from '#imports';
    import { contentTypeImage } from '#imports';

    const route = useRoute()

    defineProps<{
        content: Content
    }>()

</script>

<template>
    <div class="bg-white dark:bg-dark-light rounded-4xl p-3.5 shadow dark:shadow-none">
        <div class="flex justify-between items-center gap-x-3">
            <div class="flex gap-x-3">
                <NuxtLink :to="`/contents/${route.params.typeSlug}/${content?.slug}`" class="shrink-0">
                    <img :src="contentTypeImage(content?.type)" :alt="content?.title ?? 'unknown'" class="w-30 h-20 object-cover rounded-2xl brightness-60"/>
                </NuxtLink>
                <div>
                    <NuxtLink :to="`/contents/${route.params.typeSlug}/${content?.slug}`">
                        <h2 class="text-pink-500 text-sm md:text-base font-extrabold md:hidden"> {{ content?.title.slice(0, 75)  ?? 'unknown' }} </h2>
                    </NuxtLink>
                    <NuxtLink :to="`/contents/${route.params.typeSlug}/${content?.slug}`">
                        <h2 class="text-pink-500 text-sm md:text-base font-extrabold break-words hidden md:block"> {{ content?.title  ?? 'unknown' }} </h2>
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

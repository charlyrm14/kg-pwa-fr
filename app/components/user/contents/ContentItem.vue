<script setup lang="ts">
    import type { Content } from '#imports';
    import { contentTypeImage } from '#imports';

    const route = useRoute()

    defineProps<{
        content: Content
    }>()

</script>

<template>
    <NuxtLink
        :to="`/contents/${route.params.typeSlug}/${content?.slug}`">
            <div class="p-3 flex justify-between gap-x-4 items-center cursor-pointer rounded-lg bg-white hover:opacity-75 dark:bg-dark-light dark:hover:bg-dark-extralight my-4">
                <div class="group overflow-hidden rounded-full aspect-square w-25 transition-all duration-300 hover:bg-gray-200/30 dark:hover:bg-dark-light/40">
                    <img :src="contentTypeImage(content?.type)" :alt="content?.title ?? 'unknown'" class="w-full h-full object-cover"/>
                </div>
                <div class="border-b border-gray-200 dark:border-dark-soft w-full pb-2">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="text-pink-500">
                                {{ content?.title.slice(0, 40)  ?? 'unknown' }} ...
                            </h1>
                            <p class="my-1 text-gray-600 dark:text-gray-300 text-xs md:text-base">
                                {{ content?.content.slice(0, 70) ?? 'unknown' }} ...
                            </p>
                            <p class="inline-flex items-center gap-x-2 text-xs md:text-sm text-gray-400 font-light mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1"><path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                                <span> {{ content?.created_at ?? 'unknown' }} </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </NuxtLink>
</template>

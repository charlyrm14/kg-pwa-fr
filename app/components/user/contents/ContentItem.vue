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
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-dark-extralight rounded-lg px-3 py-2  shadow mb-3">
                <div class="flex items-start gap-4">                
                    <div class="flex-shrink-0">
                        <img
                            :src="contentTypeImage(content?.type)"
                            :alt="content?.title ?? 'unknown'"
                            class="w-36 h-28 md:w-48 md:h-36 object-cover rounded-lg brightness-50">
                    </div>
                    <div class="flex-grow flex flex-col justify-between">
                        <p class="inline-flex items-center gap-x-2 text-gray-400 font-light text-sm md:text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <span> {{ content?.author ?? 'unknown' }} </span>
                        </p>
                        <h2 class="text-pink-500 font-medium text-base md:text-2xl my-3 md:my-0 leading-snug">
                            {{ content?.title ?? 'unknown' }}
                        </h2>
                        <p class="hidden md:block my-1 text-gray-600 dark:text-gray-300">
                            {{ content?.content.slice(0, 130) ?? 'unknown' }}
                        </p>
                        <p class="inline-flex items-center gap-x-2 text-xs md:text-base text-gray-400 font-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1"><path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                            <span> {{ content?.created_at ?? 'unknown' }} </span>
                        </p>
                    </div>
                </div>
            </div>
    </NuxtLink>
</template>

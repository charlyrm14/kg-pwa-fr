<script setup lang="ts">
    import type { LastEventHome } from '#imports';

    const props = defineProps<{
        lastEvent: LastEventHome
    }>()

</script>

<template>
    <section>
        <NuxtLink :to="`/contents/eventos/${lastEvent?.slug}`">
            <div class="relative rounded-xl p-4 h-40 md:h-60 flex flex-col justify-between overflow-hidden bg-white dark:bg-dark-light">
                <div class="absolute inset-0 bg-no-repeat bg-right bg-cover bg-[url('/media/next-event-bg.svg')]"></div>
                <div class="absolute inset-0 bg-blue-100/90 dark:bg-dark-light opacity-80 dark:opacity-90"></div>

                <div class="relative flex justify-between items-center gap-x-3">
                    <span class="bg-blue-500 text-white rounded-full px-4 py-0.5 text-xs font-extrabold w-fit">
                        Próximo evento
                    </span>
                </div>

                <div class="relative mt-6">
                    <div class="space-y-1">
                        <h4 class="dark:text-white font-extrabold text-xl sm:text-2xl md:text-3xl leading-tight">
                            {{ lastEvent?.title ?? 'Unknown' }}
                        </h4>
                        <span class="inline-flex items-center gap-x-2 text-sm dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M8 2v4"/>
                                <path d="M16 2v4"/>
                                <rect width="18" height="18" x="3" y="4" rx="2"/>
                                <path d="M3 10h18"/>
                            </svg>
                            {{ lastEvent?.start_hour }} · {{ lastEvent?.location }}
                        </span>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </section>
</template>

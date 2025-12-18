<script setup lang="ts">
    import type { LastEventHome } from '#imports';

    const props = defineProps<{
        lastEvent: LastEventHome
    }>()

</script>

<template>
    <section>
        <NuxtLink :to="`/contents/events/${lastEvent?.slug}`">
            <div class="bg-[url('/media/pool.png')] bg-cover bg-center p-4 md:p-6 rounded-xl h-52 sm:h-56 md:h-64 lg:h-72 relative overflow-hidden">
                <div class="absolute inset-0 bg-black/40"></div>
                <div class="relative flex flex-col h-full justify-between">
                    <div class="flex justify-between items-center gap-x-3">
                        <span class="bg-purple-500 text-white rounded-full px-4 py-1 text-xs sm:text-sm font-extrabold">
                            Próximo evento
                        </span>
                        <span class="rounded-full px-3 py-1 text-xs sm:text-sm backdrop-blur-md bg-white/30 text-white flex items-center gap-x-2 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 6v6l4 2"/>
                                    <circle cx="12" cy="12" r="10"/>
                            </svg> Faltan {{ lastEvent?.remaining_time }}
                        </span>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-white font-bold text-xl sm:text-2xl md:text-3xl leading-tight">
                            {{ lastEvent?.title ?? 'Unknown' }}
                        </h4>
                        <span class="inline-flex items-center gap-x-2 text-sm text-white/90">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M8 2v4"/>
                                <path d="M16 2v4"/>
                                <rect width="18" height="18" x="3" y="4" rx="2"/>
                                <path d="M3 10h18"/>
                            </svg> {{ lastEvent?.start_hour }} · {{ lastEvent?.location }}
                        </span>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </section>
</template>

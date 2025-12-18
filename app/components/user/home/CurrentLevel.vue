<script setup lang="ts">
    import type { CurrentLevelHome } from '#imports';

    const props = defineProps<{
        currentLevel: CurrentLevelHome
        next_level?: string
    }>()


</script>

<template>
    <section class="mt-6 space-y-3">
        <div class="flex justify-between items-center">
            <h2 class="dark:text-white font-extrabold text-xl"> Mi progreso </h2>
            <NuxtLink to="/my-progress" class="text-blue-500 text-sm md:text-base cursor-pointer"> Ver detalle </NuxtLink>
        </div>
        <div class="bg-white dark:bg-dark-light p-4 rounded-lg shadow dark:shadow-none">
            <div class="flex justify-between items-center">
                <div class="flex gap-x-3">
                    <div class="bg-blue-500 text-white rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-icon lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
                    </div>
                    <h4 class="text-gray-600 dark:text-gray-400 text-sm"> 
                        Nivel actual 
                            <span class="block font-extrabold text-xl text-black dark:text-white"> {{ currentLevel?.category_name ?? 'Unknown' }} </span>
                    </h4>
                </div>
                <span class="font-extrabold dark:text-blue-500 text-3xl"> {{ currentLevel?.total_progress_formatted ?? '0%' }} </span>
            </div>
            <div class="w-full h-3 rounded-full bg-gray-200 dark:bg-dark-extralight overflow-hidden mt-4 mb-2">
                <div class="h-full rounded-full bg-blue-500" :style="`width: ${currentLevel?.total_progress}%`"></div>
            </div>
            <span class="text-sm dark:text-gray-400"> Próximo nivel: {{ next_level ?? 'Unknown' }} </span>
        </div>
    </section>
</template>

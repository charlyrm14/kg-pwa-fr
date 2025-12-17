<script setup lang="ts">
    import Seal from '~/assets/media/seal.png'
    import type { StudentProgress } from '#imports';
    import { capitalizeFirstLetter } from '#imports';

    const props = defineProps<{
        progress: StudentProgress
    }>()

</script>

<template>
    <div class="rounded-2xl bg-white dark:bg-dark-light shadow dark:shadow-none flex items-center gap-x-4">
        <div class="flex flex-col items-center justify-center gap-2 pl-6 py-4">
            <div class="w-20 h-20 rounded-full flex items-center justify-center bg-gray-200 dark:bg-dark-soft">
                <img :src="Seal"alt="Nivel Foca" class="w-16 absolute drop-shadow-lg drop-shadow-gray-400 dark:drop-shadow-gray-600"/>
            </div>
            <div class="text-center">
                <p class="font-extrabold text-xl dark:text-white"> {{ progress?.current_level?.category_name ?? 'Unknown' }} </p>
                <p class="text-blue-500 text-sm font-bold tracking-wide"> NIVEL 1 </p>
            </div>
        </div>
        <div class="flex-1 flex flex-col justify-center gap-4 pr-4">
            <div class="flex items-center justify-between">
                <p class="dark:text-gray-400 tracking-widest text-xs font-semibold"> PROGRESO </p>
                <p class="text-3xl font-extrabold text-blue-500"> {{ progress?.current_level?.total_progress_formatted ?? '0%' }} </p>
            </div>
            <div class="w-full h-6 rounded-full bg-gray-200 dark:bg-dark-extralight overflow-hidden">
                <div class="h-full rounded-full bg-blue-500" :style="`width: ${progress?.current_level?.total_progress}%`"></div>
            </div>
            <div class="flex items-center gap-x-2 dark:text-gray-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 7h6v6" />
                    <path d="m22 7-8.5 8.5-5-5L2 17" />
                </svg>
                <span> Próximo nivel: {{ progress?.next_level?.category_name  ?? 'Unknown' }} </span>
            </div>
        </div>
    </div>
</template>
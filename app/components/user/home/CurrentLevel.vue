<script setup lang="ts">
    import { 
        type CurrentLevelCategory, 
        type NextLevelCategory
    } from '#imports';
    import Star from '~/assets/media/star.png'

    const props = defineProps<{
        currentLevel: CurrentLevelCategory | null
        next_level: NextLevelCategory | null
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
                    <div class="bg-gray-100 dark:bg-dark-extralight text-white rounded-xl p-3">
                        <img :src="Star" :alt="currentLevel?.category_name ?? 'Nivel actual'" class="w-8 drop-shadow drop-shadow-amber-300">
                    </div>
                    <h4 class="text-gray-600 dark:text-gray-400 text-sm"> 
                        Nivel actual 
                            <span class="block font-extrabold text-xl text-black dark:text-white"> {{ currentLevel?.category_name ?? 'Unknown' }} </span>
                    </h4>
                </div>
                <span class="font-extrabold dark:text-blue-500 text-3xl"> {{ currentLevel?.progress_percentage ?? '0' }}% </span>
            </div>
            <div class="w-full h-3 rounded-full bg-gray-200 dark:bg-dark-extralight overflow-hidden mt-4 mb-2">
                <div class="h-full rounded-full bg-blue-500" :style="`width: ${currentLevel?.progress_percentage}%`"></div>
            </div>
            <span class="text-sm dark:text-gray-400"> Próximo nivel: {{ next_level?.category_name ?? 'Unknown' }} </span>
        </div>
    </section>
</template>

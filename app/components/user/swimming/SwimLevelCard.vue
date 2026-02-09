<script setup lang="ts">
    import type { CategoryWithProgress } from '~~/shared/types/Swimming';
    import { swimmingLevelColors } from '#imports';

    const props = defineProps<{
        level: CategoryWithProgress
    }>()
    
    const showLevelContent = ref<boolean>(false)
    const colors = swimmingLevelColors(props?.level?.slug)
    
</script>

<template>
    <div class="bg-white dark:bg-dark-light rounded-lg shadow dark:shadow-none" :class="showLevelContent ? `border-l-3 ${colors.border}` : ''">
        <div class="flex justify-between items-start p-4">
            <div class="flex justify-center items-start gap-x-3">
                <div class="w-12 h-12 rounded-full p-2 flex justify-center items-center" :class="colors.gradient">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-arrow-up-icon lucide-waves-arrow-up"><path d="M12 2v8"/><path d="M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="m8 6 4-4 4 4"/></svg>
                </div>
                <h4 class="text-gray-700 dark:text-gray-200 font-extrabold text-lg"> 
                    Nivel: {{ level?.name ?? 'Unknown' }} 
                        <span class="block text-xs" :class="level?.status === 'Completado' ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'"> {{ level?.status }} </span>
                </h4>
            </div>
            <button @click="showLevelContent = !showLevelContent" class="dark:text-white cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon " :class="showLevelContent ? 'lucide-chevron-up' : 'lucide-chevron-down'"><path :d="showLevelContent ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'"/></svg>
            </button>
        </div>
        <div v-if="showLevelContent" class="mt-2 p-4 rounded-lr rounded-lg border-t border-gray-200 dark:border-dark-soft">
            <p class="text-gray-600 dark:text-gray-300 text-base mb-4"> {{ level?.description ?? 'No hay descripción disponible' }} </p>
            <span class="text-gray-500 dark:text-gray-400"> Hablidades clave </span>
            <div v-for="(skill, index) in level?.category_skills" :key="index">
                <div class="mt-4 bg-gray-100 dark:bg-dark-extralight px-4 py-3 rounded-lg">
                    <p class="text-gray-600 dark:text-white text-sm inline-flex items-center gap-x-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                            {{ skill?.skill ?? 'Unknown' }}
                    </p>
                </div>
            </div>
            <div class="mt-6 mb-3">
                <div class="flex items-center justify-between">
                    <p class="dark:text-gray-400 tracking-widest text-xs font-semibold"> PROGRESO </p>
                    <p class="text-xl font-extrabold" :class="level?.status === 'Completado' ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'"> {{ level?.progress }}% </p>
                </div>
                <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-extralight overflow-hidden">
                    <div class="h-full rounded-full" :class="level?.status === 'Completado' ? 'bg-green-500' : 'bg-gray-500 dark:bg-gray-400' " :style="`width: ${level?.progress}%`"></div>
                </div>
            </div>
        </div>
    </div>
</template>

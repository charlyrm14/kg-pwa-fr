<script setup lang="ts">
    import type { SwimCategory } from '#imports';
    import { skillType } from '#imports';

    withDefaults(defineProps<SwimCategory>(), {
        name: 'unknown',
        slug: 'unknown',
        description: 'unknown',
        category_skills: () => []
    })

</script>

<template>
    <div class="bg-white dark:bg-dark-extralight rounded-2xl shadow p-4 w-full md:max-w-md border border-gray-200 dark:border-none">    
        <div class="flex justify-between items-center mb-6">
            <div>
                <h2 class="text-xl font-bold dark:text-white"> {{ name  }} </h2>
                <p class="text-gray-400 text-sm"> {{ description.slice(0, 80) }} ... </p>
            </div>
            
            <div class="flex items-center gap-2 bg-gray-100 dark:bg-dark-soft p-1 rounded-full text-sm font-medium">
                <span class="dark:text-white cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </span>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4 mb-6">
            <div
                v-if="category_skills.length > 0"
                v-for="(catPer, index) in category_skills"
                :key="index"
                class="p-4 rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-soft text-center">
                    <h3 class="text-2xl md:text-3xl font-bold dark-text dark:text-white"> {{ catPer?.percentage ?? 0 }}% </h3>
                    <p class="text-xs text-gray-400 dark:text-white mb-1"> {{ skillType(index) }} </p>
                    <div class="h-1 rounded-full w-full bg-teal-500"></div>
            </div>
            <div v-else
                v-for="(skillItem, index) in 3"
                :key="skillItem"
                class="p-4 rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-soft text-center">
                    <h3 class="text-2xl md:text-3xl font-bold dark-text dark:text-white"> 20% </h3>
                    <p class="text-xs text-gray-400 dark:text-white mb-1"> {{ skillType(index) }} </p>
                    <div class="h-1 rounded-full w-full bg-teal-500"></div>
            </div>
        </div>

        <div>
            <div
                v-if="category_skills.length > 0"
                v-for="(skillHab, index) in category_skills"
                :key="index"
                class="flex justify-between items-center py-1"
                :class="index < category_skills.length -1 ? 'border-b border-gray-200 dark:border-dark-soft' : ''">
                    <p class="dark:text-gray-400 font-extralight mb-2"> {{ skillHab?.skill ?? 'unknown'  }} </p>
            </div>
            <div v-else
                v-for="(item, index) in 3"
                :key="item"
                class="flex justify-between items-center py-1"
                :class="index < 3 -1 ? 'border-b border-gray-200 dark:border-dark-soft' : ''">
                    <p class="dark:text-gray-400 font-extralight mb-2"> {{ skillTypeDescription(index) }} </p>
            </div>
        </div>

    </div>
</template>

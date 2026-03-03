<script setup lang="ts">
    import type { CategoryProgram, ProgressionHistoryProgram } from '#imports';
    import Star from '~/assets/media/star.png'
    import SwimCategorySkillCard from './SwimCategorySkillCard.vue';
    
    const props = defineProps<{
        category: CategoryProgram
        progressCategory?: ProgressionHistoryProgram[] | null
    }>()

    const showLevelContent = ref<boolean>(false)
        
    const progress = computed(() => {
        if(!props?.progressCategory) return null
        return props?.progressCategory?.find(prog => prog?.category_id === props?.category?.id)
    })

</script>

<template>
    <div class="bg-white dark:bg-dark-light rounded-xl p-3 shadow dark:shadow-none">
            <div class="flex justify-between items-start md:items-center" :class="showLevelContent ? 'border-b border-gray-200 dark:border-dark-extralight' : ''">
                <div class="flex justify-between items-center gap-x-3 mb-2">
                    <div class="bg-gray-100 dark:bg-dark-extralight text-gray-500 dark:text-gray-400 rounded-xl p-1">
                        <img :src="Star" alt="Nivel caballito de mar" class="w-10 h-10 drop-shadow-lg drop-shadow-yellow-500">
                    </div>
                    <span class="text-base md:text-xl text-gray-600 dark:text-white font-extrabold"> 
                        Nivel: {{ category?.name ?? 'Unknown' }} 
                            <span
                                v-if="progress"
                                class="block text-xs md:text-sm"
                                :class="progress?.progress_percentage === 100 ? 'text-green-500' : 'text-blue-500'">
                                    {{ progress?.progress_percentage === 100 ? 'Completado' : 'En progreso' }}
                            </span>
                            <span
                                v-else
                                class="block text-xs md:text-sm text-gray-500"> Bloqueado </span>
                    </span>
                </div>
                <button
                    v-if="progress"
                    class="dark:text-gray-300 cursor-pointer hover:opacity-75" @click="showLevelContent = !showLevelContent">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="28" 
                            height="28" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            :class="!showLevelContent ? 'lucide lucide-chevron-down-icon lucide-chevron-down' : 'lucide lucide-chevron-up-icon lucide-chevron-up'">
                                <path :d="!showLevelContent ? 'm6 9 6 6 6-6' : 'm18 15-6-6-6 6'"/>
                        </svg>                    
                </button>
                <button v-else 
                    class="text-gray-500 dark:text-gray-300 cursor-not-allowed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
                </button>
            </div>
            <div v-if="showLevelContent" class="mt-3 space-y-3 py-3">
                <div class="flex flex-col">
                    <p class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-400"> 
                        {{ category?.description }} 
                    </p>
                </div>
                <div class="space-y-2">
                    <SwimCategorySkillCard
                        v-if="category?.skills"
                        v-for="skill in category?.skills"
                        :key="skill?.id"
                        :skill="skill"
                        :progress-skill="progress?.skills"/>
                </div>
            </div>
    </div>
</template>
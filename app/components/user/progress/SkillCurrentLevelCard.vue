<script setup lang="ts">
    import { 
        iconSkillProgress,
        type CategorySkill, 
        type SkillCategoryProgress 
    } from '#imports';
    
    const props = defineProps<{
        skill: CategorySkill
        progressSkill?: SkillCategoryProgress[]
    }>()

    const progressBySkill = computed(() => {
        if(!props?.progressSkill?.length) return null

        return {
            ...props?.progressSkill?.find(sk => sk.skill_id === props?.skill?.id)
        }
    })

</script>

<template>
    <div class="bg-white dark:bg-gradient-to-br dark:from-dark-soft dark:via-dark-extralight dark:to-dark-light rounded-xl p-3 shadow dark:shadow-none space-y-2">
        <div class="flex justify-between items-start">
            <div class="flex justify-between items-center gap-x-2 text-sm">
                <span 
                    v-if="progressBySkill"
                    class="w-5 h-5"
                    :class="progressBySkill?.skill_progress_percentage === 100 ? 'text-green-500' : 'text-gray-400'">
                        <span v-html="iconSkillProgress(progressBySkill?.skill_progress_percentage)"></span>
                </span>
                <span class="text-gray-800 dark:text-gray-300"> 
                    {{ skill?.description ?? 'Unknown' }}  
                        <span 
                            v-if="progressBySkill"
                            class="block text-xs font-extrabold"
                            :class="progressBySkill?.skill_progress_percentage === 100 ? 'text-green-500' : 'text-gray-400'"> 
                                {{ progressBySkill?.skill_progress_percentage === 100 ? 'Completado' : 'En progreso' }} 
                        </span>
                </span>
            </div>
            <span 
                v-if="progressBySkill"
                class="font-bold"
                :class="progressBySkill?.skill_progress_percentage === 100 ? 'text-green-500' : 'text-gray-400'"> 
                    {{ progressBySkill?.skill_progress_percentage ?? 0 }}% 
            </span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-dark p-1 rounded-full">
            <div 
                v-if="progressBySkill"
                class="p-1 bg-blue-500 rounded-full" 
                :style="`width:${progressBySkill?.skill_progress_percentage ?? 0}%`"></div>
        </div>
    </div>
</template>

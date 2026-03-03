<script setup lang="ts">
    import { 
        type CategorySkill, 
        type SkillCategoryProgress,
        iconSkillProgress 
    } from '#imports';

    const props = defineProps<{
        skill: CategorySkill
        progressSkill?: SkillCategoryProgress[] | null
    }>()

    const progress = computed(() => {
        if(!props?.progressSkill) return
        return props?.progressSkill?.find(prog => prog.skill_id === props?.skill?.id)
    })

</script>

<template>
    <div class="space-y-2">
        <div class="flex justify-between items-center">
            <span 
                class="inline-flex items-center gap-x-2 text-sm md:text-base dark:text-gray-400"> 
                    <span v-html="iconSkillProgress(progress?.skill_progress_percentage)"></span>
                        {{ skill?.description }} 
            </span>
            <span 
                v-if="progress"
                class="font-bold"
                :class="progress?.skill_progress_percentage === 100 ? 'text-blue-500' : 'text-gray-400'"> 
                    {{ progress?.skill_progress_percentage ?? 0 }}% 
            </span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-dark-extralight p-1 rounded-full">
            <div 
                v-if="progress"
                class="p-1 bg-blue-500 rounded-full" 
                :style="`width:${progress?.skill_progress_percentage ?? 0}%`"></div>
        </div>
    </div>
</template>
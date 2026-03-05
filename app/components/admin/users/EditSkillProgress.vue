<script setup lang="ts">
    import { useStudentProgram, type SkillCategoryProgress } from '#imports';
    import AssignSkillProgressSkeleton from '../skeleton/users/AssignSkillProgressSkeleton.vue';
    
    const { 
        studentProgram, 
        loading,
        updateStudentSkillProgress 
    } = useStudentProgram()
    
    const enableEditSkillId = ref<number | null>(null) 
    const draftProgress = ref<Record<number, number>>({})
    const isSubmitting = ref<boolean>(false)

    const skillsCurrentLevel = computed(() => {
        if(!studentProgram) return null

        const currentLevelId = studentProgram?.value?.current_level?.category_id

        return {
            ...studentProgram?.value?.progression_history.find(
                cat => cat.category_id === currentLevelId
            )
        }
    }) 

    const startEdit = (skill: SkillCategoryProgress) => {
        enableEditSkillId.value = skill.skill_id
        draftProgress.value[skill.skill_id] = skill.skill_progress_percentage
    }

    const handleSubmit = async(skill: SkillCategoryProgress) => {
        if(!skill) return

        const newProgress = draftProgress.value[skill.skill_id]
        if (newProgress == null) return

        /** Si valor no cambio no se envia request */
        if (newProgress === skill.skill_progress_percentage) {
            enableEditSkillId.value = null
            return
        }

        isSubmitting.value = true

        try {

            await updateStudentSkillProgress(skill.skill_progress_id, newProgress)
            skill.skill_progress_percentage = newProgress

        } catch (error) {
            console.error(error)
        } finally {
            isSubmitting.value = false
            enableEditSkillId.value = null
        }
    }

</script>

<template>
    <Transition name="fade" mode="out-in">
        <AssignSkillProgressSkeleton v-if="loading" key="loading"/>
        <div v-else-if="studentProgram" key="data" class="bg-white dark:bg-dark-light rounded-2xl p-4">
            <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg mb-2"> Asignar progreso de habilidad </h4>
            </div>
            <div class="mt-3">
                <h4 class="dark:text-gray-300"> 
                    Nivel actual: <span class="font-bold"> {{ studentProgram?.current_level?.category_name }}  </span>
                </h4>
            </div>
            <div
                v-for="skill in skillsCurrentLevel?.skills"
                :key="skill.skill_id"
                class="mt-6">            
                    <div class="flex justify-between items-center bg-gray-100 dark:bg-dark-extralight rounded-xl p-2">
                        <div>
                            <span class="text-gray-600 dark:text-gray-400 font-bold">
                                {{ skill.skill_description ?? 'Unknown' }}
                            </span>
                            <span 
                                class="block text-xs font-extrabold"
                                :class="skill?.skill_progress_percentage === 100 ? 'text-green-500' : 'text-gray-400'"> 
                                    {{ skill?.skill_progress_percentage === 100 ? 'Completado' : 'En progreso' }} · {{ skill.skill_progress_percentage ?? 0 }}%
                            </span>
                        </div>
                        <button 
                            class="bg-purple-500 text-white px-4 py-0.5 rounded-full font-bold cursor-pointer text-sm"
                            @click="startEdit(skill)"> 
                                Editar 
                        </button>
                    </div>

                    <div v-if="enableEditSkillId === skill.skill_id" class="mt-3">
                        <div>
                            <label for="skill" class="dark:text-gray-400"> Porcentage </label>
                            <input 
                                type="number"
                                name="skill"
                                inputmode="numeric"
                                @wheel.prevent
                                placeholder="Ej: 100"
                                min="0"
                                max="100"
                                v-model="draftProgress[skill.skill_id]"
                                class="w-full bg-gray-200 dark:bg-dark-extralight dark:text-white px-4 py-2 rounded-xl focus:outline-none mt-2">
                        </div>
                        <div class="flex justify-end mt-8">
                            <button 
                                :disabled="isSubmitting"
                                class="w-full md:w-fit text-white font-bold rounded-full px-4 py-2 hover:opacity-50"
                                :class="isSubmitting ? 'bg-blue-300 cursor-not-allowed': 'bg-blue-500 cursor-pointer'"
                                @click="handleSubmit(skill)">
                                    Asignar progreso de habilidad
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    </Transition>
</template>

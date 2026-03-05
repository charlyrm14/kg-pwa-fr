<script setup lang="ts">
    import Star from '~/assets/media/star.png'
    import Axolotl from '~/assets/media/ajolote.png'
    import { 
        useStudentProgram, 
        iconSkillProgress  
    } from '#imports'
    import UserCurrentLevelSkeleton from '../skeleton/users/UserCurrentLevelSkeleton.vue'

    const route = useRoute()

    const { 
        studentProgram, 
        loading, 
        fetchStudentProgram 
    } = useStudentProgram()
    
    const userUuid = Array.isArray(route.params.uuid)
        ? route.params.uuid[0]
        : route.params.uuid

    onMounted(async() => {
        try {
            
            await fetchStudentProgram(userUuid)

        } catch (error) {
            console.error(error)
        }
    })

    const currentCategoryProgress = computed(() => {
        if(!studentProgram.value) return null

        const currentLevel = studentProgram?.value?.current_level

        return {
            ...studentProgram?.value?.progression_history.find(
                cat => cat.category_id === currentLevel?.category_id
            )
        }
    })

</script>

<template>
    <Transition name="fade" mode="out-in">
        <UserCurrentLevelSkeleton v-if="loading" key="loading"/>
        <div v-else-if="studentProgram" key="data" class="bg-white dark:bg-dark-light rounded-2xl p-4">
            <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg mb-2"> Nivel actual </h4>
            </div>
            <div>
                <div>
                    <div class="bg-gray-100 dark:bg-dark-extralight rounded-xl p-2 shadow dark:shadow-none space-y-2 mt-2 relative">
                        <div class="flex gap-x-2">
                            <img :src="Star" alt="star" class="w-6 h-6">
                            <span class="font-bold dark:text-white text-lg"> 
                                {{ studentProgram?.current_level?.category_name }}
                            </span>
                        </div>
                        <div class="absolute right-1 top-4">
                            <img :src="Axolotl" alt="Axolotl" class="w-15 h-15 md:w-25 md:h-25 drop-shadow drop-shadow-pink-400">
                        </div>
                        <div class="flex items-center gap-2 text-slate-300 text-xs md:text-base mb-4">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                            </span>
                            <span class="dark:text-gray-400 text-gray-500">
                                <strong class="text-green-400"> 
                                    {{ studentProgram?.current_level?.skills_completed }} de {{ studentProgram?.current_level?.skills_total }} 
                                </strong> habilidades completadas
                            </span>
                        </div>
                        <div>
                            <p class="dark:text-gray-400 text-gray-800 text-sm leading-relaxed max-w-[75%] font-semibold">
                                {{ studentProgram?.current_level?.category_description }}
                            </p>
                        </div>
                        <div class="flex justify-end">
                            <span class="text-green-500 font-extrabold"> 
                                {{ studentProgram?.current_level?.progress_percentage }}% 
                            </span>
                        </div>
                        <div class="w-full bg-gray-300 dark:bg-dark-soft p-1 rounded-full">
                            <div class="p-1 bg-blue-500 rounded-full" :style="`width:${studentProgram?.current_level?.progress_percentage ?? 0}%`"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <span class="dark:text-gray-400 font-semibold"> Habilidades de categoría </span>
                    <div 
                        v-if="currentCategoryProgress"
                        v-for="skill in currentCategoryProgress?.skills"
                        :key="skill.skill_id"
                        class="bg-gray-100 dark:bg-dark-extralight rounded-xl px-2 py-2 shadow dark:shadow-none space-y-2 mt-2">
                            <div class="flex justify-between items-start">
                                <div class="flex justify-between items-center gap-x-2 text-sm">
                                    <span class="w-5 h-5 text-green-500">
                                        <span v-html="iconSkillProgress(skill?.skill_progress_percentage)"></span>
                                    </span>
                                    <span class="dark:text-gray-400"> 
                                        {{ skill?.skill_description }}
                                            <span 
                                                class="block text-xs font-extrabold"
                                                :class="skill?.skill_progress_percentage === 100 ? 'text-green-500' : 'text-gray-400'"> 
                                                    {{ skill?.skill_progress_percentage === 100 ? 'Completado' : 'En progreso' }} 
                                            </span>
                                    </span>
                                </div>
                                <span class="text-green-500 font-extrabold"> {{ skill?.skill_progress_percentage ?? 0}}% </span>
                            </div>
                            <div class="w-full bg-gray-300 dark:bg-dark-soft p-1 rounded-full">
                                <div 
                                    class="p-1 bg-blue-500 rounded-full" 
                                    :style="`width:${skill?.skill_progress_percentage ?? 0}%`"></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else key="empty" class="bg-white dark:bg-dark-light rounded-2xl p-4">
            <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg mb-2"> Nivel actual </h4>
            </div>
            <div class="flex flex-col justify-center items-center mt-4">
                <h2 class="text-gray-600 dark:text-white font-semibold text-sm"> Usuario sin progreso asignado </h2>
                <span class="mt-6 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-x-icon lucide-user-x"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/></svg>
                </span>
                <span class="text-blue-500 text-lg font-bold mt-4"> Empieza asignando un nivel </span>
            </div>
        </div>
    </Transition>
</template>
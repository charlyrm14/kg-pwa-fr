<script setup lang="ts">
    import { useSwimProgram } from '#imports'
    import SwimProgramCard from '~/components/user/progress/SwimProgramCard.vue'
    import SwimCategoryCard from '~/components/user/progress/SwimCategoryCard.vue'
    import StudentCurrentLevelCard from '~/components/user/progress/StudentCurrentLevelCard.vue'
    import SkillCurrentLevelCard from '~/components/user/progress/SkillCurrentLevelCard.vue'

    const { fetchSwimProgram } = useSwimProgram()
    const { fetchStudentProgram } = useStudentProgram()

    const { data: res, pending, refresh } = await useAsyncData(
        () => `my-progress`,
        async () => {

            const [swimPrograms, studentProgram ] = await Promise.all([
                fetchSwimProgram(),
                fetchStudentProgram()
            ]);

            return {
                swimPrograms: swimPrograms,
                studentProgram: studentProgram
            };
        },
        {
            server: true,
            lazy: false,
            default: () => ({
                swimPrograms: null,
                studentProgram: null
            })
        }
    )

    const programSelected = ref<number>(
        res?.value?.studentProgram ? res?.value?.studentProgram?.data?.program?.id : 1
    )

    const programs = computed(() => {
        if(!res?.value?.swimPrograms) return null
        return {...res?.value?.swimPrograms?.data.sort((a,b) => a.id - b.id)}
    })

    const onChangeProgram = (programId: number) => {
        programSelected.value = programId
    }

    const categories = computed(() => {
        if(!res?.value?.swimPrograms) return null

        return {
            ...res?.value?.swimPrograms?.data.find(program => program.id === programSelected.value)
        }
    })

    const student = computed(() => {
        if(!res?.value?.studentProgram) return null
        return { ...res?.value?.studentProgram?.data }
    })

    const skillsCurrentLevel = computed(() => {
        if(!res?.value?.swimPrograms) return null
        if(!res?.value?.studentProgram) return null
        
        return {
            ...res?.value?.swimPrograms?.data?.flatMap(
                    block => block.categories).find(
                    category => category.id === res?.value?.studentProgram?.data?.current_level?.category_id
                ) ?? null
        }
    })

    const skillProgressionByCategory = computed(() => {
        if(!res?.value?.studentProgram) return null

        return {
            ...res?.value?.studentProgram?.data?.progression_history?.find(
                category => category.category_id === res?.value?.studentProgram?.data?.current_level?.category_id
            )
        }
    })

    const categoriesProgression = computed(() => {
        if(!res?.value?.studentProgram) return null

        return res?.value?.studentProgram?.data?.progression_history ?? null
    })

</script>

<template>
    <section>

        <!-- Beginning Programs -->
        <section>
            <div class="space-y-3">
                <h6 class="dark:text-gray-400 mb-2 font-semibold"> Categorías </h6>
                <div 
                    v-if="programs" 
                    class="w-full flex gap-x-4 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide scroll-smooth snap-x snap-mandatory py-4 scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-300">
                        <SwimProgramCard
                            v-for="program in programs"
                            :key="program.id"
                            :program="program"
                            :selected-id="programSelected"
                            @selectProgram="onChangeProgram"/>
                </div>
            </div>
        </section>
        <!-- End Programs -->

        <!-- Beginning Current Level -->
        <section class="mt-6">
            <h6 class="dark:text-gray-400 mb-2 font-semibold"> Nivel actual </h6>
            <StudentCurrentLevelCard
                v-if="student"
                :program="student?.program"
                :current-level="student?.current_level"
                :next-level="student?.next_level"/>
        </section>
        <!-- End Current Level -->

        <!-- Beginning Skills Current Level -->
        <section class="mt-6">
            <div class="space-y-2">
                <h6 class="dark:text-gray-400 mb-2 font-semibold"> Habilidades de estrella de mar </h6>
                <SkillCurrentLevelCard 
                    v-if="skillsCurrentLevel"
                    v-for="skill in skillsCurrentLevel.skills"
                    :key="skill.id"
                    :skill="skill"
                    :progress-skill="skillProgressionByCategory?.skills"/>
            </div>
        </section>
        <!-- End Skills Current Level -->

        <!-- Beginning Available Levels -->
        <section class="my-6">
            <div class="space-y-3">
                <h6 class="dark:text-gray-400 mb-2 font-semibold"> Niveles disponibles </h6>
                <SwimCategoryCard
                    v-if="categories"
                    v-for="category in categories?.categories"
                    :key="category.id"
                    :category="category"
                    :progress-category="categoriesProgression"/>
            </div>
        </section>
        <!-- End Available Levels -->
        
    </section>
</template>
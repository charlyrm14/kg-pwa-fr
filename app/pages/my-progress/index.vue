<script setup lang="ts">
    import SwimLevelCard from '~/components/user/swimming/SwimLevelCard.vue';
    import { useSwimming, useStudentProgress } from '#imports';
    import StudentCurrentLevel from '~/components/user/swimming/StudentCurrentLevel.vue';
    
    const { fetchStudentProgress } = useStudentProgress()
    const { fetchSwimCategories } = useSwimming()

    const { data, pending, error } = await useAsyncData('progress', async () => {
        const [studentProgress, levels] = await Promise.all([
            fetchStudentProgress(),
            fetchSwimCategories()
        ])

        return {
            studentProgress,
            levels
        }
    })

    const progressMap = computed(() => {
        return new Map(
            data?.value?.studentProgress?.data?.progression_history.map(
                p => [p.category_slug, p]
            ) ?? null
        )
    })

    const categoriesWithProgress = computed(() => {
        return data?.value?.levels?.data?.map( category => {
            const progress = progressMap.value.get(category.slug)

            return {
                ...category,
                progress: progress?.total_progress ?? 0,
                status: progress
                    ? progress.total_progress === 100
                        ? 'Completado'
                        : 'En progreso'
                    : 'En progreso'
            }
        }) ?? null
    })
        
</script>

<template>
    <section>
        
        <!-- Beginning Current Level -->
        <section class="space-y-3">
            <div class="flex justify-between items-center">
                <h2 class="dark:text-white font-extrabold text-xl"> Mi progreso </h2>
            </div>
            <div v-if="data?.studentProgress">
                <StudentCurrentLevel :progress="data?.studentProgress?.data"/>
            </div>
        </section>
        <!-- End Current Level -->
        
        <!-- Beginning Levels -->
        <section class="mt-6 space-y-3">
            <div class="flex justify-between items-center">
                <h2 class="dark:text-white font-extrabold text-xl"> Niveles disponibles </h2>
            </div>
            <div v-if="(data?.levels?.data || []).length > 0"  class="space-y-4">
                <SwimLevelCard
                    v-for="(level, index) in categoriesWithProgress"
                    :key="index"
                    :level="level"/>
            </div>
            <div v-else>
                <span class="text-red-500 text-center text-2xl"> No hay contenido </span>
            </div>
        </section>
        <!-- End Levels -->

    </section>
</template>
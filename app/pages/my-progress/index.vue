<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
    import SwimLevelCard from '~/components/user/swimming/SwimLevelCard.vue';
    import { capitalizeFirstLetter } from '#imports';
    import type { SwimCategory } from '#imports';
    
    const {
        swimCategories,
        fetchSwimCategories
    } = useSwimming()

    const { data: swimCategoriesData } = await useAsyncData('swimCategories', async() => fetchSwimCategories())
    
    const selectCategoryCard = ref<SwimCategory | null>(null)

    const toggleCategoryCardSelected = (category: SwimCategory) => {
        selectCategoryCard.value = category
    }
    
</script>

<template>
    <section>
        
        <section>
        <SectionTitle title="Tú Progreso"/>
        <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg px-3 py-1 cursor-pointer">
            <div class="flex justify-between items-center my-1">
                <div class="flex items-start gap-x-4">
                    <div class="bg-orange-200 p-1 rounded-lg text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
                    </div>
                    <p class="dark:text-white text-xs font-light flex flex-col gap-1"> 
                        Nivel actual <span class="block text-2xl"> Foca </span>
                    </p>
                </div>
                <div class="border-6 border-gray-200 dark:border-dark-soft rounded-full px-2 py-3">
                    <span class="font-light dark:text-white text-lg"> 20% </span>
                </div>
            </div>
        </div>

        <div class="grid-cols-1 mt-8">
            <!-- <SwimLevelCard
                name="Tortuga"
                description="¡Ya estás avanzando firme como una tortuga en su travesía! Tu técnica mejora y se nota tu esfuerzo. Sigue con esa constancia, que cada brazada te acerca a tu próxima meta."
                :percentage="40"/> -->
        </div>
        </section>

        <section class="mt-6">
            <SectionTitle title="Estadísticas"/>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-2 rounded-lg shadow">
                    <div class="flex justify-center items-center">
                        <div class="border-6 border-gray-200 dark:border-dark-soft rounded-full px-4 py-5">
                            <span class="font-light dark:text-white text-lg"> 80% </span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <p class="dark:text-white font-light text-center"> Para completar el nivel </p>
                    </div>
                </div>
                <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-2 rounded-lg shadow">
                    <div class="flex justify-center items-center">
                        <div class="border-6 border-gray-200 dark:border-dark-soft rounded-full px-4 py-4">
                            <span class="font-light dark:text-white text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-turtle-icon lucide-turtle"><path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"/><path d="M4.82 7.9 8 10"/><path d="M15.18 7.9 12 10"/><path d="M16.93 10H20a2 2 0 0 1 0 4H2"/></svg>
                            </span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <p class="dark:text-white font-light text-center"> Próximo nivel Tortuga </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="my-6">
            <SectionTitle title="Niveles disponibles"/>
            <div class="bg-gray-200/60 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-1 rounded-lg flex gap-6 overflow-x-auto">
                <button
                    v-for="cat in swimCategoriesData?.data"
                    :key="cat.slug"
                    @click="toggleCategoryCardSelected(cat)"
                    class="dark:text-white w-auto cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0 px-4 py-2 rounded-lg"
                    :class="cat.slug === selectCategoryCard?.slug ? 'bg-gray-100 dark:bg-dark-extralight ' : ''">
                        {{ capitalizeFirstLetter(cat?.name) }}
                </button>
            </div>

            <div class="mt-6">
                <SwimLevelCard
                    :name="selectCategoryCard?.name ?? 'Foca'"
                    :slug="selectCategoryCard?.name ?? 'FOCA'"
                    :description="selectCategoryCard?.description ?? '¡Felicidades por comenzar tu aventura acuática! Como una foca, ya estás ganando confianza en el agua. Sigue practicando y pronto estarás nadando como un experto. ¡Vamos paso a paso!'"
                    :category_skills="selectCategoryCard?.category_skills ?? []"/>
            </div>
        </section>

    </section>
</template>
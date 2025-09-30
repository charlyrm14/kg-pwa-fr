<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';

    const contentTab = ref<number>(2)
</script>

<template>
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

            <div class="bg-white dark:bg-dark-extralight rounded-2xl shadow p-4 w-full md:max-w-md border border-gray-200 dark:border-none">    
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-xl font-bold dark:text-white"> Foca </h2>
                        <p class="text-gray-400 text-sm"> Firme como una Foca en su travesía </p>
                    </div>
                    
                    <div class="flex items-center gap-2 bg-gray-100 dark:bg-dark-soft p-2 rounded-full text-sm font-medium">
                        <span class="dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-turtle-icon lucide-turtle"><path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"/><path d="M4.82 7.9 8 10"/><path d="M15.18 7.9 12 10"/><path d="M16.93 10H20a2 2 0 0 1 0 4H2"/></svg>
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="p-4 rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-soft text-center">
                        <h3 class="text-2xl md:text-3xl font-bold dark-text dark:text-white"> 25% </h3>
                        <p class="text-xs text-gray-400 dark:text-white mb-1"> Fuerza </p>
                        <div class="h-1 rounded-full w-full bg-teal-500"></div>
                    </div>

                    <div class="p-4 rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-soft text-center">
                        <h3 class="text-2xl md:text-3xl font-bold dark-text dark:text-white"> 25% </h3>
                        <p class="text-xs text-gray-400 dark:text-white mb-1"> Velocidad</p>
                        <div class="h-1 rounded-full w-full bg-teal-500"></div>
                    </div>

                    <div class="p-4 rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-soft text-center">
                        <h3 class="text-2xl md:text-3xl font-bold dark-text dark:text-white"> 25% </h3>
                        <p class="text-xs text-gray-400 mb-1 dark:text-white"> Resistencia </p>
                        <div class="h-1 rounded-full w-full bg-teal-500"></div>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft">
                        <p class="dark:text-gray-400 font-extralight mb-2"> Patadas firmes y seguras </p>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft mt-2">
                        <p class="dark:text-gray-400 font-extralight mb-2"> Brazos lentos pero fuertes </p>
                    </div>
                    <div class="flex justify-between items-center mt-2">
                        <p class="dark:text-gray-400 font-extralight mb-2"> Avanza sin prisa, sin pausa </p>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <section class="mt-6">
        <SectionTitle title="Estadísticas"/>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-200/60 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-2 rounded-lg">
                <div class="flex justify-center items-center">
                    <div class="border-6 border-gray-200 dark:border-dark-soft rounded-full px-4 py-5">
                        <span class="font-light dark:text-white text-lg"> 80% </span>
                    </div>
                </div>
                <div class="mt-2">
                    <p class="dark:text-white font-light text-center"> Para completar el nivel </p>
                </div>
            </div>
            <div class="bg-gray-200/60 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-2 rounded-lg">
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
                @click="contentTab = 1"
                class="dark:text-white w-auto cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0 px-4 py-2 "
                :class="contentTab === 1 ? 'bg-white dark:bg-dark-soft rounded-lg font-bold' : ''">
                    Foca
            </button>
            <button
                @click="contentTab = 2"
                class="dark:text-white w-auto cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0 px-4 py-2 "
                :class="contentTab === 2 ? 'bg-white dark:bg-dark-soft rounded-lg font-bold': 'font-light'">
                    Tortuga
            </button>
            <button
                @click="contentTab = 3"
                class="dark:text-white w-auto cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0 px-4 py-2 "
                :class="contentTab === 3 ? 'bg-white dark:bg-dark-soft rounded-lg font-bold': 'font-light'">
                    Mantarraya
            </button>
            <button
                @click="contentTab = 4"
                class="dark:text-white w-auto cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0 px-4 py-2 "
                :class="contentTab === 4 ? 'bg-white dark:bg-dark-soft rounded-lg font-bold': 'font-light'">
                    Pez vela
            </button>
            <button
                @click="contentTab = 5"
                class="dark:text-white w-auto cursor-pointer hover:opacity-75 overflow-hidden flex-shrink-0 px-4 py-2 "
                :class="contentTab === 5 ? 'bg-white dark:bg-dark-soft rounded-lg font-bold': 'font-light'">
                    Tiburón
            </button>
        </div>

        <div class="mt-6">
            <div class="bg-white dark:bg-dark-extralight rounded-2xl shadow p-4 w-full md:max-w-md border border-gray-200 dark:border-none">    
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-xl font-bold dark:text-white"> Tortuga </h2>
                        <p class="text-gray-400 text-sm"> Firme como una tortuga en su travesía </p>
                    </div>
                    
                    <div class="flex items-center gap-2 bg-gray-100 dark:bg-dark-soft p-2 rounded-full text-sm font-medium">
                        <span class="dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-turtle-icon lucide-turtle"><path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"/><path d="M4.82 7.9 8 10"/><path d="M15.18 7.9 12 10"/><path d="M16.93 10H20a2 2 0 0 1 0 4H2"/></svg>
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="p-4 rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-soft text-center">
                        <h3 class="text-2xl md:text-3xl font-bold dark-text dark:text-white"> 35% </h3>
                        <p class="text-xs text-gray-400 dark:text-white mb-1"> Fuerza </p>
                        <div class="h-1 rounded-full w-full bg-teal-500"></div>
                    </div>

                    <div class="p-4 rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-soft text-center">
                        <h3 class="text-2xl md:text-3xl font-bold dark-text dark:text-white"> 35% </h3>
                        <p class="text-xs text-gray-400 dark:text-white mb-1"> Velocidad</p>
                        <div class="h-1 rounded-full w-full bg-teal-500"></div>
                    </div>

                    <div class="p-4 rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-soft text-center">
                        <h3 class="text-2xl md:text-3xl font-bold dark-text dark:text-white"> 35% </h3>
                        <p class="text-xs text-gray-400 mb-1 dark:text-white"> Resistencia </p>
                        <div class="h-1 rounded-full w-full bg-teal-500"></div>
                    </div>
                </div>

                <div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft">
                        <p class="dark:text-gray-400 font-extralight mb-2"> Patadas firmes y seguras </p>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft mt-2">
                        <p class="dark:text-gray-400 font-extralight mb-2"> Brazos lentos pero fuertes </p>
                    </div>
                    <div class="flex justify-between items-center mt-2">
                        <p class="dark:text-gray-400 font-extralight mb-2"> Avanza sin prisa, sin pausa </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>
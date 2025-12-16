<script setup lang="ts">
    import Seal from '~/assets/media/seal.png'

    const showLevelContent = ref<boolean>(false)
    
</script>

<template>
    <section>
        
        <!-- Beginning Current Level -->
        <section class="space-y-3">
            <div class="flex justify-between items-center">
                <h2 class="dark:text-white font-extrabold text-xl"> Mi progreso </h2>
            </div>
            <div class="rounded-2xl bg-white dark:bg-dark-light shadow dark:shadow-none flex items-center gap-x-4">
                <div class="flex flex-col items-center justify-center gap-2 pl-6 py-4">
                    <div class="w-20 h-20 rounded-full flex items-center justify-center bg-gray-200 dark:bg-dark-soft">
                        <img :src="Seal"alt="Nivel Foca" class="w-16 absolute drop-shadow-lg drop-shadow-gray-400 dark:drop-shadow-gray-600"/>
                    </div>
                    <div class="text-center">
                        <p class="font-extrabold text-xl dark:text-white"> Foca </p>
                        <p class="text-blue-500 text-sm font-bold tracking-wide"> NIVEL 1 </p>
                    </div>
                </div>
                <div class="flex-1 flex flex-col justify-center gap-4 pr-4">
                    <div class="flex items-center justify-between">
                        <p class="dark:text-gray-400 tracking-widest text-xs font-semibold"> PROGRESO </p>
                        <p class="text-3xl font-extrabold text-blue-500"> 20% </p>
                    </div>
                    <div class="w-full h-6 rounded-full bg-gray-200 dark:bg-dark-extralight overflow-hidden">
                        <div class="h-full w-[20%] rounded-full bg-blue-500"></div>
                    </div>
                    <div class="flex items-center gap-x-2 dark:text-gray-300 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 7h6v6" />
                            <path d="m22 7-8.5 8.5-5-5L2 17" />
                        </svg>
                        <span> Próximo nivel: Tortuga </span>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Current Level -->

        <!-- Beginning Levels -->
        <section class="mt-6 space-y-3">
            <div class="flex justify-between items-center">
                <h2 class="dark:text-white font-extrabold text-xl"> Niveles disponibles </h2>
            </div>
            <div class="bg-white dark:bg-dark-light rounded-lg p-4 shadow dark:shadow-none">
                <div class="flex justify-between items-start">
                    <div class="flex justify-center items-start gap-x-3">
                        <div class="w-12 h-12 bg-gradient-to-t from-green-600 to-green-300 text-green-800 rounded-full p-2 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                        </div>
                        <h4 class="text-gray-700 dark:text-gray-200 font-extrabold text-lg"> 
                            Nivel 1: Foca <span class="block text-green-500 text-xs"> Completado </span>
                        </h4>
                    </div>
                    <div class="dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-dark-light rounded-lg p-4 shadow dark:shadow-none">
                <div class="flex justify-between items-start">
                    <div class="flex justify-center items-start gap-x-3">
                        <div class="w-12 h-12 bg-gradient-to-t from-green-600 to-green-300 text-green-800 rounded-full p-2 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                        </div>
                        <h4 class="text-gray-700 dark:text-gray-200 font-extrabold text-lg"> 
                            Nivel 2: Tortuga <span class="block text-green-500 text-xs"> Completado </span>
                        </h4>
                    </div>
                    <div  class="dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-dark-light rounded-lg shadow dark:shadow-none" :class="showLevelContent ? 'border-l-3 border-blue-500' : ''">
                <div class="flex justify-between items-start p-4">
                    <div class="flex justify-center items-start gap-x-3">
                        <div class="w-12 h-12 bg-gradient-to-t from-blue-600 to-blue-300 text-white rounded-full p-2 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-arrow-up-icon lucide-waves-arrow-up"><path d="M12 2v8"/><path d="M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="m8 6 4-4 4 4"/></svg>
                        </div>
                        <h4 class="text-gray-700 dark:text-gray-200 font-extrabold text-lg"> 
                            Nivel 3: Mantarraya <span class="block text-blue-500 text-xs"> En progreso </span>
                        </h4>
                    </div>
                    <button @click="showLevelContent = !showLevelContent" class="dark:text-white cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon " :class="showLevelContent ? 'lucide-chevron-up' : 'lucide-chevron-down'"><path :d="showLevelContent ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'"/></svg>
                    </button>
                </div>
                <div v-if="showLevelContent" class="mt-2 p-4 rounded-lr rounded-lg border-t border-gray-200 dark:border-dark-soft">
                    <p class="text-gray-600 dark:text-gray-300 text-base"> ¡Deslizas en el agua como una mantarraya! Has mejorado mucho tu fluidez y control. Mantén tu concentración y disciplina, vas por excelente camino. ¡Sigue brillando! </p>
                    <div class="mt-4">
                        <span class="text-gray-500 dark:text-gray-400"> Hablidades clave </span>
                        <div class="mt-4 bg-gray-100 dark:bg-dark-extralight px-4 py-3 rounded-lg">
                            <p class="text-gray-600 dark:text-white text-sm inline-flex items-center gap-x-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                    Desliza como una sombra 
                            </p>
                        </div>
                        <div class="mt-4 bg-gray-100 dark:bg-dark-extralight px-4 py-3 rounded-lg">
                            <p class="text-gray-600 dark:text-white text-sm inline-flex items-center gap-x-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                    Controla cada brazada 
                            </p>
                        </div>
                        <div class="mt-4 bg-gray-100 dark:bg-dark-extralight px-4 py-3 rounded-lg">
                            <p class="text-gray-600 dark:text-white text-sm inline-flex items-center gap-x-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                    Coordinación perfecta 
                            </p>
                        </div>
                    </div>
                    <div class="mt-6 mb-3">
                        <div class="flex items-center justify-between">
                            <p class="dark:text-gray-400 tracking-widest text-xs font-semibold"> PROGRESO </p>
                            <p class="text-xl font-extrabold text-blue-500"> 100% </p>
                        </div>
                        <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-extralight overflow-hidden">
                            <div class="h-full w-[100%] rounded-full bg-blue-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Levels -->

    </section>
</template>
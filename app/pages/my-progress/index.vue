<script setup lang="ts">
    import Seal from '~/assets/media/seal.png'
    import Shark from '~/assets/media/shark.png'
</script>

<template>
    <section>
        
        <section>
            <h2 class="dark:text-white font-extrabold text-xl"> Mi progreso </h2>
        </section>

        <section class="mt-6 space-y-3">
            <section class="mt-3 md:flex justify-center">
                <div class="flex gap-x-4 overflow-x-auto">
                    <button class="bg-gray-300 dark:bg-dark-extralight text-gray-500 dark:text-gray-400 rounded-full px-3 py-1 cursor-pointer hover:opacity-75 text-lg md:text-xl"> 
                        Bebé 
                    </button>
                    <button class="bg-blue-500 text-white font-bold rounded-full px-3 py-1 cursor-pointer hover:opacity-75 text-lg md:text-xl">
                        Niños
                    </button>
                    <button class="bg-gray-300 dark:bg-dark-extralight text-gray-500 dark:text-gray-400 rounded-full px-3 py-1 cursor-pointer hover:opacity-75 text-lg md:text-xl"> 
                        Adolescentes 
                    </button>
                    <button class="bg-gray-300 dark:bg-dark-extralight text-gray-500 dark:text-gray-400 rounded-full px-3 py-1 cursor-pointer hover:opacity-75 text-lg md:text-xl"> 
                        Adultos 
                    </button>
                </div>
            </section>
        </section>

        <section>
            <div class="flex items-center justify-center min-h-80 p-6">
                <div class="relative size-70 flex items-center justify-center">
                    
                    <svg class="absolute inset-0 size-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke-width="11"
                            class="stroke-gray-300 dark:stroke-dark-extralight"/>
                        <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="transparent"
                            stroke-width="10"
                            stroke-dasharray="35.8 238.76"
                            stroke-dashoffset="-202.9"
                            stroke-linecap="round"
                            class="stroke-green-500"
                        />
                    </svg>

                    <div class="relative flex flex-col items-center justify-center text-center mt-2">
                        <div class="mb-1">
                            <img
                                :src="Seal"
                                alt="Avatar de Usuario"
                                class="size-20 rounded-full object-cover drop-shadow drop-shadow-cyan-500"/>
                        </div>
                    
                        <span class="text-2xl font-extrabold text-green-500 leading-none tracking-tighter"> 60% </span>
                        <span class="text-xs font-semibold text-green-500 uppercase tracking-widest mt-2"> Completado </span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div>
                <h6 class="text-pink-400 mb-2 font-semibold"> Nivel actual </h6>
                <div class="bg-white dark:bg-dark-light rounded-xl p-4 space-y-2 shadow dark:shadow-none">
                    <h4 class="text-lg font-extrabold text-gray-700 dark:text-white"> 
                        Estrella de Mar 
                    </h4>
                    <p class="dark:text-gray-400/90">
                        Tu coordinación mejora y comienzas a nadar distancias más largas.
                    </p>
                    <div class="mt-2">
                        <span class="text-gray-500 dark:text-gray-300 text-sm"> Habilidades completadas: <span class="font-bold text-emerald-500"> 2 de 3 </span> </span>
                    </div>
                    <div class="mt-2">
                        <span class="inline-flex items-center gap-x-3 text-cyan-500 font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
                                Próximo nivel: Barracuda
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="my-6">
            <div class="space-y-3">
                <h6 class="text-pink-400 mb-2 font-semibold"> Niveles disponibles </h6>
                <div class="bg-white dark:bg-dark-light rounded-xl p-3 shadow dark:shadow-none">
                    <div class="flex justify-between items-start md:items-center border-b border-gray-200 dark:border-dark-extralight">
                        <div class="flex justify-between items-center gap-x-3 mb-2">
                            <div class="bg-gray-200 dark:bg-dark-extralight text-gray-500 dark:text-gray-400 rounded-xl p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-icon lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
                            </div>
                            <span class="text-base md:text-xl text-gray-600 dark:text-white font-extrabold"> 
                                Nivel: Caballito de Mar 
                                    <span class="block text-sm text-green-500"> Completado </span>
                            </span>
                        </div>
                        <button class="dark:text-gray-300 cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                    </div>
                    <div class="mt-3 space-y-3 py-3">
                        <div>
                            <p class="text-base font-normal text-gray-600 dark:text-gray-400"> Aprendes técnica básica mientras ganas confianza y resistencia. </p>
                        </div>
                        <div class="space-y-2">
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-700 dark:text-gray-300 inline-flex items-center gap-x-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                            Patada técnica de crol 
                                    </span>
                                    <span class="text-blue-500 font-extrabold"> 100% </span>
                                </div>
                                <div class="w-full dark:bg-dark-extralight p-1 rounded-full">
                                    <div class="p-2 bg-blue-500 rounded-full" style="width: 100%;"></div>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-700 dark:text-gray-300 inline-flex items-center gap-x-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                            Respiración lateral básica  
                                    </span>
                                    <span class="text-blue-500 font-extrabold"> 100% </span>
                                </div>
                                <div class="w-full dark:bg-dark-extralight p-1 rounded-full">
                                    <div class="p-2 bg-blue-500 rounded-full" style="width: 100%;"></div>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-700 dark:text-gray-300 inline-flex items-center gap-x-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                            Flotación sin asistencia
                                    </span> 
                                    <span class="text-blue-500 font-extrabold"> 100% </span>
                                </div>
                                <div class="w-full dark:bg-dark-extralight p-1 rounded-full">
                                    <div class="p-2 bg-blue-500 rounded-full" style="width: 100%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-dark-light opacity-75 rounded-xl p-3 shadow dark:shadow-none">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-between items-center gap-x-3">
                            <div class="bg-gray-200 dark:bg-dark-extralight text-gray-500 dark:text-gray-400 rounded-xl p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-icon lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
                            </div>
                            <span class="text-base md:text-xl text-gray-500 dark:text-white font-extrabold"> 
                                Nivel: Delfín 
                                    <span class="block text-sm text-gray-500"> Bloqueado </span>
                            </span>
                        </div>
                        <button class="text-gray-500 dark:text-gray-300 cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        
    </section>
</template>
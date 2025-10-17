<script setup lang="ts">

    import { useModalManager } from '#imports';

    const { open, close, isOpen } = useModalManager()

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg mt-6">
        <div class="p-5 flex justify-between items-center">
            <h4 class="text-xl dark:text-white"> Horario de Jhon W <span class="block text-base text-gray-600 dark:text-gray-400"> Días, horario de entrada y salida </span> </h4>
            <button
                @click="open('EditUserSchedule')"
                class="bg-indigo-500 text-white px-4 py-2 rounded cursor-pointer hover:opacity-75">
                    Editar horario
            </button>
        </div>
        <div class="px-5 pb-5">
            <div class="flex justify-between md:justify-center items-start">
                <h4 class="text-black dark:text-gray-400 text-base font-light"> 
                    Esta semana
                </h4>
            </div>
            <div 
                class="flex overflow-x-auto md:justify-center md:items-center gap-x-6 mt-4">
                    <div class="bg-blue-500 px-3 py-4 rounded-4xl overflow-hidden flex-shrink-0">
                        <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                            L <span class="text-2xl font-bold"> 22 </span>
                        </h2>
                    </div>
                    <div class="bg-gray-300/70 dark:bg-dark-extralight px-3 py-4 rounded-4xl overflow-hidden flex-shrink-0">
                        <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                            M <span class="text-2xl font-bold"> 23 </span>
                        </h2>
                    </div>
                    <div class="bg-blue-500 px-3 py-4 rounded-4xl overflow-hidden flex-shrink-0">
                        <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                            M <span class="text-2xl font-bold"> 24 </span>
                        </h2>
                    </div>
                    <div class="bg-gray-300/70 dark:bg-dark-extralight px-3 py-4 rounded-4xl overflow-hidden flex-shrink-0">
                        <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                            J <span class="text-2xl font-bold"> 25 </span>
                        </h2>
                    </div>
                    <div class="bg-blue-500 px-3 py-4 rounded-4xl overflow-hidden flex-shrink-0">
                        <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                            V <span class="text-2xl font-bold"> 26 </span>
                        </h2>
                    </div>
                    <div class="bg-gray-300/70 dark:bg-dark-extralight px-3 py-4 rounded-4xl overflow-hidden flex-shrink-0">
                        <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                            S <span class="text-2xl font-bold"> 27 </span>
                        </h2>
                    </div>
                    <div class="bg-gray-300/70 dark:bg-dark-extralight px-3 py-4 rounded-4xl overflow-hidden flex-shrink-0">
                        <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                            D <span class="text-2xl font-bold"> 28 </span>
                        </h2>
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
        <div class="flex justify-between items-center">
            <h4 class="text-gray-900 dark:text-gray-300 text-lg font-bold">
                Usuarios
            </h4>
        </div>
        <div class="mt-3">
            <div class="flex justify-between items-center gap-x-4">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-blue-500 p-1 w-4 h-4 rounded-full"></span>
                    <span class="text-gray-600 dark:text-gray-300"> Administradores </span>
                </div>
                <span class="text-lg font-extrabold dark:text-gray-200"> 10% </span>
            </div>
            <div class="flex justify-between items-center gap-x-4">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-purple-500 p-1 w-4 h-4 rounded-full"></span>
                    <span class="text-gray-600 dark:text-gray-300"> Profesores </span>
                </div>
                <span class="text-lg font-extrabold dark:text-gray-200"> 30% </span>
            </div>
            <div class="flex justify-between items-center gap-x-4">
                <div class="flex justify-start items-center gap-x-4">
                    <span class="bg-emerald-500 p-1 w-4 h-4 rounded-full"></span>
                    <span class="text-gray-600 dark:text-gray-300"> Alumnos </span>
                </div>
                <span class="text-lg font-extrabold dark:text-gray-200"> 60% </span>
            </div>
        </div>
        <div>
            <div class="flex flex-col items-center justify-center p-1">
                <div class="relative size-40">
                    <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke-width="14"
                            class="stroke-slate-200"/>

                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke-width="14"
                            stroke-dasharray="113.1 251.32"
                            stroke-linecap="round"
                            class="stroke-emerald-500 transition-all duration-500"/>

                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke-width="14"
                            stroke-dasharray="75.4 251.32"
                            stroke-dashoffset="-113.1"
                            stroke-linecap="round"
                            class="stroke-purple-500 transition-all duration-500"/>

                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke-width="14"
                            stroke-dasharray="62.8 251.32"
                            stroke-dashoffset="-188.5"
                            stroke-linecap="round"
                            class="stroke-blue-500 transition-all duration-500"/>
                    </svg>

                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                        <span class="text-4xl text-black dark:text-white font-extrabold"> 100% </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <span class="text-gray-600 dark:text-gray-400 font-semibold"> Total: 5 usuarios </span>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
        <div class="flex justify-between items-center mb-8">
            <h4 class="text-gray-900 dark:text-gray-300 text-lg font-bold">
                Tipo de ingresos
            </h4>
        </div>
        <div class="space-y-2">
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-gray-600 dark:text-white"> Visita </span>
                    <span class="dark:text-white font-extrabold"> 25% </span>
                </div>
                <div class="bg-gray-200 dark:bg-dark-extralight w-full h-8 rounded-4xl flex justify-between items-center">
                    <div class="bg-blue-500 w-[25%] h-full rounded-full"></div>
                </div>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-gray-600 dark:text-white"> Mensual </span>
                    <span class="dark:text-white font-extrabold"> 40% </span>
                </div>
                <div class="bg-gray-200 dark:bg-dark-extralight w-full h-8 rounded-4xl flex justify-between items-center">
                    <div class="bg-lime-500 w-[40%] h-full rounded-full"></div>
                </div>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-gray-600 dark:text-white"> Anual </span>
                    <span class="dark:text-white font-extrabold"> 20% </span>
                </div>
                <div class="bg-gray-200 dark:bg-dark-extralight w-full h-8 rounded-4xl flex justify-between items-center">
                    <div class="bg-blue-500 w-[20%] h-full rounded-full"></div>
                </div>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-gray-600 dark:text-white"> Familiar </span>
                    <span class="dark:text-white font-extrabold"> 15% </span>
                </div>
                <div class="bg-gray-200 dark:bg-dark-extralight w-full h-8 rounded-4xl flex justify-between items-center">
                    <div class="bg-pink-500 w-[15%] h-full rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>
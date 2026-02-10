<script setup lang="ts">

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
        <div class="flex justify-between items-center mb-8">
            <h4 class="text-gray-900 dark:text-gray-300 text-lg font-bold">
                Asistencias
            </h4>
            <select 
                name="attendance_period" 
                id="attendance_period"
                class="bg-gray-100 dark:bg-dark-extralight rounded-4xl px-2 md:px-4 py-1 text-blue-500 focus:outline-none font-bold">
                    <option value="febrero_2026" selected> Febrero 2026 </option>
                    <option value="enero_2026"> Enero 2026 </option>
                    <option value="diciembre_2025"> Diciembre 2025 </option>
            </select>
        </div>
        <div class="space-y-4">
            <div class="flex justify-between items-start border-b border-dashed border-gray-300 dark:border-gray-400 space-y-3">
                <div class="flex justify-between items-center gap-x-3"> 
                    <span class="h-4 w-4 rounded-full bg-lime-500"></span>
                    <span class="text-gray-600 dark:text-gray-400"> Asistió </span>
                </div>
                <span class="bg-gray-100 dark:bg-dark-extralight rounded-lg text-lime-500 font-extrabold px-4">
                    25 alumnos
                </span>
            </div>
            <div class="flex justify-between items-start border-b border-dashed border-gray-300 dark:border-gray-400 space-y-3">
                <div class="flex justify-between items-center gap-x-3"> 
                    <span class="h-4 w-4 rounded-full bg-pink-500"></span>
                    <span class="text-gray-600 dark:text-gray-400"> No asistió </span>
                </div>
                <span class="bg-gray-100 dark:bg-dark-extralight rounded-lg text-pink-500 font-extrabold px-4">
                    4 alumnos
                </span>
            </div>
            <div class="flex justify-between items-start border-b border-dashed border-gray-300 dark:border-gray-400 space-y-3">
                <div class="flex justify-between items-center gap-x-3"> 
                    <span class="h-4 w-4 rounded-full bg-red-500"></span>
                    <span class="text-gray-600 dark:text-gray-400"> Retardo </span>
                </div>
                <span class="bg-gray-100 dark:bg-dark-extralight rounded-lg text-red-500 font-extrabold px-4">
                    6 alumnos
                </span>
            </div>
            <div class="flex justify-between items-start space-y-3">
                <div class="flex justify-between items-center gap-x-3"> 
                    <span class="h-4 w-4 rounded-full bg-orange-500"></span>
                    <span class="text-gray-600 dark:text-gray-400"> Falta justificada </span>
                </div>
                <span class="bg-gray-100 dark:bg-dark-extralight rounded-lg text-orange-500 font-extrabold px-4">
                    2 alumnos
                </span>
            </div>
        </div>
    </div>
</template>
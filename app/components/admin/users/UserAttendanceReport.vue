<script setup lang="ts">
    import { currentMonthsOfYear } from '#imports';

    const currentYear = new Date().getFullYear();

</script>

<template>
    <div class="bg-white dark:bg-dark-light rounded-2xl p-4 h-70">
        <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight">
            <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg"> Historial por mes </h4>
            <span class="text-blue-500 font-bold text-sm md:text-lg"> {{ currentYear }} </span>
        </div>
        <div class="space-y-2 mt-3">
            <div
                v-for="month in currentMonthsOfYear()"
                :key="month.id"
                class="flex justify-between items-center  bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-xl">
                    <p class="text-gray-500 dark:text-white text-base md:text-xl font-bold"> 
                        {{ month.month }}
                    </p>
                    <button class="bg-gray-300 dark:bg-dark-soft text-blue-500 rounded-full p-1.5 cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                    </button>
            </div>
        </div>
    </div>
</template>
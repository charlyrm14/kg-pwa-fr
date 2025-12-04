<script setup lang="ts">

</script>

<template>
    <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg shadow">
        <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft">
            <p class="dark:text-white text-lg font-light mb-2"> Jueves 25 </p>
            <div class="p-1 rounded-full bg-gray-300 dark:bg-dark-extralight mb-2">
                <div class="p-3 rounded-full bg-gray-400 dark:bg-dark-soft"></div>
            </div>
        </div>
        <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft mt-3">
            <p class="dark:text-white text-lg font-light mb-2"> Miércoles 23 </p>
            <div class="p-1 rounded-full bg-gray-300 dark:bg-dark-extralight mb-2">
                <div class="p-3 rounded-full bg-red-500"></div>
            </div>
        </div>
        <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft mt-3">
            <p class="dark:text-white text-lg font-light mb-2"> Martes 24 </p>
            <div class="p-1 rounded-full bg-gray-300 dark:bg-dark-extralight mb-2">
                <div class="p-3 rounded-full bg-gray-400 dark:bg-dark-soft"></div>
            </div>
        </div>
        <div class="flex justify-between items-center mt-3">
            <p class="dark:text-white text-lg font-light mb-2"> Lunes 25 </p>
            <div class="p-1 rounded-full bg-gray-300 dark:bg-dark-extralight mb-2">
                <div class="p-3 rounded-full bg-lime-500"></div>
            </div>
        </div>
        <div class="mt-4 flex justify-center items-center">
            <p class="text-blue-500 inline-flex items-center gap-x-2 cursor-pointer hover:opacity-75"> 
                Cargar días anteriores 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                    </span> 
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>
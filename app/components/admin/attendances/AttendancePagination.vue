<script setup lang="ts">

</script>

<template>
    <div class="flex justify-between items-center mt-12 flex-wrap gap-4">
        <div>
            <select 
                name="paginate" 
                id="paginate"
                class="border border-gray-100 bg-gray-100 px-2 py-1 rounded-lg text-gray-500 dark:border-none dark:bg-dark-extralight dark:text-gray-400">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
            </select>
        </div>
        <div class="flex justify-between items-center gap-x-2 sm:gap-x-4">
            <button
                class="p-1 rounded-lg cursor-pointer bg-gray-100 text-gray-500 hover:opacity-75 dark:bg-dark-extralight dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button
                class="bg-blue-500 text-white px-2.5 py-0.5 rounded-lg cursor-pointer hover:opacity-75">
                    1
            </button>
            <button
                class="text-gray-500 cursor-pointer hover:opacity-75 dark:text-gray-400">
                    2
            </button>
            <button
                class="text-gray-500 cursor-pointer hover:opacity-75 dark:text-gray-400">
                    3
            </button>
            <button
                class="text-gray-500 cursor-pointer hover:opacity-75 dark:text-gray-400">
                    4
            </button>
            <button
                class="p-1 rounded-lg cursor-pointer bg-gray-100 text-gray-500 hover:opacity-75 dark:bg-dark-extralight dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>
        </div>
    </div>
</template>

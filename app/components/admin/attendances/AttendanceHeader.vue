<script setup lang="ts">
    import { useModalManager } from '#imports';

    const { open } = useModalManager()
</script>

<template>
    <div class="flex justify-between items-center flex-wrap gap-4 p-4">
        <div class="relative w-full sm:w-auto">
            <input 
                type="search" 
                id="search"
                name="search"
                placeholder="Search users" 
                class="w-full sm:w-auto bg-gray-200 border border-gray-100 px-10 py-2 rounded-4xl text-gray-600 focus:outline-none dark:bg-dark-extralight dark:border-none dark:text-gray-400">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="lucide lucide-search-icon lucide-search absolute top-2 left-2 text-gray-400 dark:text-gray-500">
                    <path d="m21 21-4.34-4.34"/>
                    <circle cx="11" cy="11" r="8"/>
                </svg>
        </div>
        
        <div class="flex flex-wrap gap-2 sm:space-x-4 w-full md:w-auto">
            <button
                @click="open('SearchUserAttendanceModal')"
                class="inline-flex justify-center items-center gap-x-2 bg-gray-300 dark:bg-dark-extralight text-gray-600 dark:text-white font-semibold px-4 py-2 rounded-4xl cursor-pointer hover:opacity-75 w-full md:w-auto"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-sync-icon lucide-calendar-sync"><path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5"/><path d="M16 2v4"/><path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"/><path d="M3 10h4"/><path d="M8 2v4"/></svg>
                        Asignar asistencia por fecha
            </button>
        </div>
    </div>
</template>
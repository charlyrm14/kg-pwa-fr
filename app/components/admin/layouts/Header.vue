<script setup lang="ts">

</script>

<template>
    <header class="bg-dark shadow-md/5 sticky top-0 z-20 h-16 flex items-center px-4">
        <div class="flex items-center justify-between w-full">
            
            <button id="menu-toggle" class="md:hidden text-gray-500 dark:text-white hover:text-gray-700 p-2 rounded-full transition mr-3">
                <svg class="icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            </button>
            
            <a href="#" class="flex items-center space-x-2">
                <div class="w-10 h-10 rounded-lg bg-pink-600 text-white flex items-center justify-center font-bold text-xl"> KG </div>
                <span class="text-lg font-semibold text-white"> Dashboard </span>
            </a>

            <nav class="flex items-center space-x-4 ml-auto">
                <NuxtLink 
                    to="/"
                    class="bg-dark-soft text-white py-2 px-4 rounded-lg transition inline-flex gap-x-2 cursor-pointer hover:opacity-75">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="lucide lucide-layout-grid-icon lucide-layout-grid">
                                <rect width="7" height="7" x="3" y="3" rx="1"/>
                                <rect width="7" height="7" x="14" y="3" rx="1"/>
                                <rect width="7" height="7" x="14" y="14" rx="1"/>
                                <rect width="7" height="7" x="3" y="14" rx="1"/>
                        </svg> App
                </NuxtLink>

                <button class="text-white p-2 rounded-full transition relative">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    <span class="absolute top-2 right-2 block w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>

                <div class="flex items-center space-x-3 cursor-pointer p-1 rounded-full transition">
                    <span class="text-sm font-medium text-white hidden sm:inline"> Jhon W </span>
                </div>

            </nav>
        </div>
    </header>
</template>
<script setup lang="ts">

</script>

<template>
    <header class="bg-white dark:bg-dark dark:text-white p-3 fixed top-0 left-0 w-full z-10 border-b border-gray-200 dark:border-dark-soft">
        <nav class="container mx-auto flex justify-between items-center">
            <div class="text-xl font-bold">
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
                    class="lucide lucide-menu-icon lucide-menu cursor-pointer hover:opacity-75">
                        <path d="M4 5h16"/><path d="M4 12h16"/>
                        <path d="M4 19h16"/>
                </svg>
            </div>
            <ul class="flex space-x-4">
                <li>
                    <button class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
                    </button>
                </li>
                <li>
                    <button class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>


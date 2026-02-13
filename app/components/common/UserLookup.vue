<script setup lang="ts">

</script>

<template>
    <div class="space-y-3 mb-3 bg-gray-200 dark:bg-dark-soft p-2 rounded-xl">
        <p class="text-gray-500 dark:text-gray-400 font-bold"> Buscar por correo electrónico </p>
        <div class="grid grid-cols-[1fr_auto] gap-2 mt-2">
            <input 
                type="email"
                name="email"
                placeholder="Ej: correo@correo.com"
                class="w-full rounded-xl bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight dark:text-gray-400 text-base md:text-sm focus:outline-none focus:ring-none p-3">
            <button 
                type="submit" 
                class="bg-pink-500 text-white rounded-xl p-3 sm:px-4 flex items-center justify-center cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m21 21-4.34-4.34"/>
                        <circle cx="11" cy="11" r="8"/>
                    </svg>
            </button>
        </div>
        <div>
            <p class="text-blue-500 font-bold text-sm mb-2"> Resultados de tu busqueda </p>
            <div class="bg-gray-100 dark:bg-dark-light border border-gray-200 dark:border-dark-light rounded-xl flex justify-between items-start p-2">
                <div class="flex justify-between items-center gap-x-2">
                    <div class="bg-gray-200 dark:bg-dark-extralight rounded-xl p-2 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <p class="font-bold dark:text-white"> 
                        Carlos I. 
                            <span class="block text-sm text-gray-500 dark:text-gray-300 font-normal"> c.iramosm90@gmail.com </span>
                    </p>
                </div>
                <button class="text-gray-500 cursor-pointer hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
        </div>
    </div>
</template>
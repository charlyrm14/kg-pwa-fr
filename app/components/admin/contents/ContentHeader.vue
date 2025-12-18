<script setup lang="ts">
    import { useModalManager } from '#imports';

    const { open } = useModalManager()

    const showFilterContent = ref<boolean>(false)

</script>

<template>
    <div class="flex justify-between items-center flex-wrap gap-4 p-4">
        <div class="relative w-full sm:w-auto">
            <input 
                type="search" 
                id="search"
                name="search"
                placeholder="Search contents" 
                class="w-full sm:w-auto bg-gray-100 border border-gray-100 px-10 py-2 rounded-lg text-gray-600 focus:outline-none dark:bg-dark-extralight dark:border-none dark:text-gray-400">
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
        
        <div class="flex flex-wrap gap-2 sm:space-x-4">
            <div class="relative">
                <button
                    @click="showFilterContent = !showFilterContent"
                    class="inline-flex items-center gap-x-2  px-4 py-2 rounded-lg cursor-pointer"
                    :class="showFilterContent ? 'bg-pink-500 text-white' : 'bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-400 cursor-pointer hover:opacity-75'">
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
                            class="lucide lucide-funnel-icon lucide-funnel">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>
                        </svg> Filtrar
                </button>
                <div 
                    v-if="showFilterContent"
                    class="absolute -bottom-90 md:-left-54 bg-white dark:bg-dark-extralight border border-gray-100 dark:border-dark-soft rounded-xl w-80 shadow z-50">
                        <div class="border-b border-gray-100 dark:border-dark-soft p-4">
                            <p class="dark:text-gray-400"> Opciones de filtro </p>
                        </div>
                        <div class="p-4 m-1">
                            <p class="dark:text-gray-400 font-bold mb-3"> Tipo de contenido: </p>

                            <label for="admin" class="flex items-center px-3 py-1 rounded-lg cursor-pointer transition-colors font-light">
                                <input 
                                    type="radio" 
                                    id="admin" 
                                    name="rol" 
                                    value="admin" 
                                    class="h-5 w-5 text-indigo-500 focus:ring-indigo-500 ">
                                <span class="ml-3 text-base font-medium text-gray-700 dark:text-gray-300"> Noticias </span>
                            </label>

                            <label for="teacher" class="flex items-center px-3 py-1 rounded-lg cursor-pointer transition-colors font-light">
                                <input 
                                    type="radio" 
                                    id="teacher" 
                                    name="rol" 
                                    value="teacher" 
                                    checked 
                                    class="h-5 w-5 text-indigo-500 focus:ring-indigo-500">
                                <span class="ml-3 text-base font-medium text-gray-700 dark:text-gray-300"> Eventos </span>
                            </label>

                            <label for="student" class="flex items-center px-3 py-1 rounded-lg cursor-pointer transition-colors font-light">
                                <input 
                                    type="radio" 
                                    id="student" 
                                    name="rol" 
                                    value="student" 
                                    class="h-5 w-5 text-indigo-500 focus:ring-indigo-500">
                                <span class="ml-3 text-base font-medium text-gray-700 dark:text-gray-300"> Tips </span>
                            </label>

                            <label for="student" class="flex items-center px-3 py-1 rounded-lg cursor-pointer transition-colors font-light">
                                <input 
                                    type="radio" 
                                    id="student" 
                                    name="rol" 
                                    value="student" 
                                    class="h-5 w-5 text-indigo-500 focus:ring-indigo-500">
                                <span class="ml-3 text-base font-medium text-gray-700 dark:text-gray-300"> Nutrición </span>
                            </label>

                        </div>
                        <div class="flex justify-end items-center gap-x-4 p-4">
                            <button
                                class="bg-gray-100 dark:bg-dark-soft text-gray-400 dark:text-gray-400 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75"> 
                                    Restablecer 
                            </button>
                            <button
                                class="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-75"> 
                                    Aplicar 
                            </button>
                        </div>
                </div>
            </div>
            <button
                class="inline-flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-75"
                @click="open('SelectContentTypeModal')"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus2-icon lucide-file-plus-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>
                        Agregar <span class="hidden md:block"> contenido </span> 
            </button>
        </div>
    </div>
</template>
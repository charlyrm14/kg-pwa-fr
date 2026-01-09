<script setup lang="ts">
    import { useModalManager } from '#imports';

    const { open } = useModalManager()

    const showFilterContent = ref<boolean>(false)
</script>

<template>
    <div class="flex justify-between items-center flex-wrap gap-4">
        <div class="relative w-full sm:w-auto">
            <input 
                type="search" 
                id="search"
                name="search"
                placeholder="Search users" 
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
                    class="absolute -bottom-90 md:-left-54 bg-white dark:bg-dark-extralight border border-gray-100 dark:border-dark-soft rounded-xl w-80 shadow">
                        <div class="border-b border-gray-100 dark:border-dark-soft p-4">
                            <p class="dark:text-gray-400"> Opciones de filtro </p>
                        </div>
                        <div class="p-4 m-1">
                            <p class="dark:text-gray-400 font-bold mb-3"> Tipo de usuario: </p>

                            <label for="admin" class="flex items-center p-3 rounded-lg cursor-pointer transition-colors font-light">
                                <input 
                                    type="radio" 
                                    id="admin" 
                                    name="rol" 
                                    value="admin" 
                                    class="h-5 w-5 text-indigo-500 focus:ring-indigo-500 ">
                                <span class="ml-3 text-base font-medium text-gray-700 dark:text-gray-300"> Administradores </span>
                            </label>

                            <label for="teacher" class="flex items-center p-3 rounded-lg cursor-pointer transition-colors font-light">
                                <input 
                                    type="radio" 
                                    id="teacher" 
                                    name="rol" 
                                    value="teacher" 
                                    checked 
                                    class="h-5 w-5 text-indigo-500 focus:ring-indigo-500">
                                <span class="ml-3 text-base font-medium text-gray-700 dark:text-gray-300"> Profesores </span>
                            </label>

                            <label for="student" class="flex items-center p-3 rounded-lg cursor-pointer transition-colors font-light">
                                <input 
                                    type="radio" 
                                    id="student" 
                                    name="rol" 
                                    value="student" 
                                    class="h-5 w-5 text-indigo-500 focus:ring-indigo-500">
                                <span class="ml-3 text-base font-medium text-gray-700 dark:text-gray-300"> Estudiantes </span>
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
                class="inline-flex items-center gap-x-2 bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-400 px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-500 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-down-icon lucide-file-down"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 4 0 0 0 2 2h4"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
                        Exportar
            </button>
            <button
                @click="open('CreateUserModal')"
                class="inline-flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-75"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus-icon lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                        Agregar <span class="hidden md:block"> usuario </span> 
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">

    import Breadcrumb from '~/components/common/Breadcrumb.vue';

    definePageMeta({
        layout: 'admin'
    })

    const showFilterContent = ref<boolean>(false)
    const showActionsContent = ref<boolean>(false)

</script>

<template>
    <section class="md:px-5">
        <Breadcrumb
            heading="Lista contenidos"
            primary-section="Contenidos"
            primary-link="/kg-admin/contents"
            secondary-section="Lista"/>
    </section>

    <section class="mt-6 md:px-5">
        <div class="bg-white shadow-lg rounded-lg px-6 pt-10 pb-6 dark:bg-dark-light">
            <div class="flex justify-between items-center flex-wrap gap-4">
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
                    <NuxtLink
                        to="/kg-admin/contents/create"
                        class="inline-flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-75"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus2-icon lucide-file-plus-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>
                                Agregar <span class="hidden md:block"> contenido </span> 
                    </NuxtLink>
                </div>
            </div>
            
            <div class="w-full overflow-x-auto p-4 mt-8">
                <div class="min-w-[640px]">

                    <div class="flex border-b border-gray-200 dark:border-dark-soft pb-3 mb-2 font-semibold text-sm uppercase text-gray-500 dark:text-gray-400">
                        <div class="w-2/5 flex-shrink-0 px-2"> Título </div>
                        <div class="w-1/5 flex-shrink-0 px-2"> Categoría </div>
                        <div class="w-1/5 flex-shrink-0 px-2"> Fecha </div>
                        <div class="w-1/5 flex-shrink-0 px-2"> Acciones </div>
                    </div>

                    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
                            <div class="flex items-start gap-x-4">
                                <div class="bg-gray-100 dark:bg-dark-extralight p-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-base text-blue-500 cursor-pointer"> 
                                        México suma plata ...
                                    </p>
                                    <p class="inline-flex gap-x-2 text-sm dark:text-gray-500 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-pen-icon lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
                                            Jhon Smith
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <span class="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
                                Noticias
                            </span>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="text-green-500"> Publicado <span class="block text-black dark:text-white font-bold"> 2025-10-17 </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2 relative">
                            <button
                                @click="showActionsContent = !showActionsContent"
                                class="bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 text-sm inline-flex gap-x-1">
                                    Acciones
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            stroke-width="2" 
                                            stroke-linecap="round" 
                                            stroke-linejoin="round" 
                                            class="lucide"
                                            :class="!showActionsContent ? 'lucide-chevron-down-icon lucide-chevron-down' : 'lucide-chevron-up-icon lucide-chevron-up'">
                                                <path :d="!showActionsContent ? 'm6 9 6 6 6-6' : 'm18 15-6-6-6 6'"/>
                                        </svg>
                            </button>
                            <div 
                                v-if="showActionsContent"
                                class="absolute -bottom-26 -left-9 bg-white border border-gray-200 dark:border-none dark:bg-dark-extralight rounded-lg shadow-xl w-40">
                                    <div class="px-2 py-2 ">
                                        <NuxtLink
                                            to="/kg-admin/users/edit/4f507188-2b7e-4263-9e06-dcb01ea9c0e4"
                                            class="dark:text-gray-400 text-base inline-flex items-center gap-x-2 font-light px-3 py-1 cursor-pointer hover:text-blue-500  rounded-lg w-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>
                                                    Editar
                                        </NuxtLink>
                                    </div> 
                                    <div class="px-2 py-2">
                                        <button
                                            class="dark:text-gray-400 text-base inline-flex items-center gap-x-2 font-light px-3 py-1 cursor-pointer hover:text-red-500  rounded-lg w-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                                    Eliminar
                                        </button>
                                    </div> 
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
                            <div class="flex items-start gap-x-4">
                                <div class="bg-gray-100 dark:bg-dark-extralight p-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-base truncate text-blue-500 cursor-pointer"> 
                                        México suma plata ...
                                    </p>
                                    <p class="inline-flex gap-x-2 text-sm dark:text-gray-500 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-pen-icon lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
                                            Jhon Smith
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <span class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                                Eventos
                            </span>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="text-red-500"> Despublicado <span class="block text-black dark:text-white font-bold"> 2025-10-17 </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <button
                                class="bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 text-sm inline-flex gap-x-1">
                                    Acciones
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
                            <div class="flex items-start gap-x-4">
                                <div class="bg-gray-100 dark:bg-dark-extralight p-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-base truncate text-blue-500 cursor-pointer"> 
                                        México suma plata ... 
                                    </p>
                                    <p class="inline-flex gap-x-2 text-sm dark:text-gray-500 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-pen-icon lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
                                            Jhon Smith
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <span class="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700">
                                Tips
                            </span>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="text-gray-600 dark:text-gray-500"> Borrador <span class="block text-black dark:text-white font-bold"> 2025-10-17 </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <button
                                class="bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 text-sm inline-flex gap-x-1">
                                    Acciones
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
                            <div class="flex items-start gap-x-4">
                                <div class="bg-gray-100 dark:bg-dark-extralight p-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-base truncate text-blue-500 cursor-pointer"> 
                                        México suma plata ... 
                                    </p>
                                    <p class="inline-flex gap-x-2 text-sm dark:text-gray-500 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-pen-icon lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
                                            Jhon Smith
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                Nutricion
                            </span>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="text-indigo-500"> Pendiente revisión <span class="block text-black dark:text-white font-bold"> 2025-10-17 </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <button
                                class="bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 text-sm inline-flex gap-x-1">
                                    Acciones
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

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
        </div>
    </section>
</template>
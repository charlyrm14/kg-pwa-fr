<script setup lang="ts">

    import CreateUser from '~/components/admin/users/CreateUser.vue';
    import { useModalManager } from '#imports';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import DeleteUser from '~/components/admin/users/DeleteUser.vue';
    
    definePageMeta({
        layout: 'admin'
    });

    const showFilterContent = ref<boolean>(false)
    const showActionsContent = ref<boolean>(false)

    const { open, close, isOpen } = useModalManager()

</script>

<template>

    <section class="md:px-5">
        <Breadcrumb
            heading="Lista usuarios"
            primary-section="Usuarios"
            primary-link="/kg-admin/users"
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
            
            <div class="w-full overflow-x-auto p-4 mt-8">
                <div class="min-w-[640px]">

                    <div class="flex border-b border-gray-200 dark:border-dark-soft pb-3 mb-2 font-semibold text-sm uppercase text-gray-500 dark:text-gray-400">
                        <div class="w-1/5 flex-shrink-0 px-2"> Nombre </div>
                        <div class="w-1/5 flex-shrink-0 px-2"> Correo </div>
                        <div class="w-1/5 flex-shrink-0 px-2"> Fecha creación </div>
                        <div class="w-1/5 flex-shrink-0 px-2"> Rol </div>
                        <div class="w-1/5 flex-shrink-0 px-2"> Acciones </div>
                    </div>

                    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-1/5 flex-shrink-0 px-2 font-medium">
                            <p class="dark:white font-bold text-lg"> Jhon <span class="block font-light text-sm dark:text-gray-300"> Smith </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="dark:text-gray-300"> jhons@gmail.com </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="dark:text-gray-300"> 2025-10-16 </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                Admin
                            </span>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen-icon lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>
                                                    Editar
                                        </NuxtLink>
                                    </div> 
                                    <div class="px-2 py-2">
                                        <button
                                            @click="open('DeleteUserModal')"
                                            class="dark:text-gray-400 text-base inline-flex items-center gap-x-2 font-light px-3 py-1 cursor-pointer hover:text-red-500  rounded-lg w-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                                    Eliminar
                                        </button>
                                    </div> 
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-1/5 flex-shrink-0 px-2 font-medium">
                            <p class="dark:white font-bold text-lg"> Jhon <span class="block font-light text-sm dark:text-gray-300"> Smith </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="dark:text-gray-300"> jhons@gmail.com </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="dark:text-gray-300"> 2025-10-16 </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                Admin
                            </span>
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
                        <div class="w-1/5 flex-shrink-0 px-2 font-medium">
                            <p class="dark:white font-bold text-lg"> Jhon <span class="block font-light text-sm dark:text-gray-300"> Smith </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="dark:text-gray-300"> jhons@gmail.com </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="dark:text-gray-300"> 2025-10-16 </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                Admin
                            </span>
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

    <CreateUser 
        v-if="isOpen('CreateUserModal')"
        @closeCreateUserModal="close"/>

    <DeleteUser
        v-if="isOpen('DeleteUserModal')"
        @closeDeleteUserModal="close"/>

</template>
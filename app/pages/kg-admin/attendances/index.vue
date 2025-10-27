<script setup lang="ts">
    import AssignUserAttendance from '~/components/admin/users/AssignUserAttendance.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import { useModalManager } from '#imports';
    
    definePageMeta({
        layout: 'admin'
    })

    const { open, close, isOpen } = useModalManager()

</script>

<template>
    <section class="md:px-5">
        <Breadcrumb
            heading="Asistencias hoy"
            primary-section="Asistencias"
            primary-link="/kg-admin/attendances"
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
                    <button
                        @click="open('AssignUserAttendanceModal')"
                        class="inline-flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-75"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check-icon lucide-user-check"><path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                                Seleccionar usuario
                    </button>
                </div>
            </div>

            <div class="flex justify-between items-center flex-wrap gap-4 mt-8">
                <div class="flex gap-x-3">
                    <div class="p-3 border border-gray-400 dark:border-dark-soft cursor-pointer hover:border-blue-500 rounded-lg"></div>
                    <p class="text-gray-600 dark:text-gray-400"> Seleccionar todos </p>
                </div>
            </div>

            <div class="w-full overflow-x-auto p-4 mt-6">
                <div class="min-w-[640px]">

                    <div class="flex border-b border-gray-200 dark:border-dark-soft pb-3 mb-2 font-semibold text-sm uppercase text-gray-500 dark:text-gray-400">
                        <div class="w-2/5 flex-shrink-0 px-2"> Alumno </div>
                        <div class="w-1/5 flex-shrink-0 px-2"> Fecha </div>
                        <div class="w-1/5 flex-shrink-0 px-2"> Acciones </div>
                    </div>

                    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
                            <div class="flex items-start gap-x-4">
                                <div>
                                    <div class="p-3 border border-gray-400 dark:border-dark-soft cursor-pointer hover:border-blue-500 rounded-lg"></div>
                                </div>
                                <div>
                                    <p class="font-bold text-base text-blue-500 cursor-pointer"> 
                                        Jhon W <span class="block text-sm font-light dark:text-gray-400 text-gray-600"> correo@correo.com </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="text-green-500"> Hoy <span class="block text-gray-600 dark:text-white font-bold"> 2025-10-27 </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2 relative">
                            <div class="inline-flex items-center gap-x-3">
                                <button class="bg-gray-100 dark:bg-dark-extralight border border-gray-200 dark:border-dark-extralight rounded-lg px-4 py-1 cursor-pointer hover:bg-red-500 hover:text-white">
                                    No asistio
                                </button>
                                <button class="bg-gray-100 dark:bg-dark-extralight border border-green-500  rounded-lg px-4 py-1 cursor-pointer hover:bg-green-500 hover:text-white">
                                    Asistio
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
                            <div class="flex items-start gap-x-4">
                                <div>
                                    <div class="p-3 border border-gray-400 dark:border-dark-soft cursor-pointer hover:border-blue-500 rounded-lg"></div>
                                </div>
                                <div>
                                    <p class="font-bold text-base text-blue-500 cursor-pointer"> 
                                        Jhon W <span class="block text-sm font-light dark:text-gray-400 text-gray-600"> correo@correo.com </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="text-green-500"> Hoy <span class="block text-gray-600 dark:text-white font-bold"> 2025-10-27 </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2 relative">
                            <div class="inline-flex items-center gap-x-3">
                                <button class="bg-gray-100 dark:bg-dark-extralight border border-gray-200 dark:border-dark-extralight rounded-lg px-4 py-1 cursor-pointer hover:bg-red-500 hover:text-white">
                                    No asistio
                                </button>
                                <button class="bg-gray-100 dark:bg-dark-extralight border border-green-500  rounded-lg px-4 py-1 cursor-pointer hover:bg-green-500 hover:text-white">
                                    Asistio
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
                            <div class="flex items-start gap-x-4">
                                <div>
                                    <div class="p-3 border border-gray-400 dark:border-dark-soft cursor-pointer hover:border-blue-500 rounded-lg"></div>
                                </div>
                                <div>
                                    <p class="font-bold text-base text-blue-500 cursor-pointer"> 
                                        Jhon W <span class="block text-sm font-light dark:text-gray-400 text-gray-600"> correo@correo.com </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="text-green-500"> Hoy <span class="block text-gray-600 dark:text-white font-bold"> 2025-10-27 </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2 relative">
                            <div class="inline-flex items-center gap-x-3">
                                <button class="bg-gray-100 dark:bg-dark-extralight border border-gray-200 dark:border-dark-extralight rounded-lg px-4 py-1 cursor-pointer hover:bg-red-500 hover:text-white">
                                    No asistio
                                </button>
                                <button class="bg-gray-100 dark:bg-dark-extralight border border-green-500  rounded-lg px-4 py-1 cursor-pointer hover:bg-green-500 hover:text-white">
                                    Asistio
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
                            <div class="flex items-start gap-x-4">
                                <div>
                                    <div class="p-3 border border-gray-400 dark:border-dark-soft cursor-pointer hover:border-blue-500 rounded-lg"></div>
                                </div>
                                <div>
                                    <p class="font-bold text-base text-blue-500 cursor-pointer"> 
                                        Jhon W <span class="block text-sm font-light dark:text-gray-400 text-gray-600"> correo@correo.com </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2">
                            <p class="text-green-500"> Hoy <span class="block text-gray-600 dark:text-white font-bold"> 2025-10-27 </span> </p>
                        </div>
                        <div class="w-1/5 flex-shrink-0 px-2 relative">
                            <div class="inline-flex items-center gap-x-3">
                                <button class="bg-gray-100 dark:bg-dark-extralight border border-gray-200 dark:border-dark-extralight rounded-lg px-4 py-1 cursor-pointer hover:bg-red-500 hover:text-white">
                                    No asistio
                                </button>
                                <button class="bg-gray-100 dark:bg-dark-extralight border border-green-500  rounded-lg px-4 py-1 cursor-pointer hover:bg-green-500 hover:text-white">
                                    Asistio
                                </button>
                            </div>
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

    <AssignUserAttendance
        v-if="isOpen('AssignUserAttendanceModal')"
        @closeAssignUserAttendanceModal="close"/>

</template>

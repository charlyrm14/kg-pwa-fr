<script setup lang="ts">

    definePageMeta({
        layout: 'admin'
    })

</script>

<template>
    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
            <div class="flex justify-between items-center">
                <h4 class="text-gray-600 dark:text-gray-200">
                    Estudiantes nuevos
                </h4>
                <button class="text-gray-600 dark:text-gray-400 cursor-pointer hover:opacity-55">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
            </div>
            <div class="mt-6 space-y-4">
                <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-soft">
                    <div class="flex justify-between items-start gap-x-4 mb-5">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                    <button class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex justify-between items-start gap-x-4">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                    <button class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
            <div class="mt-8">
                <button class="bg-blue-500 text-white  w-full py-3 rounded-lg inline-flex justify-center items-center cursor-pointer hover:opacity-75"> 
                    Ver todos 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </div>
        </div>
        <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
            <div class="flex justify-between items-center">
                <h4 class="text-gray-600 dark:text-gray-200">
                    Estudiantes destacados
                </h4>
                <button class="text-gray-600 dark:text-gray-400 cursor-pointer hover:opacity-55">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
            </div>
            <div class="mt-6 space-y-4">
                <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-soft">
                    <div class="flex justify-between items-start gap-x-4 mb-5">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                    <button class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex justify-between items-start gap-x-4">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                    <button class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
            <div class="mt-8">
                <button class="bg-blue-500 text-white  w-full py-3 rounded-lg inline-flex justify-center items-center cursor-pointer hover:opacity-75"> 
                    Ver todos 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </div>
        </div>
        <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
            <div class="flex justify-between items-center">
                <h4 class="text-gray-600 dark:text-gray-200">
                    Estudiantes con pagos pendientes
                </h4>
                <button class="text-gray-600 dark:text-gray-400 cursor-pointer hover:opacity-55">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
            </div>
            <div class="mt-6 space-y-4">
                <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-soft">
                    <div class="flex justify-between items-start gap-x-4 mb-5">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                    <button class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex justify-between items-start gap-x-4">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                    <button class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
            <div class="mt-8">
                <button class="bg-blue-500 text-white  w-full py-3 rounded-lg inline-flex justify-center items-center cursor-pointer hover:opacity-75"> 
                    Ver todos 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </div>
        </div>
    </section>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
            <div class="flex justify-between items-center">
                <h4 class="text-gray-600 dark:text-gray-200">
                    Ingresos
                </h4>
                <button class="text-gray-600 dark:text-gray-400 cursor-pointer hover:opacity-55">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
            </div>
            <div class="mt-6 space-y-4">
                <div class="flex justify-end items-center gap-x-4">
                    <button class="text-blue-500 text-lg font-bold border-b-2 cursor-pointer hover:opacity-75">
                        Hoy
                    </button>
                    <button class="text-gray-500 dark:text-gray-400 text-lg font-light cursor-pointer hover:opacity-75">
                        Semanal
                    </button>
                    <button class="text-gray-500 dark:text-gray-400 text-lg font-light cursor-pointer hover:opacity-75">
                        Mensual
                    </button>
                </div>
            </div>
            <div class="space-y-4 mt-6">
                <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-soft">
                    <div class="flex justify-between items-start gap-x-4 mb-5">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                </div>
                <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-soft">
                    <div class="flex justify-between items-start gap-x-4 mb-5">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                </div>
                <div class="flex justify-between items-start">
                    <div class="flex justify-between items-start gap-x-4 mb-5">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
            <div class="flex justify-between items-center">
                <h4 class="text-gray-600 dark:text-gray-200">
                    Asistencias
                </h4>
                <button class="text-gray-600 dark:text-gray-400 cursor-pointer hover:opacity-55">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
            </div>
            <div class="mt-6 space-y-4">
                <div class="flex justify-end items-center gap-x-4">
                    <button class="text-blue-500 text-lg font-bold border-b-2 cursor-pointer hover:opacity-75">
                        Hoy
                    </button>
                    <button class="text-gray-500 dark:text-gray-400 text-lg font-light cursor-pointer hover:opacity-75">
                        Semanal
                    </button>
                    <button class="text-gray-500 dark:text-gray-400 text-lg font-light cursor-pointer hover:opacity-75">
                        Mensual
                    </button>
                </div>
            </div>
            <div class="space-y-4 mt-6">
                <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-soft">
                    <div class="flex justify-between items-start gap-x-4 mb-5">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                </div>
                <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-soft">
                    <div class="flex justify-between items-start gap-x-4 mb-5">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                </div>
                <div class="flex justify-between items-start">
                    <div class="flex justify-between items-start gap-x-4 mb-5">
                        <div class="bg-gray-100 dark:bg-dark-soft text-gray-600 dark:text-gray-300 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <p class="dark:text-gray-300"> 
                            Sara D. <span class="block text-sm font-light dark:text-gray-400"> sarad@gmail.com </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

    const contentTab = ref<number>(1)

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg mt-6">
        <div class="px-5 pt-5 flex justify-between items-center">
            <h4 class="text-xl dark:text-white"> Asistencias Jhon W <span class="block text-base text-gray-600 dark:text-gray-400"> Historial de asistencias </span> </h4>
        </div>
        <div class="p-5">
            <div class="bg-gray-200/60 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-1 rounded-lg flex justify-center items-center">
                <button
                    @click="contentTab = 1"
                    class="dark:text-white w-full cursor-pointer hover:opacity-75"
                    :class="contentTab === 1 ? 'bg-white dark:bg-dark-extralight px-4 py-2 rounded-lg font-bold' : ''">
                        Mes actual
                </button>
                <button
                    @click="contentTab = 2"
                    class="dark:text-white w-full cursor-pointer hover:opacity-75"
                    :class="contentTab === 2 ? 'bg-white dark:bg-dark-extralight px-4 py-2 rounded-lg font-bold': 'font-light'">
                        Otros meses
                </button>
            </div>
        </div>
        <div class="p-5">
            <div v-if="contentTab === 1">
                <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg">
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight">
                        <p class="dark:text-gray-400 text-lg font-light mb-2"> Jueves 25 </p>
                        <div class="p-1 rounded-full bg-gray-300 dark:bg-dark-extralight mb-2">
                            <div class="p-3 rounded-full bg-gray-400 dark:bg-dark-soft"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight mt-3">
                        <p class="dark:text-gray-400 text-lg font-light mb-2"> Miércoles 23 </p>
                        <div class="p-1 rounded-full bg-gray-300 dark:bg-dark-extralight mb-2">
                            <div class="p-3 rounded-full bg-red-500"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight mt-3">
                        <p class="dark:text-gray-400 text-lg font-light mb-2"> Martes 24 </p>
                        <div class="p-1 rounded-full bg-gray-300 dark:bg-dark-extralight mb-2">
                            <div class="p-3 rounded-full bg-gray-400 dark:bg-dark-soft"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mt-3">
                        <p class="dark:text-gray-400 text-lg font-light mb-2"> Lunes 25 </p>
                        <div class="p-1 rounded-full bg-gray-300 dark:bg-dark-extralight mb-2">
                            <div class="p-3 rounded-full bg-lime-500"></div>
                        </div>
                    </div>
                    <div class="mt-4 flex justify-center items-center">
                        <p class="text-blue-500 inline-flex items-center gap-x-2 cursor-pointer hover:opacity-75"> 
                            Cargar días anteriores 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                </span> 
                        </p>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg">
                    <div class="flex justify-between items-center">
                        <p class="dark:text-gray-400 text-xl"> Agosto 2025 </p>
                        <div class="flex justify-end items-center gap-x-4">
                            <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 text-blue-500 cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                            </div>
                            <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 text-blue-500 cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-download-icon lucide-cloud-download"><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg mt-4">
                    <div class="flex justify-between items-center">
                        <p class="dark:text-gray-400 text-xl"> Julio 2025 </p>
                        <div class="flex justify-end items-center gap-x-4">
                            <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 text-blue-500 cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                            </div>
                            <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 text-blue-500 cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-download-icon lucide-cloud-download"><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg mt-4">
                    <div class="flex justify-between items-center">
                        <p class="dark:text-gray-400 text-xl"> Junio 2025 </p>
                        <div class="flex justify-end items-center gap-x-4">
                            <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 text-blue-500 cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                            </div>
                            <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 text-blue-500 cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-download-icon lucide-cloud-download"><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
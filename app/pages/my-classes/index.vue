<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';

    const contentTab = ref<number>(1)
    const contentMonth = ref<boolean>(false)

</script>

<template>
    <section>
        <SectionTitle title="Mis clases"/>
        <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg shadow">
            <div class="mb-4 md:flex md:justify-center md:items-center">
                <h4 class="text-black dark:text-white uppercase text-2xl"> 
                    Septiembre 2025 <span class="block normal-case text-xs font-light md:text-center"> Esta semana </span>
                </h4>
            </div>
            <div class="flex overflow-x-auto md:justify-center md:items-center gap-x-4">
                <div class="bg-lime-400 p-4 rounded-4xl overflow-hidden flex-shrink-0">
                    <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                        L <span class="text-2xl font-bold"> 22 </span>
                    </h2>
                </div>
                <div class="bg-dark-extralight p-4 rounded-4xl overflow-hidden flex-shrink-0">
                    <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                        M <span class="text-2xl font-bold"> 23 </span>
                    </h2>
                </div>
                <div class="bg-lime-400 p-4 rounded-4xl overflow-hidden flex-shrink-0">
                    <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                        M <span class="text-2xl font-bold"> 24 </span>
                    </h2>
                </div>
                <div class="bg-dark-extralight p-4 rounded-4xl overflow-hidden flex-shrink-0">
                    <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                        J <span class="text-2xl font-bold"> 25 </span>
                    </h2>
                </div>
                <div class="bg-lime-400 p-4 rounded-4xl overflow-hidden flex-shrink-0">
                    <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                        V <span class="text-2xl font-bold"> 26 </span>
                    </h2>
                </div>
                <div class="bg-dark-extralight p-4 rounded-4xl overflow-hidden flex-shrink-0">
                    <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                        S <span class="text-2xl font-bold"> 27 </span>
                    </h2>
                </div>
                <div class="bg-dark-extralight p-4 rounded-4xl overflow-hidden flex-shrink-0">
                    <h2 class="text-white text-xs uppercase text-center flex flex-col"> 
                        D <span class="text-2xl font-bold"> 28 </span>
                    </h2>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-6">
        <SectionTitle title="Historial de asistencias"/>
        <div class="bg-gray-200 dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-1 rounded-lg flex justify-center items-center">
            <button
                @click="contentTab = 1"
                class="dark:text-white w-full cursor-pointer hover:opacity-75"
                :class="contentTab === 1 ? 'bg-white dark:bg-dark-soft px-4 py-2 rounded-lg font-bold' : ''">
                    Mes actual
            </button>
            <button
                @click="contentTab = 2"
                class="dark:text-white w-full cursor-pointer hover:opacity-75"
                :class="contentTab === 2 ? 'bg-white dark:bg-dark-soft px-4 py-2 rounded-lg font-bold': 'font-light'">
                    Otros meses
            </button>
        </div>
    </section>

    <section class="mt-6">
        <div v-if="contentTab === 1">
            <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg shadow">
                <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft">
                    <p class="dark:text-white text-lg font-light mb-2"> Jueves 25 </p>
                    <div class="p-1 rounded-full bg-dark-soft mb-2">
                        <div class="p-3 rounded-full bg-dark-extralight"></div>
                    </div>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft mt-3">
                    <p class="dark:text-white text-lg font-light mb-2"> Miércoles 23 </p>
                    <div class="p-1 rounded-full bg-dark-soft mb-2">
                        <div class="p-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft mt-3">
                    <p class="dark:text-white text-lg font-light mb-2"> Martes 24 </p>
                    <div class="p-1 rounded-full bg-dark-soft mb-2">
                        <div class="p-3 rounded-full bg-dark-extralight"></div>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-3">
                    <p class="dark:text-white text-lg font-light mb-2"> Lunes 25 </p>
                    <div class="p-1 rounded-full bg-dark-soft mb-2">
                        <div class="p-3 rounded-full bg-green-500"></div>
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
            <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg shadow">
                <div class="flex justify-between items-center">
                    <p class="dark:text-white text-xl"> Agosto 2025 </p>
                    <div class="flex justify-end items-center gap-x-4">
                        <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 dark:text-white cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                        </div>
                        <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 dark:text-white cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-download-icon lucide-cloud-download"><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg shadow mt-4">
                <div class="flex justify-between items-center">
                    <p class="dark:text-white text-xl"> Julio 2025 </p>
                    <div class="flex justify-end items-center gap-x-4">
                        <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 dark:text-white cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                        </div>
                        <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 dark:text-white cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-download-icon lucide-cloud-download"><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg shadow  mt-4">
                <div class="flex justify-between items-center">
                    <p class="dark:text-white text-xl"> Junio 2025 </p>
                    <div class="flex justify-end items-center gap-x-4">
                        <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 dark:text-white cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                        </div>
                        <div class="bg-gray-200 dark:bg-dark-extralight rounded-full p-2 dark:text-white cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-download-icon lucide-cloud-download"><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

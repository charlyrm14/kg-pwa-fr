<script setup lang="ts">

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
        <div class="flex justify-between items-center">
            <h4 class="text-gray-900 dark:text-gray-300 text-lg font-bold">
                Ingresos
            </h4>
            <select 
                name="income_period" 
                id="income_period"
                class="bg-gray-100 dark:bg-dark-extralight rounded-4xl px-4 py-1 text-blue-500 focus:outline-none font-bold">
                    <option value="semanal" selected> Semanal </option>
                    <option value="mensual"> Mensual </option>
                    <option value="anual"> Anual </option>
            </select>
        </div>
        <div class="w-full mx-auto p-4">
            <div class="overflow-hidden">
                <div class="relative h-[400px] w-full overflow-y-hidden overflow-x-auto scroll-smooth">
                    <div class="flex h-full min-w-[900px] pt-10 pb-12 pr-8 relative">
                        <div class="sticky left-0 z-30 flex flex-col justify-between h-[280px] w-14 backdrop-blur-sm pl-6 pr-2 border-r border-gray-200 dark:border-dark-soft text-base font-bold text-gray-600 dark:text-white">
                            <span> 100 </span>
                            <span> 75 </span>
                            <span> 50 </span>
                            <span> 25 </span>
                            <span class="mb-[-5px]"> 0 </span>
                        </div>
                        <div class="flex-1 flex items-end justify-between px-10 relative h-[280px]">
                        
                            <div class="absolute inset-0 flex flex-col justify-between pointer-events-none px-4">
                                <div class="border-t border-gray-200 dark:border-dark-soft w-full h-0"></div>
                                <div class="border-t border-gray-200 dark:border-dark-soft w-full h-0"></div>
                                <div class="border-t border-gray-200 dark:border-dark-soft w-full h-0"></div>
                                <div class="border-t border-gray-200 dark:border-dark-soft w-full h-0"></div>
                                <div class="border-b border-gray-200 dark:border-dark-soft w-full h-0"></div>
                            </div>

                            <div class="group relative flex flex-col items-center z-10 w-10 h-[20%]">
                                <div class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold"> 20% </div>
                                <div class="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer" style="height: 100%;"></div>
                                <span class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white"> Ene </span>
                            </div>

                            <div class="group relative flex flex-col items-center z-10 w-10 h-[25%]">
                                <div class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold"> 25% </div>
                                <div class="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer" style="height: 100%;"></div>
                                <span class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white"> Feb </span>
                            </div>

                            <div class="group relative flex flex-col items-center z-10 w-10 h-[45%]">
                                <div class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold"> 45% </div>
                                <div class="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer" style="height: 100%;"></div>
                                <span class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white"> Mar </span>
                            </div>

                            <div class="group relative flex flex-col items-center z-10 w-10 h-[45%]">
                                <div class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold"> 45% </div>
                                <div class="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer" style="height: 100%;"></div>
                                <span class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white"> Abr </span>
                            </div>

                            <div class="group relative flex flex-col items-center z-10 w-10 h-[50%]">
                                <div class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold"> 50% </div>
                                <div class="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer" style="height: 100%;"></div>
                                <span class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white"> May </span>
                            </div>

                            <div class="group relative flex flex-col items-center z-10 w-10 h-[65%]">
                                <div class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold"> 65% </div>
                                <div class="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer" style="height: 100%;"></div>
                                <span class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white"> Jun </span>
                            </div>

                            <div class="group relative flex flex-col items-center z-10 w-10 h-[69%]">
                                <div class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold"> 69% </div>
                                <div class="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer" style="height: 100%;"></div>
                                <span class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white"> Jul </span>
                            </div>

                            <div class="group relative flex flex-col items-center z-10 w-10 h-[55%]">
                                <div class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold"> 55% </div>
                                <div class="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer" style="height: 100%;"></div>
                                <span class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white"> Ago </span>
                            </div>

                            <div class="group relative flex flex-col items-center z-10 w-10 h-[72%]">
                                <div class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold"> 72% </div>
                                <div class="w-full bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-600 cursor-pointer" style="height: 100%;"></div>
                                <span class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white"> Sep </span>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

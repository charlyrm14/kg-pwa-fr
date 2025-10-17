<script setup lang="ts">

    import { useModalManager } from '#imports';

    const { open, close, isOpen } = useModalManager()


</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg mt-6">
        <div class="p-5 flex justify-between items-center">
            <h4 class="text-xl dark:text-white"> Historial de pagos </h4>
            <button
                @click="open('AddUserPayment')"
                class="bg-indigo-500 text-white px-4 py-2 rounded cursor-pointer hover:opacity-75">
                    Agregar pago
            </button>
        </div>
        <div class="p-5">
            <div class="bg-white dark:bg-dark-light border border-gray-200 dark:border-dark-extralight p-4 rounded-lg shadow">
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight">
                        <p class="dark:text-gray-400 text-lg font-light mb-2"> Inscripción </p>
                        <span class="dark:text-white text-lg"> $3,000.00 </span>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight mt-3">
                        <p class="dark:text-gray-400 text-lg font-light mb-2"> Mensualidad </p>
                        <span class="dark:text-white text-lg"> $1,500.00 </span>
                    </div>
                    <div class="flex justify-between items-center mt-3">
                        <p class="dark:text-gray-400 text-lg font-light mb-2"> Visita </p>
                        <span class="dark:text-white text-lg"> $300.00 </span>
                    </div>
                    <div class="mt-4 flex justify-center items-center">
                        <p class="text-blue-500 inline-flex items-center gap-x-2 cursor-pointer hover:opacity-75"> 
                            Cargar más 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                </span> 
                        </p>
                    </div>
                </div>
        </div>
    </div>
</template>

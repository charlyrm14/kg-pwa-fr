<script setup lang="ts">
    import type { Payment } from '#imports';

    defineProps<{
        payment: Payment
    }>()

    const showActionsPayment = ref<boolean>(false)

</script>

<template>
    <div class="w-full bg-gray-200 dark:bg-dark-extralight py-2 px-4 rounded-lg space-y-2 cursor-pointer hover:opacity-75">
        <div class="flex justify-between items-start md:items-center">
            <div class="flex flex-col">
                <span class="text-gray-600 dark:text-white font-semibold text-lg">
                    {{ payment?.user?.name }}
                </span>
                <div class="inline-flex justify-between items-center gap-x-3 text-base">
                    <span class="text-gray-400 font-bold"> {{ payment?.type?.name }} · </span>
                    <span class="text-lime-500 font-bold"> ${{ payment?.amount }}  </span>
                    <span class="text-gray-400 font-semibold"> · {{ payment?.payment_date }} </span>
                </div>
            </div>
            <div class="relative">
                <button 
                    class="dark:text-white cursor-pointer hover:opacity-75 rounded-full p-1"
                    @click="showActionsPayment = !showActionsPayment">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div 
                    v-if="showActionsPayment"
                    class="absolute -bottom-24 right-6 bg-white border border-gray-200 dark:border-none dark:bg-dark rounded-4xl shadow-xl w-40 z-50">
                        <div class="px-2 py-1">
                            <button class="dark:text-gray-300 text-gray-700 text-base inline-flex items-center gap-x-2 font-bold px-3 py-1 cursor-not-allowed hover:text-blue-500 hover:font-bold rounded-lg w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>
                                        Editar
                            </button>
                        </div> 
                        <div class="px-2 py-1">
                            <button
                                class="dark:text-gray-300 text-gray-700 text-base inline-flex items-center gap-x-2 font-bold px-3 py-1 cursor-pointer hover:text-blue-500 hover:font-bold rounded-lg w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                                        Ver
                            </button>
                        </div>
                        <div class="px-2 py-1">
                            <button
                                class="dark:text-gray-400 text-gray-500 text-base inline-flex items-center gap-x-2 font-semibold px-3 py-1 cursor-pointer hover:text-red-500 hover:font-bold rounded-lg w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                        Eliminar
                            </button>
                        </div> 
                </div>
            </div>
        </div>
    </div>
</template>
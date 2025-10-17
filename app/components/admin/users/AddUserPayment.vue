<script setup lang="ts">

    const emit = defineEmits<{
        (e: 'closeAddPaymentUserModal'): void
    }>();

    const showPaymentType = ref<boolean>(false)
    const isSubmitting = ref<boolean>(false)

    const handleSubmit = () => {

        isSubmitting.value = true

        setTimeout(() => {
            isSubmitting.value = false
        }, 4000);
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-dark rounded-2xl shadow-xl w-[90%] max-w-md md:w-4/5 md:max-w-xl mx-4">

            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-cards-icon lucide-wallet-cards"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"/></svg>
                        Agregar pago para Jhon W
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click="$emit('closeAddPaymentUserModal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="px-6 pb-4 space-y-4">
                <div>
                    <label for="amount" class="dark:text-gray-300"> Monto </label>
                    <input 
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder="Ej: 200"
                        class="w-full p-3 mt-2 rounded-lg bg-gray-100 dark:bg-dark-light dark:text-gray-300 border border-gray-200 dark:border-none">
                </div>
                <div>
                    <button 
                        @click="showPaymentType = !showPaymentType"
                        class="flex justify-between items-center w-full dark:text-gray-300 cursor-pointer hover:opacity-75"> 
                            Tipo de ingreso
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
                                :class="!showPaymentType ? 'lucide-chevron-down-icon lucide-chevron-down' : 'lucide-chevron-up-icon lucide-chevron-up'">
                                    <path :d="!showPaymentType ? 'm6 9 6 6 6-6' : 'm18 15-6-6-6 6'"/>
                            </svg>
                    </button>
                    <div v-if="showPaymentType">
                        <div class="bg-gray-100 dark:bg-dark-light border border-indigo-500 p-3 rounded-lg mt-2 cursor-pointer hover:opacity-75">
                            <div class="flex justify-between items-center">
                                <p class="text-gray-700 dark:text-white text-lg"> $250.00 </p>
                                <p class="text-gray-500 dark:text-gray-300"> Visita </p>
                            </div>
                        </div>
                        <div class="bg-gray-100 dark:bg-dark-light p-3 rounded-lg mt-2 cursor-pointer hover:opacity-75">
                            <div class="flex justify-between items-center">
                                <p class="text-gray-700 dark:text-white text-lg"> $1,500.00 </p>
                                <p class="text-gray-500 dark:text-gray-300"> Mensual </p>
                            </div>
                        </div>
                        <div class="bg-gray-100 dark:bg-dark-light p-3 rounded-lg mt-2 cursor-pointer hover:opacity-75">
                            <div class="flex justify-between items-center">
                                <p class="text-gray-700 dark:text-white text-lg"> $3,000.00 </p>
                                <p class="text-gray-500 dark:text-gray-300"> Inscripción </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="note" class="dark:text-gray-300"> Nota </label>
                    <input 
                        type="text"
                        name="note"
                        id="note"
                        placeholder="Ej: 200"
                        class="w-full p-3 mt-2 rounded-lg bg-gray-100 dark:bg-dark-light dark:text-gray-300 border border-gray-200 dark:border-none">
                </div>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    :disabled="isSubmitting"
                    @click="$emit('closeAddPaymentUserModal')"> 
                        Cancelar 
                </button>
                <button
                    :disabled="isSubmitting"
                    @click="handleSubmit"
                    class="text-white px-4 py-2 rounded-lg hover:opacity-75"
                    :class="isSubmitting ? 'bg-blue-300 cursor-progress' : 'bg-blue-500 cursor-pointer'"> 
                        {{ !isSubmitting ? 'Agregar ingreso' : 'Guardando ingreso' }} 
                </button>
            </div>

        </div>
    </div>
</template>
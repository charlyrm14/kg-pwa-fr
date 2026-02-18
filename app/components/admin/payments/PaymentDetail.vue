<script setup lang="ts">
    import type { PaymentDetail } from '#imports';

    defineProps<{
        payment: PaymentDetail
    }>()
    
    const showUserInfo = ref<boolean>(false)
    const showNotes = ref<boolean>(false)

</script>

<template>
    <div>
        <div>
            <div class="space-y-3 mb-3 border-b border-gray-200 dark:border-dark-extralight">
                <div class="space-y-3">
                    <p class="text-lg font-semibold text-gray-500 dark:text-gray-400 mt-3">
                        ¿Este pago pertenece a?
                    </p>
                    <div class="grid gap-3 sm:grid-cols-2 mb-3">

                        <div 
                            class="flex items-center justify-between p-3 md:p-4 rounded-xl bg-gray-100 dark:bg-dark-extralight transition-all duration-200"
                            :class="!payment?.user ? 'border-2 border-lime-500' : ''">
                                <div>
                                    <p class="font-semibold text-gray-700 dark:text-white"> Ingreso general </p>
                                    <p class="text-sm md:text-base text-gray-500 dark:text-gray-400">
                                        Ingreso registrado como general
                                    </p>
                                </div>
                        </div>

                        <div 
                            class="flex items-center justify-between p-3 md:p-4 rounded-xl bg-gray-100 dark:bg-dark-extralight transition-all duration-200"
                            :class="payment?.user ? 'border-2 border-lime-500' : ''">
                                <div>
                                    <p class="font-semibold text-gray-700 dark:text-gray-300"> Usuario  </p>
                                    <p v-if="payment?.user" class="text-sm md:text-base text-gray-500 dark:text-gray-400">
                                        Pago asignado a <span class="font-bold text-lime-500"> {{  payment?.user?.name }} </span>
                                    </p>
                                    <p v-else class="text-sm md:text-base text-gray-500 dark:text-gray-400">
                                        Pago no asignado a ningún usuario
                                    </p>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="space-y-3">
                <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">
                    Información de pago
                </p>
                <div class="h-80 overflow-y-auto space-y-2">
                    <div class="flex justify-between items-center bg-gray-100 dark:bg-dark-extralight rounded-4xl px-3 py-2">
                        <div class="inline-flex items-center gap-x-2 md:gap-x-4">
                            <span class="border-2 border-gray-200 dark:border-dark-soft p-1 rounded-xl text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-dollar-sign-icon lucide-badge-dollar-sign"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                            </span>
                            <span class="text-sm md:text-xl text-gray-400 dark:text-gray-400 font-semibold"> Monto </span>
                        </div>
                        <div>
                            <span class="text-sm md:text-xl text-lime-500 font-extrabold"> ${{ payment?.amount ?? 0 }} </span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center bg-gray-100 dark:bg-dark-extralight rounded-4xl px-3 py-2">
                        <div class="inline-flex items-center gap-x-2 md:gap-x-4">
                            <span class="border-2 border-gray-200 dark:border-dark-soft p-1 rounded-xl text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check2-icon lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>

                            </span>
                            <span class="text-sm md:text-xl text-gray-400 dark:text-gray-400 font-semibold"> Fecha de pago </span>
                        </div>
                        <div>
                            <span class="text-sm md:text-xl text-gray-600 dark:text-gray-400 font-extrabold"> {{ payment?.payment_date }} </span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center bg-gray-100 dark:bg-dark-extralight rounded-4xl px-3 py-2">
                        <div class="inline-flex items-center gap-x-2 md:gap-x-4">
                            <span class="border-2 border-gray-200 dark:border-dark-soft p-1 rounded-xl text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock-icon lucide-calendar-clock"><path d="M16 14v2.2l1.6 1"/><path d="M16 2v4"/><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M3 10h5"/><path d="M8 2v4"/><circle cx="16" cy="16" r="6"/></svg>
                            </span>
                            <span class="text-sm md:text-xl text-gray-400 dark:text-gray-400 font-semibold"> Fecha de cobertura </span>
                        </div>
                        <div>
                            <span class="text-sm md:text-xl text-gray-600 dark:text-gray-400 font-extrabold"> {{ payment?.covered_until_date }} </span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center bg-gray-100 dark:bg-dark-extralight rounded-4xl px-3 py-2">
                        <div class="inline-flex items-center gap-x-2 md:gap-x-4">
                            <span class="border-2 border-gray-200 dark:border-dark-soft p-1 rounded-xl text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-todo-icon lucide-list-todo"><path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><rect x="3" y="4" width="6" height="6" rx="1"/></svg>
                            </span>
                            <span class="text-sm md:text-xl text-gray-400 dark:text-gray-400 font-semibold"> Tipo de pago </span>
                        </div>
                        <div>
                            <span class="text-sm md:text-xl text-indigo-500 font-extrabold"> {{ payment?.type?.name }} </span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center bg-gray-100 dark:bg-dark-extralight rounded-4xl px-3 py-2">
                        <div class="inline-flex items-center gap-x-2 md:gap-x-4">
                            <span class="border-2 border-gray-200 dark:border-dark-soft p-1 rounded-xl text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins-icon lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                            </span>
                            <span class="text-sm md:text-xl text-gray-400 dark:text-gray-400 font-semibold"> Método de pago </span>
                        </div>
                        <div>
                            <span class="text-sm md:text-xl text-emerald-500 font-extrabold"> {{ payment?.reference?.name }} </span>
                        </div>
                    </div>
                    <div class="bg-gray-100 dark:bg-dark-extralight rounded-4xl px-3 py-2">
                        <div class="flex justify-between items-center" :class="showNotes ? 'border-b border-gray-200 dark:border-dark-soft' : ''">
                            <div class="inline-flex items-center gap-x-2 md:gap-x-4" :class="showNotes ? 'mb-1' : ''">
                                <span class="border-2 border-gray-200 dark:border-dark-soft p-1 rounded-xl text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-text-icon lucide-notebook-text"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9.5 8h5"/><path d="M9.5 12H16"/><path d="M9.5 16H14"/></svg>
                                </span>
                                <span class="text-sm md:text-xl text-gray-400 dark:text-gray-400 font-semibold"> Notas </span>
                            </div>
                            <button
                                v-if="payment?.notes !== null"
                                class="dark:text-gray-400 cursor-pointer hover:opacity-75"
                                @click.prevent="showNotes = !showNotes">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        stroke-width="2" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        :class="!showNotes ? 'lucide lucide-chevron-down-icon lucide-chevron-down' : 'lucide lucide-chevron-up-icon lucide-chevron-up'">
                                            <path :d="!showNotes ? 'm6 9 6 6 6-6' : 'm18 15-6-6-6 6'"/>
                                    </svg>
                            </button>
                            <span v-else class="dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-off-icon lucide-circle-off"><path d="m2 2 20 20"/><path d="M8.35 2.69A10 10 0 0 1 21.3 15.65"/><path d="M19.08 19.08A10 10 0 1 1 4.92 4.92"/></svg>
                            </span>
                        </div>
                        <div v-if="showNotes" class="py-2 mt-2">
                            <span class="dark:text-gray-300 text-gray-600 font-extrabold text-sm md:text-xl"> {{ payment?.notes }} </span>
                        </div>
                    </div>
                    <div class="bg-gray-100 dark:bg-dark-extralight rounded-4xl px-3 py-2">
                        <div class="flex justify-between items-center" :class="showUserInfo ? 'border-b border-gray-200 dark:border-dark-soft' : ''">
                            <div class="inline-flex items-center gap-x-2 md:gap-x-4" :class="showUserInfo ? 'mb-1' : ''">
                                <span class="border-2 border-gray-200 dark:border-dark-soft p-1 rounded-xl text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                </span>
                                <span class="text-sm md:text-xl text-gray-400 dark:text-gray-400 font-semibold"> Inf. usuario </span>
                            </div>
                            <button
                                v-if="payment?.user"
                                class="dark:text-gray-400 cursor-pointer hover:opacity-75"
                                @click.prevent="showUserInfo = !showUserInfo">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        stroke-width="2" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        :class="!showUserInfo ? 'lucide lucide-chevron-down-icon lucide-chevron-down' : 'lucide lucide-chevron-up-icon lucide-chevron-up'">
                                            <path :d="!showUserInfo ? 'm6 9 6 6 6-6' : 'm18 15-6-6-6 6'"/>
                                    </svg>
                            </button>
                            <span v-else class="dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-off-icon lucide-circle-off"><path d="m2 2 20 20"/><path d="M8.35 2.69A10 10 0 0 1 21.3 15.65"/><path d="M19.08 19.08A10 10 0 1 1 4.92 4.92"/></svg>
                            </span>
                        </div>
                        <div v-if="showUserInfo" class="space-y-1 mt-2">
                            <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft">
                                <div class="inline-flex items-center gap-x-2 md:gap-x-4 mb-2">
                                    <span class="border-2 border-gray-200 dark:border-dark-soft p-1 rounded-xl text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-id-card-icon lucide-id-card"><path d="M16 10h2"/><path d="M16 14h2"/><path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/></svg>
                                    </span>
                                    <span class="text-sm md:text-xl text-gray-400 dark:text-gray-400 font-semibold"> Nombre </span>
                                </div>
                                <span class="dark:text-gray-300 text-gray-600 font-extrabold text-sm md:text-xl"> {{ payment?.user?.name }} </span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="inline-flex items-center gap-x-2 md:gap-x-4 mb-2">
                                    <span class="border-2 border-gray-200 dark:border-dark-soft p-1 rounded-xl text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                                    </span>
                                    <span class="text-sm md:text-xl text-gray-400 dark:text-gray-400 font-semibold"> Correo </span>
                                </div>
                                <span class="dark:text-gray-300 text-gray-600 font-extrabold text-sm md:text-xl"> {{ payment?.user?.email }} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-6 flex justify-start items-center">
            <NuxtLink 
                to="/kg-admin/payments"
                class="px-4 py-2 bg-blue-500 text-white rounded-4xl font-bold cursor-pointer hover:opacity-75">
                    Regresar a pagos
            </NuxtLink>
        </div>
    </div>
</template>
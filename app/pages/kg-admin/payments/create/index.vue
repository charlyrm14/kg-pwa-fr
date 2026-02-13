<script setup lang="ts">
    import Alert from '~/components/common/Alert.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import UserLookup from '~/components/common/UserLookup.vue';
    import { useAlert } from '#imports';

    definePageMeta({
        layout: 'admin'
    })

    const { alert, closeAlert } = useAlert()

    const paymentOwner = ref<'general' | 'user'>('general')
    const editPaymentDate = ref<boolean>(false)

</script>

<template>
    <section class="md:px-5">

        <Alert 
            v-if="alert.status" 
            :title="alert.title" 
            :description="alert.description" 
            :type="alert.type" 
            @closeAlert="closeAlert"/>
        
        <section>
            <Breadcrumb
                heading="Registrar"
                primary-section="Pagos"
                primary-link="/kg-admin/payments"
                secondary-section="Registrar pago"/>
        </section>

        <section class="mt-7">
            <div class="bg-white dark:bg-dark-light rounded-lg p-4">
                <div class="border-b border-gray-200 dark:border-dark-extralight">
                    <h2 class="inline-flex gap-x-4 text-gray-400 dark:text-gray-500/80 font-bold text-lg md:text-xl mb-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
                            Registrar pago 
                    </h2>
                </div>
                <div class="my-3">
                    <div 
                        class="space-y-3 mb-3 border-b border-gray-200 dark:border-dark-extralight">
                        <div class="space-y-3">
                            <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">
                                ¿Este pago pertenece a?
                            </p>
                            <div class="grid gap-3 sm:grid-cols-2" :class="paymentOwner === 'user' ? 'mb-0' : 'mb-3'">

                                <label class="cursor-pointer">
                                <input
                                    type="radio"
                                    name="paymentOwner"
                                    value="general"
                                    v-model="paymentOwner"
                                    class="sr-only peer">

                                    <div class="flex items-center justify-between p-4 rounded-xl border border-gray-300 dark:border-dark-soft bg-gray-100 dark:bg-dark transition-all duration-200 peer-checked:border-lime-500 peer-checked:ring-2 peer-checked:ring-lime-500 hover:border-lime-400">
                                        <div>
                                            <p class="font-semibold text-gray-700 dark:text-white">
                                                Ingreso general
                                            </p>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                                No se asigna a ningún usuario
                                            </p>
                                        </div>
                                        <div 
                                            class="w-5 h-5 rounded-full border-3 border-gray-400 dark:border-gray-400 flex items-center justify-center transition-colors duration-200 peer-checked:border-lime-500"
                                            :class="paymentOwner === 'general' ? 'bg-lime-500' : ''">
                                                <div class="w-2.5 h-2.5 rounded-full bg-lime-500 scale-0 transition-transform duration-200 peer-checked:scale-100"></div>
                                        </div>
                                    </div>
                                </label>

                                <label class="cursor-pointer">
                                <input
                                    type="radio"
                                    name="paymentOwner"
                                    value="user"
                                    v-model="paymentOwner"
                                    class="sr-only peer">

                                    <div class="flex items-center justify-between p-4 rounded-xl border border-gray-300 dark:border-dark-soft bg-gray-100 dark:bg-dark transition-all duration-200 peer-checked:border-lime-500 peer-checked:ring-2 peer-checked:ring-lime-500 hover:border-lime-400">
                                        <div>
                                            <p class="font-semibold text-gray-700 dark:text-white">
                                                Asignar a usuario
                                            </p>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                                El pago se vinculará a un usuario
                                            </p>
                                        </div>

                                        <div 
                                            class="w-5 h-5 rounded-full border-3 border-gray-400 flex items-center justify-center transition-colors duration-200 peer-checked:border-lime-500"
                                            :class="paymentOwner === 'user' ? 'bg-lime-500' : ''">
                                                <div class="w-2.5 h-2.5 rounded-full bg-lime-500 scale-0 transition-transform duration-200 peer-checked:scale-100"></div>
                                        </div>
                                    </div>
                                </label>

                            </div>
                        </div>
                        <div v-if="paymentOwner === 'user'">
                            <UserLookup/>
                        </div>
                    </div>
                    <div class="border-b border-gray-200 dark:border-dark-extralight">
                        <div class="space-y-3 my-3">
                            <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">
                                Información de pago
                            </p>
                            <div>
                                <label for="amount" class="font-extrabold text-gray-600 dark:text-gray-300"> Monto </label>
                                <input 
                                    type="number"
                                    name="amount"
                                    min="0"
                                    max="99999"
                                    placeholder="Ej: $200"
                                    class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                            </div>
                            <div>
                                <label for="payment_type_id" class="font-extrabold text-gray-600 dark:text-gray-300"> Tipo de pago </label>
                                <select 
                                    name="payment_type_id" 
                                    id="payment_type_id"
                                    class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                                        <option value="1"> Mensual básica </option>
                                        <option value="2"> Anual </option>
                                        <option value="3" selected> Visita </option>
                                        <option value="4"> Familiar </option>   
                                </select>
                            </div>
                            <div>
                                <label for="payment_reference_id" class="font-extrabold text-gray-600 dark:text-gray-300"> Referencia de pago </label>
                                <select 
                                    name="payment_reference_id" 
                                    id="payment_reference_id"
                                    class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                                        <option value="1"> Efectivo </option>
                                        <option value="2"> Transferencia Bancaria (SPEI/SEPA) </option>
                                        <option value="3"> Servicio de Pago (Oxxo, 7-Eleven) </option>
                                        <option value="4"> Tarjeta de Crédito / Procesador </option>
                                </select>
                            </div>
                            <div>
                                <div class="flex justify-between items-center">
                                    <p class="font-extrabold text-gray-600 dark:text-gray-300"> 
                                        Fecha de pago 
                                            <span class="block text-indigo-500 font-extrabold"> Hoy: 13/02/2026 </span>
                                    </p>
                                    <button
                                        class="bg-indigo-500 text-white rounded-4xl px-2.5 py-0.5 font-semibold cursor-pointer hover:opacity-75 transition-colors"
                                        @click="editPaymentDate = !editPaymentDate">
                                            Editar fecha
                                    </button>
                                </div>
                                <div v-if="editPaymentDate" class="mt-3">
                                    <label for="payment_date" class="font-extrabold text-gray-600 dark:text-gray-300"> Seleccionar fecha de pago </label>
                                    <input 
                                        type="date"
                                        name="payment_date"
                                        class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-gray-200 dark:border-dark-extralight">
                        <div class="space-y-3 mt-3">
                            <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">
                                Detalles de pago
                            </p>
                            <div>
                                <label for="notes" class="font-extrabold text-gray-600 dark:text-gray-300"> Notas </label>
                                <textarea 
                                    name="notes" 
                                    id="notes"
                                    class="w-full h-20 mt-3 text-gray-500 dark:text-gray-200 font-bold bg-gray-100 dark:bg-dark-extralight border border-gray-300 dark:border-dark-soft p-4 focus:outline-none rounded-xl"
                                    placeholder="Agrega una nota"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-6 flex justify-between items-center">
                    <NuxtLink 
                        to="/kg-admin/payments"
                        class="border border-gray-300 dark:border-dark-extralight rounded-4xl px-4 py-2 transition-colors cursor-pointer hover:opacity-75 w-auto text-gray-400 dark:text-gray-500 font-bold hover:text-red-500 hover:border-red-500 text-center">
                            Cancelar
                    </NuxtLink>
                    <button class="bg-blue-500 text-white font-bold rounded-4xl px-4 py-2 transition-colors cursor-pointer hover:opacity-75 w-auto">
                        Guardar
                    </button>
                </div>
            </div>
        </section>

    </section>
</template>

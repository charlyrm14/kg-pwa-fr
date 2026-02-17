<script setup lang="ts">
    import UserLookup from '~/components/common/UserLookup.vue';

    const paymentOwner = ref<'general' | 'user'>('general')
    const editPaymentDate = ref<boolean>(false)

</script>

<template>
    <div>
        <div class="space-y-3 mb-3 border-b border-gray-200 dark:border-dark-extralight">
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

                            <div class="flex items-center justify-between p-4 rounded-xl border border-gray-300 dark:border-dark-soft bg-gray-100 dark:bg-dark-extralight transition-all duration-200 peer-checked:border-lime-500 peer-checked:ring-2 peer-checked:ring-lime-500 hover:border-lime-400">
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

                            <div class="flex items-center justify-between p-4 rounded-xl border border-gray-300 dark:border-dark-soft bg-gray-100 dark:bg-dark-extralight transition-all duration-200 peer-checked:border-lime-500 peer-checked:ring-2 peer-checked:ring-lime-500 hover:border-lime-400">
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
                        type="text"
                        inputmode="decimal"
                        name="amount"
                        min="0"
                        max="99999"
                        @wheel.prevent
                        placeholder="Ej: $200"
                        class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                </div>
                <div>
                    <label for="payment_type_id" class="font-extrabold text-gray-600 dark:text-gray-300"> Tipo de pago </label>
                    <select 
                        name="payment_type_id" 
                        id="payment_type_id"
                        class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                            <option :value="1"> Visita </option>
                            <option :value="2"> Mensual básica </option>
                            <option :value="3"> Anual </option>
                    </select>
                </div>
                <div>
                    <label for="payment_reference_id" class="font-extrabold text-gray-600 dark:text-gray-300"> Referencia de pago </label>
                    <select 
                        name="payment_reference_id" 
                        id="payment_reference_id"
                        class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                            <option :value="1"> Efectivo </option>
                            <option :value="2"> Transferencia Bancaria (SPEI/SEPA) </option>
                            <option :value="3"> Servicio de Pago (Oxxo, 7-Eleven) </option>
                            <option :value="4"> Tarjeta de Crédito / Procesador </option>
                    </select>
                </div>
                <div>
                    <div class="flex justify-between items-center">
                        <p class="font-extrabold text-gray-600 dark:text-gray-300"> 
                            Fecha de pago 
                                <span class="block text-indigo-500 font-extrabold"> Hoy: {{ getTodayDate() }} </span>
                        </p>
                        <button
                            class="bg-indigo-500 text-white rounded-4xl px-2.5 py-0.5 font-semibold cursor-pointer hover:opacity-75 transition-colors"
                            @click.prevent="editPaymentDate = !editPaymentDate">
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
        <div class="my-6 flex justify-between items-center">
            <NuxtLink 
                class="border border-gray-300 dark:border-dark-extralight rounded-4xl px-4 py-2 transition-colors cursor-pointer hover:opacity-75 w-auto text-gray-400 dark:text-gray-500 font-bold hover:text-red-500 hover:border-red-500 text-center"
                to="/kg-admin/payments">
                    Cancelar
            </NuxtLink>
            <button 
                type="submit"
                class="bg-blue-500 text-white font-bold rounded-4xl px-4 py-2 transition-colors cursor-pointer hover:opacity-75 w-auto">
                    Guardar
            </button>
        </div>
    </div>
</template>
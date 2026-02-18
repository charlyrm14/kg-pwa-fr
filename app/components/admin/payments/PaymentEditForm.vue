<script setup lang="ts">
    import UserLookup from '~/components/common/UserLookup.vue';
    import { useForm } from 'vee-validate';
    import type { PaymentDetail, EditPaymentPayload } from '#imports';
    import { editPaymentSchema } from '~/validations/payments/edit-payment';
    import { useUserStore } from '~/stores/users';
    import { usePaymentStore } from '~/stores/payments';

    const props = defineProps<{
        payment: PaymentDetail
    }>()

    const userStore = useUserStore()
    const paymentStore = usePaymentStore()

    const paymentOwner = ref<'general' | 'user'>(
        props?.payment?.user === null ? 'general' : 'user'
    )

    const editPaymentDate = ref<boolean>(false)
    const isChangingUser = ref(false)


    const { defineField,  handleSubmit,  errors} = useForm<EditPaymentPayload>({
        initialValues: {
            payment_type_id: props?.payment?.type?.id,
            amount: props?.payment?.amount,
            payment_date: props?.payment?.payment_date,
            payment_reference_id: props?.payment?.reference?.id,
            notes: props?.payment?.notes
        },
        validationSchema: editPaymentSchema,
        validateOnMount: false
    })

    const [ payment_type_id, payment_type_idAttrs ] = defineField('payment_type_id')
    const [ amount, amountAttrs ] = defineField('amount')
    const [ payment_date, payment_dateAttrs ] = defineField('payment_date')
    const [ payment_reference_id, payment_reference_idAttrs ] = defineField('payment_reference_id')
    const [ notes, notesAttrs ] = defineField('notes')

    const onSubmit = handleSubmit(async values => {
        if(!props?.payment) return
        
        try {

            const payload = {
                ...values,
                user_uuid: resolvedUserUuid.value
            }

            await paymentStore?.editPayment(props?.payment?.id, payload)
            
        } catch (error) {
            console.error(error)
        }
    })

    const changeUser = () => {
        paymentOwner.value = 'user'
        isChangingUser.value = true
    }

    const cancelChangeUser = () => {
        paymentOwner.value = props?.payment?.user === null ? 'general' : 'user'
        isChangingUser.value = false
    }

    const resolvedUserUuid = computed<string | null>(() => {
        if (paymentOwner.value === 'general') return null

        if (isChangingUser.value) {
            return userStore?.userLookUp?.uuid ?? null
        }

        return props?.payment?.user?.uuid ?? null
    })

</script>

<template>
    <div class="mt-3">
        <form @submit.prevent="onSubmit">
            <div class="space-y-3 mb-3 border-b border-gray-200 dark:border-dark-extralight">
                <div class="space-y-3">
                    <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">
                        ¿Este pago pertenece a?
                    </p>
                    <div class="flex justify-end items-center mt-3">
                            <button
                                v-if="paymentOwner === 'user' && !isChangingUser"
                                class="px-3 py-1 rounded-4xl bg-teal-500 text-white font-semibold cursor-pointer hover:opacity-75"
                                @click.prevent="changeUser">
                                    {{ paymentOwner === 'user'  ? 'Elegir otro usuario' : 'Seleccionar usuario' }}
                            </button>

                            <button
                                v-if="isChangingUser"
                                class="px-4 py-1 rounded-4xl bg-red-500 text-white font-semibold cursor-pointer hover:opacity-75"
                                @click.prevent="cancelChangeUser">
                                    Cancelar
                            </button>
                    </div>
                    <div class="grid gap-3 sm:grid-cols-2 mb-3">

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
                                    <p class="text-sm md:text-base text-gray-500 dark:text-gray-400">
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
                                    <p class="font-semibold text-gray-700 dark:text-gray-300">
                                            Asignado a usuario
                                        </p>
                                        <p v-if="payment?.user !== null" class="text-sm md:text-base text-gray-500 dark:text-gray-400">
                                            Pago vinculado a <span class="text-lime-500 font-bold"> {{ payment?.user?.name }} </span>
                                        </p>
                                        <p v-else class="text-sm md:text-base text-gray-500 dark:text-gray-400"> Pago no vinculado </p>
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
                <UserLookup v-if="paymentOwner === 'user' && isChangingUser"/>
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
                            v-model="amount"
                            v-bind="amountAttrs"
                            @wheel.prevent
                            placeholder="Ej: $200"
                            class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                        <span v-if="errors.amount" class="text-red-500 text-sm px-2 font-bold"> 
                            {{ errors.amount  }}
                        </span>
                    </div>
                    <div>
                        <label for="payment_type_id" class="font-extrabold text-gray-600 dark:text-gray-300"> Tipo de pago </label>
                        <select 
                            name="payment_type_id" 
                            id="payment_type_id"
                            v-model="payment_type_id"
                            v-bind="payment_type_idAttrs"
                            class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                                <option :value="1"> Visita </option>
                                <option :value="2"> Mensual básica </option>
                                <option :value="3"> Anual </option>
                        </select>
                        <span v-if="errors.payment_type_id" class="text-red-500 text-sm px-2 font-bold"> 
                            {{ errors.payment_type_id  }}
                        </span>
                    </div>
                    <div>
                        <label for="payment_reference_id" class="font-extrabold text-gray-600 dark:text-gray-300"> Referencia de pago </label>
                        <select 
                            name="payment_reference_id" 
                            id="payment_reference_id"
                            v-model="payment_reference_id"
                            v-bind="payment_reference_idAttrs"
                            class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                                <option :value="1"> Efectivo </option>
                                <option :value="2"> Transferencia Bancaria (SPEI/SEPA) </option>
                                <option :value="3"> Servicio de Pago (Oxxo, 7-Eleven) </option>
                                <option :value="4"> Tarjeta de Crédito / Procesador </option>
                        </select>
                        <span v-if="errors.payment_reference_id" class="text-red-500 text-sm px-2 font-bold"> 
                            {{ errors.payment_reference_id  }}
                        </span>
                    </div>
                    <div>
                        <div class="flex justify-between items-center">
                            <p class="font-extrabold text-gray-600 dark:text-gray-300"> 
                                Fecha de pago 
                                    <span class="block text-indigo-500 font-extrabold"> Hoy: {{ payment_date }} </span>
                            </p>
                            <button
                                class="bg-fuchsia-500 text-white rounded-4xl px-2.5 py-0.5 font-semibold cursor-pointer hover:opacity-75 transition-colors"
                                @click.prevent="editPaymentDate = !editPaymentDate">
                                    Editar fecha
                            </button>
                        </div>
                        <div v-if="editPaymentDate" class="mt-3">
                            <label for="payment_date" class="font-extrabold text-gray-600 dark:text-gray-300"> Seleccionar fecha de pago </label>
                            <input 
                                type="date"
                                name="payment_date"
                                v-model="payment_date"
                                v-bind="payment_dateAttrs"
                                class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-gray-200 font-bold border border-gray-300 dark:border-dark-soft p-3 rounded-xl mt-3 focus:outline-none">
                            <span v-if="errors.payment_date" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.payment_date  }}
                            </span>
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
                            v-model="notes"
                            v-bind="notesAttrs"
                            class="w-full h-20 mt-3 text-gray-500 dark:text-gray-200 font-bold bg-gray-100 dark:bg-dark-extralight border border-gray-300 dark:border-dark-soft p-4 focus:outline-none rounded-xl"
                            placeholder="Agrega una nota"></textarea>
                        <span v-if="errors.notes" class="text-red-500 text-sm px-2 font-bold"> 
                            {{ errors.notes  }}
                        </span>
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
        </form>
    </div>
</template>
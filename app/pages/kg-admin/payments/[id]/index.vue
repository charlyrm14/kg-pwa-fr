<script setup lang="ts">
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import PaymentDetail from '~/components/admin/payments/PaymentDetail.vue';
    import PaymentEditForm from '~/components/admin/payments/PaymentEditForm.vue';
    import PaymentDelete from '~/components/admin/payments/PaymentDelete.vue';
    import { useModalManager } from '#imports';
    import { usePaymentStore } from '~/stores/payments';
    import Alert from '~/components/common/Alert.vue';

    definePageMeta({
        layout: 'admin'
    })

    const route = useRoute()
    const idParam = route.params.id
    const id = Number(idParam)

    if (!idParam || isNaN(id) || id <= 0) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Invalid id'
        })
    }

    const { alert, closeAlert } = useAlert()
    const paymentStore = usePaymentStore()
    
    const { data: payment, pending, error } = await useAsyncData(
        `payment-${id}`,
        () => paymentStore.fetchPaymentById(id)
    )

    if (error.value) {
        throw createError({
            statusCode: error.value.statusCode || 500,
            statusMessage: error.value.message || 'Error loading payment'
        })
    }

    if (!payment.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Payment not found'
        })
    }

    const { open, isOpen, close } = useModalManager()

    const mode = ref<'detail' | 'edit' | 'delete'>('detail')

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
                heading="Pagos"
                primary-section="Pagos"
                primary-link="/kg-admin/payments"
                secondary-section="Información de pago"/>
        </section>

        <section class="mt-7">
            <div class="bg-white dark:bg-dark-light rounded-lg p-4">
                <div class="border-b border-gray-200 dark:border-dark-extralight flex justify-between items-start md:items-center">
                    <h2 class="inline-flex gap-x-4 text-gray-400 dark:text-gray-500/80 font-bold text-lg md:text-xl mb-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
                            {{ mode === 'detail' ? 'Información de pago' : 'Editar pago' }}
                    </h2>
                    <span class="text-gray-600 dark:text-gray-200 font-bold text-lg hidden md:block"> {{ payment?.folio ? `Folio #${payment?.folio}` : 'S/F' }} </span>
                </div>
                <div class="md:hidden">
                    <span class="flex justify-center items-center my-3 text-gray-600 dark:text-gray-200 font-extrabold text-lg"> 
                        Folio {{ payment?.folio ? `#${payment?.folio}` : 'S/F' }} 
                    </span>
                </div>
                <div class="my-3">
                    <div class="flex justify-center md:justify-end items-center">
                        <div class="bg-gray-200 dark:bg-dark-extralight p-1 rounded-full">
                            <button
                                class="px-4 py-1  cursor-pointer hover:opacity-75"
                                :class="mode === 'detail' ? 'bg-white dark:bg-dark-soft text-indigo-500  font-semibold rounded-full' : 'dark:text-gray-400'"
                                @click.prevent="mode = 'detail'">
                                    Información
                            </button>
                            <button 
                                class="px-4 py-1  cursor-pointer hover:opacity-75"
                                :class="mode === 'edit' ? 'bg-white dark:bg-dark-soft text-blue-500  font-semibold rounded-full' : 'dark:text-gray-400'"
                                @click.prevent="mode = 'edit'"> 
                                    Editar
                            </button>
                            <button 
                                class="px-4 py-1 cursor-pointer hover:opacity-75"
                                :class="mode === 'delete' ? 'bg-white dark:bg-dark-soft text-red-500  font-semibold rounded-full' : 'dark:text-gray-400'"
                                @click.prevent="open('DeletePaymentModal')"> 
                                    Eliminar 
                            </button>
                        </div>
                    </div>
                    <div v-if="payment">
                        <PaymentDetail
                            v-if="mode === 'detail'"
                            :payment="payment"/>

                        <PaymentEditForm
                            v-if="mode === 'edit'"
                            :payment="payment"/>
                    </div>
                </div>
            </div>
        </section>

        <PaymentDelete
            v-if="isOpen('DeletePaymentModal') && payment"
            :paymentDelete="{ id: payment?.id, folio: payment?.folio}"
            @closeDeletePaymentModal="close"/>

    </section>
</template>
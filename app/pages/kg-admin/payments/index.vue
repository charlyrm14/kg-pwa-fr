<script setup lang="ts">
    import PaymentHeader from '~/components/admin/payments/PaymentHeader.vue';
    import PaymentPagination from '~/components/admin/payments/PaymentPagination.vue';
    import PaymentTable from '~/components/admin/payments/PaymentTable.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import { usePaymentStore } from '~/stores/payments';
    import { useModalManager } from '#imports';
    import Alert from '~/components/common/Alert.vue';

    definePageMeta({
        layout: 'admin'
    })

    const paymentStore = usePaymentStore()

    const { alert, closeAlert } = useAlert()
    const { isOpen, close, modalPayload } = useModalManager()

    await useAsyncData('payments', async() => {
        await paymentStore?.fetchPayments()
        return paymentStore?.payments ?? { data: [] }
    })

    const payments = computed(() => paymentStore.filteredPayments)

    const goToPage = async(url: string) => {
        if (!url) return
        
        await paymentStore?.fetchPayments(url)
    }

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
                heading="Lista pagos"
                primary-section="Pagos"
                primary-link="/kg-admin/payments"
                secondary-section="Lista"/>
        </section>

        <section class="mt-6">
            <div class="bg-white shadow-lg rounded-lg pt-4 pb-6 dark:bg-dark-light">

                <!-- Beginning Payment Header -->
                <PaymentHeader/>
                <!-- End Payment Header -->

                <!-- Beginning Payment Table -->
                <section v-if="payments?.length">
                    <PaymentTable
                        :payments="payments"/>
                </section>
                <section 
                    v-else
                    class="p-4 text-pink-500 text-center font-bold">
                        No hay contenido disponible
                </section>
                <!-- End Payment Table -->

                <!-- Beginning Payment Pagination -->
                <section v-if="paymentStore?.payments?.prev_page_url || paymentStore?.payments?.next_page_url">
                    <PaymentPagination
                        :prevPageUrl="paymentStore?.payments?.prev_page_url"
                        :nextPageUrl="paymentStore?.payments?.next_page_url"
                        :totalPerPage="paymentStore?.payments?.per_page"
                        @go="goToPage"/>
                </section>
                <!-- End Payment Pagination -->
                
            </div>
        </section>

    </section>
</template>
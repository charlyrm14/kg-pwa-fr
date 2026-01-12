<script setup lang="ts">
    import PaymentHeader from '~/components/admin/payments/PaymentHeader.vue';
    import PaymentPagination from '~/components/admin/payments/PaymentPagination.vue';
    import PaymentTable from '~/components/admin/payments/PaymentTable.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    
    definePageMeta({
        layout: 'admin'
    })

</script>

<template>
    <section class="p-0 md:p-6">

        <section class="p-2">
            <Breadcrumb
                heading="Lista pagos"
                primary-section="Pagos"
                primary-link="/kg-admin/payments"
                secondary-section="Lista"/>
        </section>

        <section class="mt-6 p-2">
            <div class="bg-white shadow-lg rounded-lg px-2 pt-10 pb-6 dark:bg-dark-light">

                <!-- Beginning Payment Header -->
                <PaymentHeader/>
                <!-- End Payment Header -->

                <!-- Beginning Payment Table -->
                <section>
                    <PaymentTable/>
                </section>
                <!-- End Payment Table -->

                <!-- Beginning Payment Pagination -->
                <PaymentPagination/>
                <!-- End Payment Pagination -->
                
            </div>
        </section>

    </section>
</template>
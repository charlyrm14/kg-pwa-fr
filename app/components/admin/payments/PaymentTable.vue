<script setup lang="ts">
    import PaymentRow from './PaymentRow.vue';
    import type { Payment } from '#imports';

    defineProps<{
        payments: Payment[]
    }>()

</script>

<template>
    <div class="p-4 space-y-3">
        <!-- Beginning Payment Item -->
        <PaymentRow
            v-for="payment in payments"
            :key="payment.id"
            :payment="payment"/>
        <!-- End Payment Item -->
    </div>
</template>
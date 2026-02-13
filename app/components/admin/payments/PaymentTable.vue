<script setup lang="ts">
    import PaymentRow from './PaymentRow.vue';
    import type { Payment } from '#imports';

    defineProps<{
        payments: Payment[]
    }>()

</script>

<template>
    <div class="p-4">
        <div 
            v-if="payments.length"
            class="space-y-3">
            <!-- Beginning Payment Item -->
            <PaymentRow
                v-for="payment in payments"
                :key="payment.id"
                :payment="payment"/>
            <!-- End Payment Item -->
        </div>
        <div 
            v-else>
                <h2 class="dark:text-gray-400 text-center font-bold text-lg">
                    No hay contenido disponible
                </h2>
        </div>
    </div>
</template>
<script setup lang="ts">
    import PaymentRow from './PaymentRow.vue';
</script>

<template>
    <div class="w-full overflow-x-auto p-4 mt-8">
        <div class="min-w-[640px]">

            <div class="flex border-b border-gray-200 dark:border-dark-soft pb-3 mb-2 font-semibold text-sm uppercase text-gray-500 dark:text-gray-400">
                <div class="w-2/6 flex-shrink-0 px-2"> Nombre </div>
                <div class="w-1/6 flex-shrink-0 px-2"> Monto </div>
                <div class="w-1/6 flex-shrink-0 px-2"> Motivo </div>
                <div class="w-1/6 flex-shrink-0 px-2"> Fecha de pago </div>
                <div class="w-1/6 flex-shrink-0 px-2"> Acciones </div>
            </div>

            <!-- Beginning Payment Item -->
            <PaymentRow/>
            <!-- End Payment Item -->
            
        </div>
    </div>
</template>
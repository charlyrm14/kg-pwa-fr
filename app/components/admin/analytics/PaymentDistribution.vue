<script setup lang="ts">
    import type { PaymentDistribution } from '#imports';
    import { bgColorByPaymentType, currentMonth } from '#imports';

    defineProps<{
        paymentDistribution: PaymentDistribution
    }>()

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
        <div class="flex justify-between items-center">
            <h4 class="text-gray-500 dark:text-gray-300 text-lg">
                Ingresos por tipo de pago
            </h4>
        </div>
        <div class="my-3">
            <p class="text-blue-500 font-bold"> {{ currentMonth() }} </p>
        </div>
        <div class="my-3">
            <span class="block text-gray-500 dark:text-gray-400 font-semibold  text-base md:text-xl"> 
                Total: <span class="font-extrabold text-lime-500"> ${{ paymentDistribution?.total }} MXN </span>  </span>
        </div>
        <div class="space-y-2">
            <div 
                v-if="paymentDistribution.distribution"
                v-for="type in paymentDistribution.distribution" 
                :key="type.id"
                class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-gray-700 dark:text-white font-semibold"> {{ type.name }} </span>
                        <span class="dark:text-white font-extrabold"> {{ type.percentage ?? 0 }}% </span>
                    </div>
                    <div class="bg-gray-200 dark:bg-dark-extralight w-full h-8 rounded-4xl flex justify-between items-center">
                        <div class="h-full rounded-full" :class="bgColorByPaymentType(type?.id)" :style="`width: ${type.percentage ?? 0}%`"></div>
                    </div>
            </div>
        </div>
    </div>
</template>
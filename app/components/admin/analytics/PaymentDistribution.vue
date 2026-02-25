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
            <div class="flex justify-start items-center">
                <div class="bg-gray-100 dark:bg-dark-extralight rounded-full py-1 pl-1 pr-3">
                    <div class="flex justify-between items-start gap-x-3">
                        <div class="bg-gray-200 dark:bg-dark-soft rounded-full p-2 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-down-icon lucide-trending-up-down"><path d="M14.828 14.828 21 21"/><path d="M21 16v5h-5"/><path d="m21 3-9 9-4-4-6 6"/><path d="M21 8V3h-5"/></svg>
                        </div>
                        <div>
                            <p class="dark:text-gray-200 text-xs md:text-sm font-semibold">
                                {{ currentMonth() }}
                                    <span class="block text-sm md:text-sm text-lime-500 font-extrabold"> ${{ paymentDistribution?.total }} MXN </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
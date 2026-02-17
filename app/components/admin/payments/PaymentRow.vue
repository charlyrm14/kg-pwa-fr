<script setup lang="ts">
    import type { Payment } from '#imports';
    import { useModalManager } from '#imports';

    const props = defineProps<{
        payment: Payment
    }>()

    const { open } = useModalManager()
    const showActionsPayment = ref<boolean>(false)

</script>

<template>
    <NuxtLink :to="`/kg-admin/payments/${payment?.id}`">
        <div class="w-full bg-gray-100 dark:bg-dark-extralight rounded-lg space-y-2 cursor-pointer hover:opacity-75 p-2 shadow mb-3">
            <div class="flex justify-between items-center">
                <div class="flex justify-between items-center gap-x-3 md:gap-x-4">
                    <div class="bg-gray-200 dark:bg-dark-soft text-gray-600 dark:text-gray-400 rounded-xl p-2 md:p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-minimal-icon lucide-wallet-minimal"><path d="M17 14h.01"/><path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"/></svg>
                    </div>
                    <div>
                        <span 
                            class="text-sm"
                            :class="payment?.user?.name ? 'text-gray-600 dark:text-white font-extrabold' : 'dark:text-gray-400 font-base'"> 
                                {{ payment?.user?.name ?? 'No asignado' }} · <span class="text-gray-600 dark:text-white font-normal text-xs"> {{ payment?.payment_date ?? '--' }} </span>
                        </span>
                        <span class="text-lime-500 font-bold text-base block"> 
                            ${{ payment?.amount }} · 
                                <span class="text-gray-600 dark:text-gray-400 font-normal"> #{{ payment?.folio }} </span> 
                        </span>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right dark:text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup lang="ts">
    import type { RevenueTimeline } from '#imports';

    const props = defineProps<{
        revenue: RevenueTimeline
    }>()

    
    const maxPercentage = computed(() => {
        if (!props.revenue?.growth?.length) return 100
        return Math.max(...props.revenue.growth.map(g => g.percentage)) || 100
    })

    /** Se redondea porcentaje eje hacia arriba */
    const chartMax = computed(() => {
        return Math.ceil(maxPercentage.value / 100) * 100
    })

    /** Se genera eje y */
    const yAxis = computed(() => {
        const steps = 5
        const interval = chartMax.value / steps
        return Array.from({ length: steps + 1 }, (_, i) =>
            Math.round(chartMax.value - i * interval)
        )
    })

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">

        <div class="flex justify-between items-center">
            <h4 class="text-gray-500 dark:text-gray-300 text-lg">
                Ingresos anuales <span class="font-bold text-blue-500"> {{ revenue?.meta?.year ?? 'Unknown' }} </span>
            </h4>
        </div>


        <div class="mt-3">
            <div class="flex justify-start md:justify-center items-center">
                <div class="bg-gray-100 dark:bg-dark-extralight rounded-full py-1 pl-1 pr-3">
                    <div class="flex justify-between items-start gap-x-3">
                        <div class="bg-gray-200 dark:bg-dark-soft rounded-full p-2 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-down-icon lucide-trending-up-down"><path d="M14.828 14.828 21 21"/><path d="M21 16v5h-5"/><path d="m21 3-9 9-4-4-6 6"/><path d="M21 8V3h-5"/></svg>
                        </div>
                        <div>
                            <p class="dark:text-gray-200 text-sm">
                                Mes base <span class="font-extrabold"> {{ revenue?.baseMonth?.month }} </span>
                                    <span class="block text-base md:text-xl text-lime-500 font-extrabold"> ${{ revenue?.baseMonth?.amount ?? 0 }} MXN </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full mx-auto py-4">
            <div class="overflow-hidden">
                <div class="relative h-[400px] w-full overflow-x-auto scroll-smooth">
                    <div class="flex h-full min-w-[900px] pt-10 pb-12 relative">

                        <!-- Y Axis -->
                        <div
                            class="sticky left-0 z-30 flex flex-col justify-between h-[280px] w-14 backdrop-blur-sm p-2 border-r border-gray-200 dark:border-dark-soft text-base font-bold text-gray-600 dark:text-white">
                            <span 
                                v-for="value in yAxis" 
                                :key="value">
                                    {{ value }}
                            </span>
                        </div>

                        <!-- Bars container -->
                        <div class="flex-1 flex items-end justify-between px-10 relative h-[280px]">

                            <!-- Grid lines -->
                            <div class="absolute inset-0 flex flex-col justify-between pointer-events-none px-4">
                                <div
                                    v-for="value in yAxis"
                                    :key="'grid-' + value"
                                    class="border-t border-gray-200 dark:border-dark-soft w-full"/>
                            </div>

                            <!-- Bars -->
                            <div
                                v-for="growth in revenue?.growth"
                                :key="growth.month"
                                class="group relative flex flex-col items-center justify-end z-10 w-10 h-full">
                                    <!-- Percentage label -->
                                    <div
                                        class="absolute -top-6 text-gray-600 dark:text-white text-sm font-extrabold">
                                            {{ growth.percentage }}%
                                    </div>

                                    <!-- Bar -->
                                    <div
                                        class="w-full bg-blue-500 rounded-t-lg transition-all duration-700 hover:bg-blue-600 cursor-pointer"
                                        :style="{ height: ((growth.percentage / chartMax) * 100) + '%'}"></div>

                                    <!-- Month label -->
                                    <span
                                        class="absolute -bottom-8 text-base font-bold text-gray-600 dark:text-white">
                                            {{ growth.month.slice(0, 3) }}
                                    </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

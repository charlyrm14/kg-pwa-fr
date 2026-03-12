<script setup lang="ts">

</script>

<template>
    <div class="h-[85vh] md:h-[85vh] lg:h-[85vh] flex flex-col">

        <div class="flex-1 overflow-y-auto space-y-4">

            <!-- SKELETON -->
            <div class="space-y-4 animate-pulse">

                <!-- assistant bubble -->
                <div class="flex">
                    <div class="max-w-[75%] bg-gray-200 dark:bg-gray-700 rounded-2xl p-4 space-y-2">
                        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-48"></div>
                        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-56"></div>
                        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-40"></div>
                    </div>
                </div>

                <!-- user bubble -->
                <div class="flex justify-end">
                    <div class="max-w-[70%] bg-gray-300 dark:bg-gray-600 rounded-2xl p-4 space-y-2">
                        <div class="h-3 bg-gray-200 dark:bg-gray-500 rounded w-40"></div>
                        <div class="h-3 bg-gray-200 dark:bg-gray-500 rounded w-32"></div>
                    </div>
                </div>

                <!-- assistant bubble -->
                <div class="flex">
                    <div class="max-w-[75%] bg-gray-200 dark:bg-gray-700 rounded-2xl p-4 space-y-2">
                        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-52"></div>
                        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-44"></div>
                        <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
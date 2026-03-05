<script setup lang="ts">

</script>

<template>
    <div class="bg-white dark:bg-dark-light rounded-2xl p-4 animate-pulse">
        
        <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
            <div class="h-6 w-40 bg-gray-200 dark:bg-dark-extralight rounded mb-2"></div>
        </div>

        <div class="space-y-4">

            <div class="h-6 w-64 bg-gray-200 dark:bg-dark-extralight rounded mt-3 space-y-3"></div>
            <div
                v-for="i in 3"
                :key="i"
                class="bg-gray-100 dark:bg-dark-extralight rounded-2xl p-5 space-y-4">

                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="space-y-2">
                            <div class="h-4 w-48 bg-gray-300 dark:bg-dark-soft rounded"></div>
                            <div class="h-3 w-24 bg-gray-300 dark:bg-dark-soft rounded"></div>
                        </div>
                    </div>
                    <div class="h-4 w-18 bg-gray-300 dark:bg-dark-soft rounded"></div>
                </div>
            </div>
        </div>
    </div>
</template>
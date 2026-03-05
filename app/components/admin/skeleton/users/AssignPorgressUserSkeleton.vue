<script setup lang="ts">

</script>

<template>
    <div class="bg-white dark:bg-dark-light rounded-2xl p-4 animate-pulse">
        
        <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
            <div class="h-6 w-40 bg-gray-200 dark:bg-dark-extralight rounded mb-2"></div>
        </div>

        <div class="space-y-4 mt-3">
            <div
                v-for="i in 2"
                :key="i"
                class="space-y-4">

                <div class="space-y-3">
                    <div class="h-4 w-24 bg-gray-300 dark:bg-dark-soft rounded mb-2"></div>
                    <div class="h-4 w-full bg-gray-300 dark:bg-dark-soft rounded-xl p-4 mt-3"></div>
                </div>

            </div>
            <div class="flex justify-end items-center">
                <div class="bg-gray-100 dark:bg-dark-extralight rounded-2xl p-5 space-y-4 h-4 w-40">
                </div>
            </div>
        </div>
    </div>
</template>
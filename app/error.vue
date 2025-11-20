<script setup lang="ts">
    import type { NuxtError } from '#app';

    const props = defineProps({
        error: Object as () => NuxtError,
    })

</script>

<template>
    <div class="min-h-screen bg-gray-100 dark:bg-dark px-4">
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="text-8xl text-black dark:text-white text-center font-bold my-6"> 
            {{ error?.statusCode }} 
                <span class="block text-4xl font-normal"> {{ error?.statusMessage }} </span>
            </h1>
            <NuxtLink 
                to="/"
                class="bg-blue-500 text-white rounded-lg px-4 py-2 hover:opacity-75 cursor-pointer"> 
                    Go back home 
            </NuxtLink>
        </div>
    </div>
</template>

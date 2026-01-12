<script setup lang="ts">

    defineProps<{
        prevPageUrl?: string | null
        nextPageUrl?: string | null
        totalPerPage: number
    }>()

    const emit = defineEmits<{
        (e: 'go', url: string): void
    }>()

</script>

<template>
    <div class="flex justify-between items-center mt-12 flex-wrap gap-4 p-4">
        <div>
            <span class="dark:text-gray-300"> Por página <span class="font-extrabold"> {{ totalPerPage }} </span> </span>
        </div>
        <div class="flex justify-between items-center gap-x-2 sm:gap-x-4">
            <button
                v-if="prevPageUrl"
                class="bg-gray-100 text-gray-500 dark:bg-dark-extralight dark:text-gray-400 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 flex items-center gap-x-2 font-extrabold"
                @click="emit('go', prevPageUrl)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                        Anterior
            </button>
            <button
                v-if="nextPageUrl"
                class="px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 bg-indigo-500 text-white flex items-center gap-x-2 font-extrabold"
                @click="emit('go', nextPageUrl)">
                    Siguiente
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>
        </div>
    </div>
</template>
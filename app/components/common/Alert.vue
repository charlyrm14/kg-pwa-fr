<script setup lang="ts">

    type AlertProps = {
        title?: string
        description?: string
    }

    withDefaults(defineProps<AlertProps>(), {
        title: 'Éxito',
        description: 'Tarea éxitosa'
    })

    defineEmits(['closeFavoritesAlert'])

</script>

<template>
<div 
        class="fixed top-4 left-1/2 w-[90%] sm:w-[50%] max-w-md transform -translate-x-1/2 z-50 px-4 py-3 rounded-lg shadow-xl animate-fade-in bg-white dark:bg-black transition-all border border-gray-100 dark:border-none"
        role="alert"
        aria-live="polite">

            <div class="flex justify-between items-center gap-x-12">
                <div class="flex items-start gap-x-4">
                    <div 
                        class="p-2 rounded-lg border border-gray-100 bg-green-100">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                class="lucide lucide-circle-check-big-icon lucide-circle-check-big text-green-500">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                                    <path d="m9 11 3 3L22 4"/>
                            </svg>
                    </div>
                    <div>
                        <p class="text-sm font-light dark:text-gray-400"> 
                            {{ title }}
                                <span class="block text-base dark:text-white"> {{ description }}</span> 
                        </p>
                    </div>
                </div>
                <button 
                    @click="$emit('closeFavoritesAlert')"
                    class="text-gray-500 cursor-pointer hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                </button>
            </div>

    </div>
</template>

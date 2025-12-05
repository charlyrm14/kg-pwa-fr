<script setup lang="ts">
    import type { AlertType } from '#imports';
    import { getAlertColor, getAlertIcon } from '#imports';

    const props = withDefaults(
        defineProps<{
            title?: string
            description?: string
            type?: AlertType
        }>(), 
        {
            title: 'Éxito',
            description: 'Tarea exitosa',
            type: 'success'
        }
    )

    const alertColor = computed(() => getAlertColor(props.type))
    const alertIcon = computed(() => getAlertIcon(props.type))

</script>

<template>
    <div class="fixed top-4 left-1/2 w-[90%] sm:w-[50%] max-w-md transform -translate-x-1/2 z-50 px-4 py-3 rounded-lg shadow-xl animate-fade-in bg-white dark:bg-black transition-all border border-gray-100 dark:border-none" role="alert" aria-live="polite">
            <div class="flex justify-between items-center gap-x-12">
                <div class="flex items-start gap-x-4">
                    <div 
                        :class="'p-2 rounded-lg border border-gray-100 dark:border-none bg-' + alertColor + '-100'">
                            <span v-html="alertIcon"></span>
                    </div>
                    <div>
                        <p class="text-sm font-light dark:text-gray-400"> 
                            {{ title }}
                                <span class="block text-base dark:text-white"> {{ description }}</span> 
                        </p>
                    </div>
                </div>
                <button 
                    class="text-gray-500 cursor-pointer hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                </button>
            </div>
    </div>
</template>

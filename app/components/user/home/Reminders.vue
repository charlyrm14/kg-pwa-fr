<script setup lang="ts">
    import type { LastReminderHome } from '#imports';

    defineProps<{
        reminder: LastReminderHome
    }>()

</script>

<template>
    <section class="mt-6 space-y-3">
        <div class="flex justify-between items-center">
            <h2 class="dark:text-white font-extrabold text-xl"> Recordatorio </h2>
        </div>
        <div class="p-4 rounded-xl shadow-2xl bg-gradient-to-br from-red-900 to-gray-800 border border-red-700 transition duration-300 transform hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,50,50,0.4)]">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-red-700/50 border border-red-500/50 flex items-center justify-center text-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.4 2.148-1.4 2.913 0l5.503 10.02c.765 1.4-.207 3.099-1.57 3.099H4.324c-1.363 0-2.335-1.699-1.57-3.099l5.503-10.02zM10 13a1 1 0 100-2 1 1 0 000 2zm0-4a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                </div>                    
                <div class="flex flex-col">
                    <h3 class="text-white text-sm md:text-base"> {{ reminder?.title ?? 'Unknown' }} </h3>                        
                    <p class="text-sm md:text-lg text-gray-300 font-extrabold">
                        {{ reminder?.subtitle ?? 'Unknown' }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

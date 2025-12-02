<script setup lang="ts">
    import type { UserProfileData } from '#imports';

    defineProps<{
        user: UserProfileData | null
    }>()

</script>

<template>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-2 shadow hover:opacity-75">
        <div class="flex justify-between items-start">
            <div class="flex items-center gap-x-4">
                <div class="bg-purple-200 p-1 rounded-lg text-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                </div>
                <p class="dark:text-white text-xs font-light gap-1"> 
                    Desafío <span class="block text-sm md:text-base"> Nada un total de 5km  </span>
                </p>
            </div>
            <div>
                <span class="text-xs text-gray-400"> 20 Sep, 2025 </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import type { UserProfileData } from '#imports';

    defineProps<{
        user: UserProfileData | null
    }>()

</script>

<template>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 shadow">
        <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-soft">
            <div class="flex justify-between items-center dark:text-white gap-x-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake-icon lucide-cake"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>
                <p class="dark:text-white font-bold">
                    {{ user?.profile?.birthdate ?? '--/--/--' }} <span class="block text-sm font-light"> Fecha nacimiento </span>
                </p>
            </div>
            <button class="bg-gray-100 dark:bg-dark-soft dark:text-gray-400 cursor-pointer hover:opacity-75 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
            </button>
        </div>
        <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft mt-3">
            <div class="flex justify-between items-center dark:text-white gap-x-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                <p class="dark:text-white font-bold">
                    (+{{ user?.profile?.lada ?? '00' }}) {{ user?.profile?.phone_number ?? 'unknown' }} <span class="block text-sm font-light"> Telefóno </span>
                </p>
            </div>
        </div>
        <div class="flex justify-between items-center mt-3">
            <div class="flex justify-between items-center dark:text-white gap-x-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-venus-icon lucide-venus"><path d="M12 15v7"/><path d="M9 19h6"/><circle cx="12" cy="9" r="6"/></svg>
                <p class="dark:text-white font-bold">
                    {{ user?.profile?.gender ?? '--' }} <span class="block text-sm font-light"> Genero </span>
                </p>
            </div>
        </div>
    </div>
</template>

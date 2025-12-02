<script setup lang="ts">
    import SectionTitle from '../shared/SectionTitle.vue';
    import QRLink from '~/assets/media/github-cramos.png';
    import type { UserProfileData } from '#imports';

    defineProps<{
        user: UserProfileData | null
    }>()

</script>

<template>
    <div class="flex justify-start">
        <img 
            :src="QRLink" 
            alt="Qr profile"
            class="rounded-lg w-50">
    </div>
    <div class="mt-4 flex justify-start">
        <p class="dark:text-white text-xs"> Escanea QR </p>
    </div>
    <div class="mt-6">
        <SectionTitle title="Otros"/>
    </div>
    <div class="flex justify-start items-center gap-x-4 mt-2">
        <button
            class="bg-gray-200 dark:bg-dark-soft text-gray-500 dark:text-white p-3 rounded-full cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
        </button>
        <button
            class="bg-gray-200 dark:bg-dark-soft text-gray-500 dark:text-white p-3 rounded-full cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </button>
        <button
            class="bg-gray-200 dark:bg-dark-soft text-gray-500 dark:text-white p-3 rounded-full cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
        </button>
    </div>
</template>
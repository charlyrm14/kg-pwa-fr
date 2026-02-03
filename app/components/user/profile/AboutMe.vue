<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
    import type { UserProfileResponse } from '#imports';

    defineProps<{
        user: UserProfileResponse | null
    }>()

</script>

<template>
    <SectionTitle title="Sobre mí"/>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 shadow mb-4 flex flex-row-reverse justify-between items-start">
        <div class="flex justify-end items-center">
            <button class="bg-gray-100 dark:bg-dark-soft dark:text-gray-400 cursor-pointer hover:opacity-75 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
            </button>
        </div>
        <p class="dark:text-white font-extralight mt-3">
            {{ user?.profile?.about_me ?? 'Este usuario no ha agregado una descripción sobre sí mismo.' }}
        </p>
    </div>
</template>
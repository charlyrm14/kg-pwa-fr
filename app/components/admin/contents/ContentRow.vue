<script setup lang="ts">
    import type { Content } from '#imports';
    import { 
        colorByContentType, 
        contentSectionTitle,
        useModalManager
    } from '#imports';

    const { open } = useModalManager()

    const props = defineProps<{
        content: Content
    }>()

    const showActionsContent = ref<boolean>(false)

    const linkContent = computed(() => {
        return props.content.type.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
    })

</script>

<template>
    <div class="w-full bg-gray-200 dark:bg-dark-extralight py-2 px-4 rounded-lg space-y-2 cursor-pointer hover:opacity-75">
        <div class="flex justify-start items-center gap-x-4">
            <span 
                class="text-xs rounded-4xl px-2 font-bold text-white"
                :class="colorByContentType(content?.type)"> 
                    {{ contentSectionTitle(content?.type) }}
            </span>
            <span class="text-xs inline-flex items-center gap-x-1 dark:text-gray-400"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-fold-icon lucide-calendar-fold"><path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M15 22v-5a1 1 0 0 1 1-1h5"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/></svg>
                    {{ content?.created_at }} 
            </span>
        </div>
        <div class="flex justify-between items-start">
            <div>
                <p class="dark:text-white font-extrabold text-lg"> {{ content?.name }} </p>
                <span class="block text-sm dark:text-gray-300"> {{ content?.content.slice(0, 120) }} </span>
                <span class="inline-flex items-center gap-x-1 text-sm dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        {{ content?.author }}
                </span>
            </div>
            <div class="dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </div>
        </div>
    </div>
</template>
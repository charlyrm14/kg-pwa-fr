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
            <div class="relative">
                <button 
                    class="dark:text-white cursor-pointer hover:opacity-75 rounded-full p-1"
                    @click="showActionsContent = !showActionsContent"
                    :class="showActionsContent ? 'dark:bg-dark bg-gray-400/50' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div 
                    v-if="showActionsContent"
                    class="absolute -bottom-24 right-2 bg-white border border-gray-200 dark:border-none dark:bg-dark rounded-4xl shadow-xl w-40 z-50">
                        <div class="px-2 py-2 ">
                            <button class="dark:text-gray-400 text-base inline-flex items-center gap-x-2 font-light px-3 py-1 cursor-pointer hover:text-blue-500 hover:font-bold rounded-lg w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>
                                        Editar
                            </button>
                        </div> 
                        <div class="px-2 py-2">
                            <button
                                v-if="content"
                                class="dark:text-gray-400 text-base inline-flex items-center gap-x-2 font-light px-3 py-1 cursor-pointer hover:text-red-500 hover:font-bold rounded-lg w-full"
                                @click="open('DeleteContentModal', {
                                    content: { 
                                        name: content?.name, 
                                        slug: content?.slug
                                    }
                                })">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                        Eliminar
                            </button>
                        </div> 
                </div>
            </div>
        </div>
    </div>
</template>
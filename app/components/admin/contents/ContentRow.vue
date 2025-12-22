<script setup lang="ts">
    import type { Content } from '#imports';
    import { colorByContentType, contentSectionTitle, contentStatusColor } from '#imports';

    const props = defineProps<{
        content: Content
    }>()

    const showActionsContent = ref<boolean>(false)
</script>

<template>
    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
        <div class="w-2/5 flex-shrink-0 px-2 font-medium">
            <div class="flex items-start gap-x-4">
                <div class="bg-gray-100 dark:bg-dark-extralight p-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                </div>
                <div>
                    <p class="font-bold text-base text-blue-500 cursor-pointer"> 
                        {{ content?.name.slice(0, 70) }}
                    </p>
                    <p class="inline-flex gap-x-2 text-sm dark:text-gray-500 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-pen-icon lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
                            {{ content?.author }}
                    </p>
                </div>
            </div>
        </div>
        <div class="w-1/5 flex-shrink-0 px-2">
            <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white" :class="colorByContentType(content?.type)">
                {{ contentSectionTitle(content?.type) }}
            </span>
        </div>
        <div class="w-1/5 flex-shrink-0 px-2">
            <p :class="contentStatusColor(content?.status)"> {{ content?.status }} <span class="block text-black dark:text-white font-bold"> {{ content?.created_at }} </span> </p>
        </div>
        <div class="w-1/5 flex-shrink-0 px-2 relative">
            <button
                @click="showActionsContent = !showActionsContent"
                class="bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 text-sm inline-flex gap-x-1">
                    Acciones
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="lucide"
                            :class="!showActionsContent ? 'lucide-chevron-down-icon lucide-chevron-down' : 'lucide-chevron-up-icon lucide-chevron-up'">
                                <path :d="!showActionsContent ? 'm6 9 6 6 6-6' : 'm18 15-6-6-6 6'"/>
                        </svg>
            </button>
            <div 
                v-if="showActionsContent"
                class="absolute -bottom-26 -left-9 bg-white border border-gray-200 dark:border-none dark:bg-dark-extralight rounded-lg shadow-xl w-40 z-50">
                    <div class="px-2 py-2 ">
                        <button class="dark:text-gray-400 text-base inline-flex items-center gap-x-2 font-light px-3 py-1 cursor-pointer hover:text-blue-500  rounded-lg w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>
                                    Editar
                        </button>
                    </div> 
                    <div class="px-2 py-2">
                        <button
                            class="dark:text-gray-400 text-base inline-flex items-center gap-x-2 font-light px-3 py-1 cursor-pointer hover:text-red-500  rounded-lg w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                    Eliminar
                        </button>
                    </div> 
            </div>
        </div>
    </div>
</template>
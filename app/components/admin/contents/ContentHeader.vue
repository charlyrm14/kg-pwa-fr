<script setup lang="ts">
    import { useModalManager } from '#imports';
    import { useContentStore } from '~/stores/contents';
    import type { ContentTypeFilter } from '~~/shared/types/Content';

    const { open } = useModalManager()
    const contentStore = useContentStore()

    const showFilterContent = ref<boolean>(false)
    const contentTypeSelected = ref<ContentTypeFilter>('todo')

    const filterContentType = (contentType: ContentTypeFilter) => {
        contentTypeSelected.value = contentType
        contentStore.contentTypeFilter = contentType
    }

</script>

<template>
    <div class="flex justify-between items-center flex-wrap gap-4 p-4">
        <div class="relative w-full sm:w-auto">
            <input 
                type="search" 
                id="search"
                name="search"
                placeholder="Search contents" 
                class="w-full sm:w-auto bg-gray-200 border border-gray-100 px-10 py-2 rounded-4xl text-gray-600 focus:outline-none dark:bg-dark-extralight dark:border-none dark:text-gray-400">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="lucide lucide-search-icon lucide-search absolute top-2 left-2 text-gray-400 dark:text-gray-500">
                    <path d="m21 21-4.34-4.34"/>
                    <circle cx="11" cy="11" r="8"/>
                </svg>
        </div>
        
        <div class="flex justify-between md:flex-wrap gap-2 sm:space-x-4 w-full md:w-auto">
            <div class="relative w-full md:w-auto">
                <button
                    @click="showFilterContent = !showFilterContent"
                    class="inline-flex items-center gap-x-2  px-4 py-2 rounded-4xl cursor-pointer w-full"
                    :class="showFilterContent ? 'bg-pink-500 text-white' : 'bg-gray-200 dark:bg-dark-extralight text-gray-600 dark:text-gray-400 cursor-pointer hover:opacity-75'">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="22" 
                            height="22" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="lucide lucide-funnel-icon lucide-funnel">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>
                        </svg> Filtrar
                </button>
                <div 
                    v-if="showFilterContent"
                    class="absolute -bottom-90 md:-left-54 bg-white dark:bg-dark-light border border-gray-100 dark:border-dark-soft rounded-4xl w-80 shadow z-50">
                        <div class="border-b border-gray-100 dark:border-dark-soft p-4 flex justify-between items-center">
                            <p class="dark:text-white"> Opciones de filtro </p>
                            <button 
                                class="dark:text-gray-400 cursor-pointer hover:opacity-75"
                                @click="showFilterContent = !showFilterContent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>
                        <div class="p-2 m-1 space-y-2">
                            <p class="dark:text-gray-300 font-bold mb-3"> Tipo de contenido: </p>

                            <button 
                                class="px-3 py-1 md:py-2 bg-gray-200 dark:bg-dark-extralight rounded-4xl w-full text-start cursor-pointer hover:opacity-75"
                                @click="filterContentType('todo')"
                                :class="contentTypeSelected === 'todo' ? 'text-blue-500 border border-blue-500 font-extrabold' : 'dark:text-white'">
                                    Todo
                            </button>

                            <button 
                                class="px-3 py-1 md:py-2 bg-gray-200 dark:bg-dark-extralight rounded-4xl w-full text-start cursor-pointer hover:opacity-75"
                                @click="filterContentType('noticias')"
                                :class="contentTypeSelected === 'noticias' ? 'text-amber-500 border border-amber-500 font-extrabold' : 'dark:text-white'">
                                    Noticias
                            </button>

                            <button 
                                class="px-3 py-1 md:py-2 bg-gray-200 dark:bg-dark-extralight rounded-4xl w-full text-start cursor-pointer hover:opacity-75"
                                @click="filterContentType('eventos')"
                                :class="contentTypeSelected === 'eventos' ? 'text-purple-500 border border-purple-500 font-extrabold' : 'dark:text-white'">
                                    Eventos
                            </button>

                            <button 
                                class="px-3 py-1 md:py-2 bg-gray-200 dark:bg-dark-extralight rounded-4xl w-full text-start cursor-pointer hover:opacity-75"
                                @click="filterContentType('consejos')"
                                :class="contentTypeSelected === 'consejos' ? 'text-pink-500 border border-pink-500 font-extrabold' : 'dark:text-white'">
                                    Consejos
                            </button>

                            <button 
                                class="px-3 py-1 md:py-2 bg-gray-200 dark:bg-dark-extralight rounded-4xl w-full text-start cursor-pointer hover:opacity-75"
                                @click="filterContentType('nutricion')"
                                :class="contentTypeSelected === 'nutricion' ? 'text-lime-500 border border-lime-500 font-extrabold' : 'dark:text-white'">
                                    Nutrición
                            </button>

                        </div>
                </div>
            </div>
            <button
                class="inline-flex justify-center items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded-4xl cursor-pointer hover:opacity-75 w-full md:w-auto"
                @click="open('SelectContentTypeModal')"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus2-icon lucide-file-plus-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>
                        Agregar
            </button>
        </div>
    </div>
</template>
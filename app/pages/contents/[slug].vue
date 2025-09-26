<script setup lang="ts">
    import PageHeader from '~/components/user/shared/PageHeader.vue';
    import { contentTitle } from '#imports';

    type ContentSlug = 'news' | 'events' | 'tips' | 'nutrition';

    const route = useRoute()

    const isUploading = ref<boolean>(false)

    const uploadContent = () => {
        isUploading.value = true
        setTimeout(() => {
            isUploading.value = false
        }, 3000);
    }

    const pageHeaderTitle = computed<ContentSlug>(() => {
        const slug = route.params.slug
        if (slug === 'events' || slug === 'tips' || slug === 'nutrition') {
            return slug
        }
        return 'news'
    })

</script>

<template>

    <PageHeader
        :title="contentTitle(pageHeaderTitle)"/>

    <section class="mt-6">
        <div class="relative flex items-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search absolute left-3 size-5 text-gray-400 dark:text-gray-300"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
            <input 
                type="text" 
                placeholder="Buscar..." 
                class="w-full pl-10 p-3 border rounded-full focus:outline-none border-gray-100 bg-white dark:bg-dark-extralight dark:border-dark-extralight dark:text-white shadow" />
        </div>
    </section>
    
    <section class="mt-6">
        <NuxtLink
            to="/contents/news">
                <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-dark-extralight rounded-lg px-3 py-2  shadow">
                    <div class="flex items-start gap-4">                
                        <div class="flex-shrink-0">
                            <img
                                src="https://nadaconexceso.com/wp-content/uploads/2021/04/Nataci%C3%B3n-Qu%C3%A9-es-y-sus-caracter%C3%ADsticas-Nada-con-exceso.jpg"
                                alt="Noticia"
                                class="w-36 h-28 md:w-48 md:h-36 object-cover rounded-lg brightness-50">
                        </div>
                        <div class="flex-grow flex flex-col justify-between">
                            <p class="inline-flex items-center gap-x-2 text-gray-400 font-light text-sm md:text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                <span> Jhon Williams </span>
                            </p>
                            <h2 class="text-pink-500 font-medium text-base md:text-2xl my-3 md:my-0 leading-snug">
                                México suma plata y bronce en Mundial de Para Natación 2025
                            </h2>
                            <p class="hidden md:block my-1 text-gray-600 dark:text-gray-300">
                                México sumó una medalla de plata y otra de bronce en el Mundial de Para Natación Singapur 2025, pruebas que se realizaron en el Centro Acuático OCBC.
                            </p>
                            <p class="inline-flex items-center gap-x-2 text-xs md:text-base text-gray-400 font-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1"><path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                                <span> 25 Septiembre, 2025 </span>
                            </p>
                        </div>
                    </div>
                </div>
        </NuxtLink>
    </section>

    <section class="mt-8 flex justify-center">
        <button
            @click="uploadContent"
            :disabled="isUploading"
            class="w-full md:w-120 p-3 rounded-lg hover:opacity-75 text-lg transition"
            :class="!isUploading ? 'bg-blue-500 text-white cursor-pointer' : 'bg-blue-400 text-white cursor-not-allowed'">
                {{ !isUploading ? 'Cargar más' : 'Cargando...'}}
        </button>
    </section>

</template>

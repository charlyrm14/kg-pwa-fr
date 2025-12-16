<script setup lang="ts">
    import PageHeader from '~/components/user/shared/PageHeader.vue';
    import { contentTitle } from '#imports';
    import ContentItem from '~/components/user/contents/ContentItem.vue';
    import { useContentStore } from '~/stores/contents';
    
    const contentStore = useContentStore()

    const isUploading = ref<boolean>(false)

    const { data: contents } = await useAsyncData('contents', async () => {
            await contentStore.fetchContents()
            return contentStore.contents ?? { data: [] }
        }
    )

    const { 
        pageHeaderTitle, 
        contentFilter 
    } = useContentFilter(contents.value?.data)

    const uploadContent = () => {
        isUploading.value = true
        setTimeout(() => {
            isUploading.value = false
        }, 3000);
    }

</script>

<template>
    <section>

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
            <div v-if="(contentFilter || []).length > 0" class="space-y-4" v-gsap.whenVisible.stagger.from='{ opacity: 0, y: 50, stagger: 0.4 }'>
                <ContentItem
                    v-for="content in contentFilter"
                    :key="content?.slug"
                    :content="content"/>
            </div>
            <div v-else>
                <h2 class="text-pink-500 text-xl">
                    ¡Estamos preparando algo genial!
                        <span class="block my-2 text-base text-gray-600 dark:text-gray-400"> Actualmente estamos cargando contenido nuevo y emocionante. Aquí pronto encontrarás una mezcla fresca de noticias deportivas, próximos eventos de triatlón y consejos de nutrición diseñados para potenciar tu rendimiento. Vuelve pronto para descubrir lo último. </span>
                </h2>
            </div>
        </section>

        <section
            v-if="(contentFilter || []).length > 0"
            class="mt-8 flex justify-center">
                <button
                    @click="uploadContent"
                    :disabled="isUploading"
                    class="w-full md:w-120 p-3 rounded-4xl hover:opacity-75 text-lg transition"
                    :class="!isUploading ? 'bg-blue-500 text-white cursor-pointer' : 'bg-blue-400 text-white cursor-not-allowed'">
                        {{ !isUploading ? 'Cargar más' : 'Cargando...'}}
                </button>
        </section>

    </section>
</template>

<script setup lang="ts">
    import Alert from '~/components/common/Alert.vue'
    import ShareContent from '~/components/user/contents/ShareContent.vue'
    import { contentTypeImage, colorByContentType, contentSectionTitle } from '#imports'
    import { useContentStore } from '~/stores/contents'
    import { useFavorites } from '#imports'
    import { useAlert } from '#imports'
    import Training from '~/assets/media/training.png'
    
    const route = useRoute()
    const slugParam = route.params.contentSlug

    let slugContent: string

    if(Array.isArray(slugParam) || !slugParam) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Invalid slug or page not found'
        })
    } else {
        slugContent = slugParam
    }

    const contentStore = useContentStore()
    const { addToFavorites, isFavorite } = useFavorites()
    const { alert, closeAlert } = useAlert()

    const { data: content, error } = await useAsyncData('content', async () => {        
        await contentStore.fetchContentBySlug(slugContent as string)
        return contentStore.contentDetail
    })

    if (error.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page not found'
        })
    }

    const contentTab = ref<number>(1)
    const showShareModal = ref<boolean>(false)

    const closeShareModal = () => {
        showShareModal.value = false
    }
    
    const typeSlugParam = computed(() => {
        const param = route.params.typeSlug
        return Array.isArray(param) ? param[0] : param ?? 'noticias'
    })

</script>

<template>
    <section>

        <Alert v-if="alert.status" :title="alert.title" :description="alert.description" :type="alert.type" @closeAlert="closeAlert"/>

        <!-- Beginning Favorite, Share Content -->
        <section>
            <div class="flex justify-between items-center">
                <button
                    v-if="content"
                    @click="addToFavorites({
                        name: content?.name,
                        slug: content?.slug,
                        content: content?.content,
                        author: content?.author,
                        type: content?.type,
                        created_at: content?.created_at
                    })"
                    class="dark:text-white hover:text-red-500 transition-colors cursor-pointer hover:opacity-75">
                        <ClientOnly>
                            <svg v-if="isFavorite(content?.slug)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-red-500">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </ClientOnly>
                </button>
                <button 
                    @click="showShareModal = !showShareModal"
                    class="dark:text-white hover:text-blue-400 transition-colors cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                </button>
            </div>
        </section>
        <!-- End Favorite, Share Content -->

        <!-- Beginning Banner -->
        <section class="mt-6">
            <div class="relative">
                <img 
                    :src="Training"
                    :alt="content?.name ?? 'unknown'" 
                    class="w-full h-60 md:h-120 object-cover brightness-20 rounded-4xl"/>
                <div class="absolute bottom-6 left-4 right-4">
                    <span class="inline-block px-4 py-0.5 text-white rounded-full text-sm" :class="`${colorByContentType(content?.type)}`"> {{ contentSectionTitle(content?.type) }} </span>
                    <h1 v-gsap.whenVisible.animateText.once.fast class="text-white font-bold text-lg md:text-4xl mt-2 whitespace-normal break-words"> {{ content?.name ?? 'unknown' }} </h1>
                </div>
            </div>
        </section>
        <!-- End Banner -->

        <!-- Beginning Title Content -->
        <section class="mt-6">
            <div class="space-y-2">
                <p class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1"><path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                        <span class="block text-sm font-light"> Publicado el {{ content?.created_at ?? '--/--/--'}} </span>
                </p>
            </div>
        </section>
        <!-- End Title Content -->

        <!-- Beginning Tabs -->
        <section class="mt-6">
            <div class="flex justify-start items-center gap-x-6">
                <button
                    @click="contentTab = 1" 
                    class="cursor-pointer hover:opacity-75 text-lg"
                    :class="contentTab === 1 ? 'border-b-4 border-blue-500 dark:text-white font-extrabold' : 'text-gray-400'"> 
                        Información 
                </button>
                <button
                    v-if="route.params.typeSlug === 'eventos'"
                    @click="contentTab = 2" 
                    class="cursor-pointer hover:opacity-75 text-lg"
                    :class="contentTab === 2 ? 'border-b-4 border-blue-500 dark:text-white font-extrabold' : 'text-gray-400'"> 
                        Detalles del evento 
                </button>
            </div>
        </section>
        <!-- End Tabs -->

        <!-- Beginning Tab Information Content -->
        <section v-if="contentTab === 1" class="my-6">
            <div>
                <p class="dark:text-white font-light"> {{ content?.content ?? 'No content' }} </p>
            </div>        
        </section>
        <!-- End Tab Information Content -->

        <!-- Beginning Tab Event Content -->
        <section v-if="contentTab === 2" class="my-6 space-y-4">
            <div class="bg-white dark:bg-dark-light rounded-2xl p-4 shadow dark:shadow-none">
                <div class="flex justify-between items-center">
                    <div class="flex justify-between items-center gap-x-4">
                        <div class="bg-pink-100 text-pink-500 rounded-xl w-15 h-15 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check2-icon lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>
                        </div>
                        <div>
                            <h4 class="dark:text-gray-400 text-base"> 
                                ¿Cúando? 
                                    <span class="block dark:text-white text-xl font-extrabold"> {{ content?.event?.start_date }} </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-dark-light rounded-2xl p-4 shadow dark:shadow-none">
                <div class="flex justify-between items-center">
                    <div class="flex justify-between items-center gap-x-4">
                        <div class="bg-violet-100 text-violet-500 rounded-2xl w-15 h-15 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock5-icon lucide-clock-5"><path d="M12 6v6l2 4"/><circle cx="12" cy="12" r="10"/></svg>
                        </div>
                        <div>
                            <h4 class="dark:text-gray-400 text-base"> 
                                ¿A Qué hora? 
                                    <span class="block dark:text-white text-xl font-extrabold"> {{ content?.event?.start_hour ?? '--/--/--' }} a {{ content?.event?.end_hour ?? '--/--/--' }} </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-dark-light rounded-2xl p-4 shadow dark:shadow-none">
                <div class="flex justify-between items-center">
                    <div class="flex justify-between items-center gap-x-4">
                        <div class="bg-blue-200 text-blue-500 rounded-xl w-15 h-15 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>
                            <h4 class="dark:text-gray-400 text-base"> 
                                ¿Dónde? 
                                    <span class="block dark:text-white text-xl font-extrabold"> {{ content?.event?.location }} </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Tab Event Content -->

        <section v-if="content?.type === 'NUTRITION'">
            <p class="text-pink-500 inline-flex items-center gap-x-2 font-extrabold"> 
                    Para resultados reales, consulta siempre a un especialista en nutrición. 
                </p>
        </section>

        <ShareContent
            v-if="showShareModal"
            @closeShareModal="closeShareModal"/>

    </section>
</template>
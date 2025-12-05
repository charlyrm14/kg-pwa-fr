<script setup lang="ts">
    import Alert from '~/components/common/Alert.vue'
    import ShareContent from '~/components/user/contents/ShareContent.vue'
    import { contentTypeImage } from '#imports'
    import { useContentStore } from '~/stores/contents'
    import { useFavorites } from '#imports'
    import { useAlert } from '#imports'

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
    const { alert } = useAlert()

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
        return Array.isArray(param) ? param[0] : param ?? 'news'
    })

</script>

<template>
    <section>

        <Alert v-if="alert.status" :title="alert.title" :description="alert.description" :type="alert.type"/>

        <section>
            <NuxtLink
                :to="`/contents/${route.params.typeSlug}`"
                class="dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </NuxtLink>
        </section>
        
        <section class="mt-2">
            <div class="flex justify-center items-start py-2">
                <div class="relative w-full mx-auto  rounded-xl overflow-hidden">

                    <div class="relative w-full h-76 lg:h-[30rem] overflow-hidden">
                        <img 
                            :src="contentTypeImage(typeSlugParam)"
                            :alt="content?.title ?? 'unknown'" 
                            class="w-full h-full object-cover brightness-25"/>
                    </div>
                    
                    <div class="p-4 pt-8">
                        <div class="relative flex items-center justify-between h-10">
                            <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-[80%] md:-translate-y-[60%] mb-2">
                                <div class="w-20 h-20 md:w-25 md:h-25 rounded-full border-4 border-white dark:border-dark-soft overflow-hidden">
                                    <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAM8Jck2fkmmr1OMvbM0JQaG0yaaJaNFZmaKt2n4YWYvfsHvQhvpr0gVA3cj87723MyU&usqp=CAU" 
                                        alt="Avatar" 
                                        class="w-full h-full object-cover"/>
                                </div>
                            </div>
                            
                            <div class="flex justify-between w-full px-4 -translate-y-2">
                                <button
                                    v-if="content"
                                    @click="addToFavorites({
                                        title: content?.title,
                                        slug: content?.slug,
                                        content: content?.content,
                                        author: content?.author,
                                        type: content?.type,
                                        created_at: content?.created_at
                                    })"
                                    class="dark:text-white hover:text-red-500 transition-colors cursor-pointer hover:opacity-75">
                                        <svg v-if="isFavorite(content?.slug)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-red-500">
                                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                </button>
                                
                                <button 
                                    @click="showShareModal = !showShareModal"
                                    class="dark:text-white hover:text-blue-400 transition-colors cursor-pointer hover:opacity-75">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section>
            <div>
                <h1 
                    v-gsap.whenVisible.animateText.once.fast
                    class="dark:text-white font-bold text-2xl"> {{ content?.title ?? 'unknown' }} </h1>
                <p class="inline-flex items-center gap-2 dark:text-white mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1"><path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                        <span class="block text-sm font-light"> Publicado el {{ content?.created_at ?? '--/--/--'}} </span>
                </p>
            </div>
        </section>

        <section class="mt-6">
            <div class="flex justify-start items-center gap-x-6 bg-white dark:bg-dark-extralight px-4 py-2 rounded-lg shadow">
                <button
                    @click="contentTab = 1" 
                    class="cursor-pointer hover:opacity-75 text-lg"
                    :class="contentTab === 1 ? 'border-b-4 border-blue-500 dark:text-white' : 'text-gray-400'"> 
                        Información 
                </button>
                <button
                    v-if="route.params.typeSlug === 'events'"
                    @click="contentTab = 2" 
                    class="cursor-pointer hover:opacity-75 text-lg"
                    :class="contentTab === 2 ? 'border-b-4 border-blue-500 dark:text-white' : 'text-gray-400'"> 
                        Detalles del evento 
                </button>
            </div>
        </section>

        <section v-if="contentTab === 1" class="my-6">
            <div class="bg-white dark:bg-dark-extralight rounded-lg p-3 shadow border border-gray-200 dark:border-none">
                <p class="dark:text-white font-light">
                    {{ content?.content ?? 'No content' }}
                </p>
            </div>        
        </section>

        <section v-else class="my-6">
            <div class="bg-white dark:bg-dark-extralight rounded-lg p-3 shadow border border-gray-200 dark:border-none">
                <div>
                    <p class="text-gray-600 dark:text-gray-400 font-light inline-flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1"><path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                            ¿Cúando?
                    </p>
                    <p class="dark:text-white text-base md:text-lg gap-1"> 
                        {{ content?.event?.start_date }}
                    </p>
                </div>
                <div class="mt-4">
                    <p class="text-gray-600 dark:text-gray-400 font-light inline-flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                            ¿A Qué hora?
                    </p>
                    <p class="dark:text-white text-base md:text-lg gap-1"> 
                        {{ content?.event?.start_hour ?? '--/--/--' }} a {{ content?.event?.end_hour ?? '--/--/--' }}
                    </p>
                </div>
                <div class="mt-4">
                    <p class="text-gray-600 dark:text-gray-400 font-light inline-flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                            ¿Dónde?
                    </p>
                    <p class="dark:text-white text-base md:text-lg gap-1"> 
                        {{ content?.event?.location }}
                    </p>
                </div>
            </div>
        </section>

        <ShareContent
            v-if="showShareModal"
            @closeShareModal="closeShareModal"/>
    </section>
</template>
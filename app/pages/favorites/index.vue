<script setup lang="ts">
    import { useFavorites } from '#imports';
    import CoverCard  from '~/assets/media/card-news.png'
    import Hearth from '~/assets/media/hearth.png'
    import { useAlert } from '#imports';
    import Alert from '~/components/common/Alert.vue';
    import { colorByContentType } from '#imports';
    import { contentSectionTitle } from '#imports';
    
    const { favorites, removeFromFavorite } = useFavorites()
    const { alert, closeAlert } = useAlert()

</script>

<template>
    <section>

        <Alert v-if="alert.status" :title="alert.title" :description="alert.description" :type="alert.type" @closeAlert="closeAlert"/>

        <section class="space-y-3">
            <div class="px-3 mb-6">
                <h2 class="dark:text-white text-lg"> Favoritos </h2>
                <span class="text-gray-500 dark:text-gray-400 text-sm"> Explora tus artículos favoritos </span>
            </div>
            <ClientOnly>
            <template v-if="(favorites || []).length > 0">
                <div  v-for="(favorite, index) in favorites" :key="index" class="bg-white dark:bg-dark-light rounded-4xl p-3.5 shadow dark:shadow-none flex justify-between gap-x-4 items-start">
                    <NuxtLink 
                        :to="`/contents/${favorite?.type.toLowerCase()}/${favorite?.slug}`"
                        class="shrink-0">
                            <img :src="CoverCard" :alt="favorite?.name" class="w-30 h-20 object-cover rounded-2xl brightness-60"/>
                    </NuxtLink>
                    <div class="w-full">
                        <div class="flex justify-between">
                            <div>
                                <NuxtLink :to="`/contents/${favorite?.type.toLowerCase()}/${favorite?.slug}`">
                                    <h2 class="text-pink-500 text-sm md:text-base font-extrabold md:hidden">  {{ favorite?.name.slice(0, 30) ?? 'unknown' }}... </h2>
                                </NuxtLink>
                                <NuxtLink :to="`/contents/${favorite?.type.toLowerCase()}/${favorite?.slug}`">
                                    <h2 class="text-pink-500 text-sm md:text-base font-extrabold break-words hidden md:block"> {{ favorite?.name.slice(0, 30) ?? 'unknown' }}... </h2>
                                </NuxtLink>
                                <span class="hidden md:block text-gray-400"> {{ favorite?.content.slice(0, 100) ?? 'unknown' }} ... </span>
                                <span class="text-sm text-white my-2 rounded-lg px-2" :class="`${colorByContentType(favorite?.type)}`">
                                    {{ contentSectionTitle(favorite?.type) }}
                                </span>
                            </div>

                            <div>
                                <button @click="removeFromFavorite(favorite?.slug)" class="bg-gray-100 dark:bg-dark-soft p-1 rounded-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-red-500">
                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="flex justify-center">
                    <img :src="Hearth" alt="Tu lista de favoritos está vacía" class="w-[50%] drop-shadow-lg drop-shadow-red-500" />
                </div>
                <h4 class="text-red-500 text-center font-bold"> Tu lista de favoritos está vacía. <span class="block font-light"> ¡Explora y guarda lo que más te guste! </span> </h4>
            </template>
            </ClientOnly>
        </section>

    </section>
</template>

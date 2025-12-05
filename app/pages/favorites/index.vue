<script setup lang="ts">
    import { useFavorites } from '#imports';
    import CoverCard  from '~/assets/media/card-news.png'
    import Hearth from '~/assets/media/hearth.png'
    import { useAlert } from '#imports';
    import Alert from '~/components/common/Alert.vue';
    import { colorByContentType } from '#imports';
    
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
                <div  v-for="(favorite, index) in favorites" :key="index" class="p-3 flex justify-between gap-x-4 items-start cursor-pointer rounded-lg bg-white hover:opacity-75 dark:bg-dark-light dark:hover:bg-dark-extralight">
                    <NuxtLink 
                        :to="`/contents/${favorite?.type.toLowerCase()}/${favorite?.slug}`"
                        class="group overflow-hidden rounded-full aspect-square w-25 transition-all duration-300 hover:bg-gray-200/30 dark:hover:bg-dark-light/40">
                            <img :src="CoverCard" :alt="favorite?.title" class="w-full h-full object-cover"/>
                    </NuxtLink>
                    <div class="border-b border-gray-200 dark:border-dark-soft w-full pb-2">
                        <div class="flex justify-between">
                            <div>
                                <NuxtLink :to="`/contents/${favorite?.type.toLowerCase()}/${favorite?.slug}`">
                                    <h1 class="dark:text-white">
                                        {{ favorite?.title.slice(0, 30) ?? 'unknown' }}...
                                    </h1>
                                </NuxtLink>
                                <span class="text-sm text-white my-2 rounded-lg px-2" :class="`${colorByContentType(favorite?.type)}`">
                                    {{ favorite?.type }}
                                </span>
                                <span class="block text-xs dark:text-gray-400 my-2">
                                    {{ favorite?.created_at }}
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

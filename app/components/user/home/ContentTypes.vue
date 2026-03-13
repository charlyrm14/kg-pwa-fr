<script setup lang="ts">
    import NewsSection from '~/assets/media/news-section.png'
    import EventSection from '~/assets/media/event-section.png'
    import TipsSection from '~/assets/media/tips-section.png'
    import NutritionSection from '~/assets/media/nutrition-section.png'

</script>

<template>
    <section class="mt-6 space-y-3">
        <div class="flex justify-between items-center">
            <h2 class="dark:text-white font-extrabold text-xl"> Explora </h2>
        </div>
        <div class="flex gap-6 overflow-x-auto">
            <NuxtLink to="/contents/noticias" class="bg-amber-100 rounded-xl p-3 cursor-pointer hover:opacity-75 transition-colors overflow-hidden flex-shrink-0 w-fit">
                <div class="flex justify-between items-center gap-x-4">
                    <div>
                        <img :src="NewsSection" alt="Sección noticias" loading="lazy" class="w-12 h-12 drop-shadow drop-shadow-amber-300">
                    </div>
                    <div>
                        <h4 class="text-amber-500 font-extrabold text-xl"> Noticias </h4>
                        <span class="text-xs text-gray-700"> Novedades del mundo deportivo </span>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/contents/eventos" class="bg-purple-100 rounded-xl p-3 cursor-pointer hover:opacity-75 transition-colors overflow-hidden flex-shrink-0 w-fit">
                <div class="flex justify-between items-center gap-x-4">
                    <div class="text-purple-500">
                        <img :src="EventSection" alt="Sección eventos" loading="lazy" class="w-12 h-12 drop-shadow drop-shadow-purple-500">
                    </div>
                    <div>
                        <h4 class="text-purple-500 font-extrabold text-xl"> Eventos </h4>
                        <span class="text-xs text-gray-700"> No te pierdas ningún evento </span>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/contents/consejos" class="bg-pink-100 rounded-xl p-3 cursor-pointer hover:opacity-75 transition-colors overflow-hidden flex-shrink-0 w-fit">
                <div class="flex justify-between items-center gap-x-4">
                    <div class="text-pink-500">
                        <img :src="TipsSection" alt="Sección tips" loading="lazy" class="w-12 h-12 drop-shadow drop-shadow-pink-500">
                    </div>
                    <div>
                        <h4 class="text-pink-500 font-extrabold text-xl"> Tips </h4>
                        <span class="text-xs text-gray-700"> Domina el arte de nadar </span>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/contents/nutricion" class="bg-lime-100 rounded-xl p-3 cursor-pointer hover:opacity-75 transition-colors overflow-hidden flex-shrink-0 w-fit">
                <div class="flex justify-between items-center gap-x-4">
                    <div class="text-lime-500">
                        <img :src="NutritionSection" alt="Sección nutrición" loading="lazy" class="w-12 h-12 drop-shadow drop-shadow-lime-300">
                    </div>
                    <div>
                        <h4 class="text-lime-500 font-extrabold text-xl"> Alimentación </h4>
                        <span class="text-xs text-gray-700"> Cuida tu alimentación </span>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

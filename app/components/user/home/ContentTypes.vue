<script setup lang="ts">
    import CoverCardNews from '~/assets/media/card-news.png';
    import CoverCardEvents from '~/assets/media/card-events.png';
    import CoverCardTips from '~/assets/media/card-tips.png';
    import CoverCardNutrition from '~/assets/media/card-nutrition.png';
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
</script>

<template>
    <section>
        
        <SectionTitle
            title="Para ti"
            :showIcon="true"
            align="between"/>

        <div class="flex gap-6 overflow-x-auto">
            <NuxtLink
                to="/contents/news"
                class="relative w-76 h-76 overflow-hidden rounded-xl shadow-lg flex-shrink-0">
                    <picture>
                        <img 
                            :src="CoverCardNews" 
                            alt="Noticias" 
                            class="absolute inset-0 w-full h-full object-cover brightness-50"
                            loading="lazy"/>
                    </picture>
                    <div class="absolute inset-x-0 bottom-4 mx-4 p-4 rounded-xl backdrop-blur-md bg-white/30 text-white">
                        
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="font-bold text-lg"> Noticias </h3>
                                <p class="text-xs md:text-md font-light"> Novedades del mundo deportivo </p>
                            </div>
                            <button class="flex items-center justify-center w-10 h-10 bg-white/40 rounded-full shadow-md cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>
            </NuxtLink>
            <NuxtLink 
                to="/contents/events"
                class="relative w-76 h-76 overflow-hidden rounded-xl shadow-lg flex-shrink-0">
                    <picture>
                        <img 
                            :src="CoverCardEvents" 
                            alt="Eventos" 
                            class="absolute inset-0 w-full h-full object-cover brightness-50"
                            loading="lazy"/>
                    </picture>
                    <div class="absolute inset-x-0 bottom-4 mx-4 p-4 rounded-xl backdrop-blur-md bg-white/30 text-white">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="font-bold text-lg"> Eventos </h3>
                                <p class="text-xs md:text-md font-light"> No te pierdas ningún evento </p>
                            </div>
                            <button class="flex items-center justify-center w-10 h-10 bg-white/40 rounded-full shadow-md cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>
            </NuxtLink>
            <NuxtLink 
                to="/contents/tips"
                class="relative w-76 h-76 overflow-hidden rounded-xl shadow-lg flex-shrink-0">
                    <picture>
                        <img 
                            :src="CoverCardTips" 
                            alt="Tips" 
                            class="absolute inset-0 w-full h-full object-cover brightness-50"
                            loading="lazy"/>
                    </picture>
                    <div class="absolute inset-x-0 bottom-4 mx-4 p-4 rounded-xl backdrop-blur-md bg-white/30 text-white">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="font-bold text-lg"> Tips </h3>
                                <p class="text-xs md:text-md font-light"> Domina el arte de nadar</p>
                            </div>
                            <button class="flex items-center justify-center w-10 h-10 bg-white/40 rounded-full shadow-md cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>
            </NuxtLink>
            <NuxtLink
                to="/contents/nutrition"
                class="relative w-76 h-76 overflow-hidden rounded-xl shadow-lg flex-shrink-0">
                    <picture>
                        <img 
                            :src="CoverCardNutrition" 
                            alt="Nutricion" 
                            class="absolute inset-0 w-full h-full object-cover brightness-50"
                            loading="lazy"/>
                    </picture>
                    <div class="absolute inset-x-0 bottom-4 mx-4 p-4 rounded-xl backdrop-blur-md bg-white/30 text-white">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="font-bold text-lg"> Alimentación </h3>
                                <p class="text-xs md:text-md font-light"> Cuida tu alimentación </p>
                            </div>
                            <button class="flex items-center justify-center w-10 h-10 bg-white/40 rounded-full shadow-md cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>
            </NuxtLink>
        </div>
    </section>
</template>

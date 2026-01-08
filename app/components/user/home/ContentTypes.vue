<script setup lang="ts">

</script>

<template>
    <section class="mt-6 space-y-3">
        <div class="flex justify-between items-center">
            <h2 class="dark:text-white font-extrabold text-xl"> Explora </h2>
        </div>
        <div class="flex gap-6 overflow-x-auto">
            <NuxtLink to="/contents/noticias" class="w-auto h-36 bg-white dark:bg-dark-light rounded-lg overflow-hidden flex-shrink-0 p-4 cursor-pointer hover:opacity-75 shadow dark:shadow-none">
                <div class="text-amber-500 drop-shadow drop-shadow-amber-500 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                </div>
                <div class="mt-4">
                    <h4 class="dark:text-white font-extrabold text-xl"> Noticias </h4>
                    <span class="text-sm text-gray-500 dark:text-gray-400"> Novedades del mundo deportivo </span>
                </div>
            </NuxtLink>
            <NuxtLink to="/contents/eventos" class="w-auto h-36 bg-white dark:bg-dark-light rounded-lg overflow-hidden flex-shrink-0 p-4 cursor-pointer hover:opacity-75 shadow dark:shadow-none">
                <div class="text-purple-500 drop-shadow drop-shadow-purple-500 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-fold-icon lucide-calendar-fold"><path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M15 22v-5a1 1 0 0 1 1-1h5"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/></svg>
                </div>
                <div class="mt-4">
                    <h4 class="dark:text-white font-extrabold text-xl"> Eventos </h4>
                    <span class="text-sm text-gray-500 dark:text-gray-400"> No te pierdas ningún evento </span>
                </div>
            </NuxtLink>
            <NuxtLink to="/contents/consejos" class="w-auto h-36 bg-white dark:bg-dark-light rounded-lg overflow-hidden flex-shrink-0 p-4 cursor-pointer hover:opacity-75 shadow dark:shadow-none">
                <div class="text-pink-500 drop-shadow drop-shadow-pink-500 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <div class="mt-4">
                    <h4 class="dark:text-white font-extrabold text-xl"> Tips </h4>
                    <span class="text-sm text-gray-500 dark:text-gray-400"> Domina el arte de nadar </span>
                </div>
            </NuxtLink>
            <NuxtLink to="/contents/nutricion" class="w-auto h-36 bg-white dark:bg-dark-light rounded-lg overflow-hidden flex-shrink-0 p-4 cursor-pointer hover:opacity-75 shadow dark:shadow-none">
                <div class="text-lime-500 drop-shadow drop-shadow-lime-500 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-crossed-icon lucide-utensils-crossed"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>
                </div>
                <div class="mt-4">
                    <h4 class="dark:text-white font-extrabold text-xl"> Alimentación </h4>
                    <span class="text-sm text-gray-500 dark:text-gray-400"> Cuida tu alimentación </span>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<template>
    <section class="my-6 space-y-3">
        <div class="flex justify-between items-center">
            <h2 class="dark:text-white font-extrabold text-xl inline-flex items-center gap-x-3"> 
                Cumpleaños de hoy 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper-icon lucide-party-popper"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>
            </h2>
            <NuxtLink to="/birthdays" class="text-blue-500 text-sm md:text-base cursor-pointer"> Ver todos </NuxtLink>
        </div>
        <div class="flex gap-6 overflow-x-auto">
            <div class="flex flex-col items-center rounded-lg">
                <div class="relative flex-shrink-0">
                    <div class="overflow-hidden w-20 h-20 flex justify-center items-center rounded-full border-4 border-fuchsia-500">
                        <div class="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-800 flex items-center justify-center">
                            <h4 class="text-2xl font-extrabold text-white"> CR </h4>
                        </div>
                    </div>                        
                    <div class="absolute -bottom-1 -right-1 z-10">
                        <span class="inline-flex items-center justify-center bg-purple-400 text-white text-xs font-bold leading-none rounded-full px-2 py-1">
                            35
                        </span>
                    </div>
                </div>                    
                <h4 class="mt-3 text-xs md:text-base font-semibold text-gray-600 dark:text-gray-400 text-center"> Carlos Ramos </h4>
            </div>
        </div>
    </section>
</template>
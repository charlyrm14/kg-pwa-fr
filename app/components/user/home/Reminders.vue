<script setup lang="ts">
    import SectionTitle from '../shared/SectionTitle.vue';
</script>

<template>
    <section class="mt-6">

        <SectionTitle 
            title="Recordatorios"
            :show-icon="true"
            align="between"/>
            
        <div class="flex gap-6 overflow-x-auto">
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-dark-soft rounded-lg px-6 py-4 hover:opacity-75 shadow overflow-hidden flex-shrink-0">
                <h4 class="dark:text-white text-sm font-extralight"> Próxima clase </h4>
                <p class="font-extrabold text-4xl text-gray-500 dark:text-white my-3"> 24 Sept </p>
                <span class="dark:text-white inline-flex items-center gap-x-2 font-extralight text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                        09:00 a 10:00
                </span>
            </div>
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-dark-soft rounded-lg px-6 py-4 hover:opacity-75 shadow overflow-hidden flex-shrink-0">
                <h4 class="dark:text-white text-sm font-extralight"> Próximo pago </h4>
                <p class="font-extrabold text-4xl text-gray-500 dark:text-white my-3"> 28 Sept </p>
                <span class="dark:text-white inline-flex items-center gap-x-2 font-extralight text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins-icon lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                        Mensualidad
                </span>
            </div>
            <NuxtLink to="/birthdays">
                <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-dark-soft rounded-lg px-6 py-4 cursor-pointer hover:opacity-75 shadow overflow-hidden flex-shrink-0">
                    <h4 class="dark:text-white text-sm font-extralight"> Cumpleaños </h4>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="42" 
                        height="42" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="lucide lucide-cake-icon lucide-cake text-gray-500 dark:text-white my-3">
                            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                            <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
                            <path d="M2 21h20"/>
                            <path d="M7 8v3"/>
                            <path d="M12 8v3"/>
                            <path d="M17 8v3"/>
                            <path d="M7 4h.01"/>
                            <path d="M12 4h.01"/>
                            <path d="M17 4h.01"/>
                    </svg>
                    <span class="dark:text-white inline-flex items-center gap-x-2 font-extralight text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                            8 cumpleañeros
                    </span>
                </div>
            </NuxtLink>
        </div>

    </section>
</template>

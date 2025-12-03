<script setup lang="ts">
    import SectionTitle from '../shared/SectionTitle.vue';
    import { currentFormattedDateMonthDay } from '#imports';
</script>

<template>
    <section class="mt-6">

        <SectionTitle 
            title="Recordatorios"
            :show-icon="true"
            align="between"/>
            
        <div class="flex gap-6 overflow-x-auto">
            <div class="bg-violet-900 rounded-lg px-6 py-4 hover:opacity-75 shadow overflow-hidden flex-shrink-0">
                <h4 class="dark:text-white text-sm font-extralight"> Próxima clase </h4>
                <p class="font-extrabold text-4xl text-gray-500 dark:text-white my-3"> 24 Sept </p>
                <span class="dark:text-white inline-flex items-center gap-x-2 font-extralight text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                        09:00 a 10:00
                </span>
            </div>
            <div class="bg-lime-500 rounded-lg px-6 py-4 hover:opacity-75 shadow overflow-hidden flex-shrink-0">
                <h4 class="dark:text-white text-sm font-extralight"> Próximo pago </h4>
                <p class="font-extrabold text-4xl text-gray-500 dark:text-white my-3"> 28 Sept </p>
                <span class="dark:text-white inline-flex items-center gap-x-2 font-extralight text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins-icon lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                        Mensualidad
                </span>
            </div>
            <NuxtLink to="/birthdays">
                <div class="bg-fuchsia-700  rounded-lg px-6 py-4 cursor-pointer hover:opacity-75 shadow overflow-hidden flex-shrink-0 w-auto">
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
                    <span class="dark:text-white font-extralight text-sm inline-flex items-center gap-x-2 whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                            {{ currentFormattedDateMonthDay() }}
                    </span>
                </div>
            </NuxtLink>
        </div>

    </section>
</template>

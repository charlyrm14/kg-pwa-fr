<script setup lang="ts">
    import SectionTitle from '../shared/SectionTitle.vue';
</script>

<template>
    <section class="mt-6">

        <SectionTitle title="Recordatorios"/>
            
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4">
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-dark-soft rounded-lg p-4 cursor-pointer hover:opacity-75 shadow">
                <h4 class="dark:text-white text-sm font-extralight"> Próxima clase </h4>
                <p class="font-extrabold text-4xl text-gray-500 dark:text-white my-3"> 24 Sept </p>
                <span class="dark:text-white inline-flex items-center gap-x-2 font-extralight text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                        09:00 a 10:00
                </span>
            </div>
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-dark-soft rounded-lg p-4 cursor-pointer hover:opacity-75 shadow">
                <h4 class="dark:text-white text-sm font-extralight"> Próximo pago </h4>
                <p class="font-extrabold text-4xl text-gray-500 dark:text-white my-3"> 28 Sept </p>
                <span class="dark:text-white inline-flex items-center gap-x-2 font-extralight text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins-icon lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
                        Mensualidad
                </span>
            </div>
        </div>

    </section>
</template>

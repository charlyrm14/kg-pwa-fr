<script setup lang="ts">
    import SectionTitle from '~/components/common/SectionTitle.vue';
</script>

<template>
    <section class="mt-6">
        
        <SectionTitle
            title="Próximo evento"
            :show-icon="true"
            align="between"/>

        <div class="border border-gray-200 dark:border-dark-soft rounded-lg p-4 cursor-pointer hover:opacity-75">
            <div class="flex justify-start items-center gap-x-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock-icon lucide-calendar-clock text-pink-500"><path d="M16 14v2.2l1.6 1"/><path d="M16 2v4"/><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M3 10h5"/><path d="M8 2v4"/><circle cx="16" cy="16" r="6"/></svg>
                </div>
                <div>
                    <p class="text-xs md:text-base text-gray-500 dark:text-white font-extralight">
                        Maraton Poseidón <span class="block text-black dark:text-white text-sm md:text-lg font-normal mt-1"> Participa en el reto de 10 km y forma parte de una experiencia épica.</span>
                    </p>
                    <div>
                        <p class="text-xs mt-1 text-gray-500 dark:text-white font-extralight"> 26 Septiembre, 2025 - 09:00 a 16:00 </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

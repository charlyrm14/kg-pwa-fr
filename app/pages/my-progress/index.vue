<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
</script>

<template>
    <section>
        <SectionTitle title="Tú Progreso"/>
        <div class="dark:bg-dark-extralight rounded-lg px-3 py-1 cursor-pointer">
            <div class="flex justify-between items-center my-1">
                <div class="flex items-start gap-x-4">
                    <div class="dark:bg-orange-200 p-1 rounded-lg text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
                    </div>
                    <p class="dark:text-white text-xs font-light flex flex-col gap-1"> 
                        Nivel actual <span class="block text-2xl"> Tortuga </span>
                    </p>
                </div>
                <div class="border-6 border-gray-200 dark:border-dark-soft rounded-full px-2 py-3">
                    <span class="font-light dark:text-white text-lg"> 20% </span>
                </div>
            </div>
        </div>
    </section>
</template>
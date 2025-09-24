<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
</script>

<template>
    <section class="mt-6">

        <SectionTitle
            title="Reto semanal"
            :show-icon="true"
            align="between"/>

        <div class="border border-gray-200 dark:border-dark-soft rounded-lg p-4 cursor-pointer hover:opacity-75">
            <div class="flex justify-start items-center gap-x-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-biceps-flexed-icon lucide-biceps-flexed text-blue-500"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/><path d="M15 14a5 5 0 0 0-7.584 2"/><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/></svg>
                </div>
                <div>
                    <p class="text-xs md:text-base text-gray-500 dark:text-white font-extralight">
                        Desafío <span class="block text-black dark:text-white text-sm md:text-lg font-normal"> Nada 5 km a lo largo de esta semana y demuestra tu resistencia en el agua. </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

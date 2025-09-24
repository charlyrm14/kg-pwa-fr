<script setup lang="ts">
    import SectionTitle from '~/components/common/SectionTitle.vue';
</script>

<template>
    <section class="mt-6">
        
        <SectionTitle
            title="Tu próxima clase"
            :show-icon="true"
            align="between"/>

        <div class="border border-gray-200 dark:border-dark-soft rounded-lg p-4 cursor-pointer hover:opacity-75">
            <div class="flex justify-between items-center">
                <div>
                    <p class="font-bold dark:text-white"> Mañana <span class="block text-sm font-light dark:font-extralight"> 24 de septiembre </span> </p>
                </div>
                <div>
                    <p class="text-2xl font-bold dark:text-white"> 16:00 - 17:00 </p>
                </div>
            </div>
        </div>
    </section>
</template>

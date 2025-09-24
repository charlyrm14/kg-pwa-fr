<script setup lang="ts">
    import SectionTitle from '~/components/common/SectionTitle.vue';
</script>

<template>
    <section class="mt-6">

        <SectionTitle
            title="Tu nivel actual"
            :show-icon="true"
            align="between"/>

        <div class="border border-gray-200 dark:border-dark-soft rounded-lg p-4 cursor-pointer hover:opacity-75">
            <div class="flex justify-between items-center">
                <div class="flex items-start gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-star-icon lucide-circle-star text-amber-300"><path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><circle cx="12" cy="12" r="10"/></svg>
                    <p class="text-sm font-light dark:text-white"> Nivel actual <span class="block text-xl font-bold"> Tortuga </span> </p>
                </div>
                <div class="border-6 border-gray-200 dark:border-dark-soft rounded-full px-2 py-3">
                    <span class="font-light dark:text-white text-lg"> 20% </span>
                </div>
            </div>
        </div>
    </section>
</template>

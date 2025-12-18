<script setup lang="ts">
    import ContentRow from './ContentRow.vue';
    import type { Content } from '#imports';

    const props = defineProps<{
        contents: Content[]
    }>()
</script>

<template>
    <div class="w-full overflow-x-auto p-4 mt-8">
        <div class="min-w-[640px]">

            <div class="flex border-b border-gray-200 dark:border-dark-soft pb-3 mb-2 font-semibold text-sm uppercase text-gray-500 dark:text-gray-400">
                <div class="w-2/5 flex-shrink-0 px-2"> Título </div>
                <div class="w-1/5 flex-shrink-0 px-2"> Categoría </div>
                <div class="w-1/5 flex-shrink-0 px-2"> Fecha </div>
                <div class="w-1/5 flex-shrink-0 px-2"> Acciones </div>
            </div>

            <!-- Beginning Content Item -->
            <ContentRow
                v-for="content in contents"
                :key="content.slug"
                :content="content"/>
            <!-- End Content Item -->
            
        </div>
    </div>
</template>
<script setup lang="ts">
    import ContentRow from './ContentRow.vue';
    import type { Content } from '#imports';

    const props = defineProps<{
        contents: Content[]
    }>()
</script>

<template>
    <div class="p-4">
        <div 
            v-if="contents.length"
            class="space-y-3">
                <!-- Beginning Content Item -->
                <ContentRow
                    v-for="content in contents"
                    :key="content.slug"
                    :content="content"/>
                <!-- End Content Item -->
        </div>
        <div 
            v-else>
                <h2 class="dark:text-gray-400 text-center font-bold text-lg">
                    No hay contenido disponible
                </h2>
        </div>
    </div>
</template>
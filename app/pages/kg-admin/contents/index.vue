<script setup lang="ts">

    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import ContentHeader from '~/components/admin/contents/ContentHeader.vue';
    import ContentTable from '~/components/admin/contents/ContentTable.vue';
    import ContentPagination from '~/components/admin/contents/ContentPagination.vue';
    import SelectContentTypeModal from '~/components/admin/contents/SelectContentTypeModal.vue';
    import { useModalManager } from '#imports';
    import { useContentStore } from '~/stores/contents';

    definePageMeta({
        layout: 'admin'
    })

    const { isOpen, close } = useModalManager()
    const contentStore = useContentStore()

    const { data: contents } = await useAsyncData('dashboardContents', async() => {
        await contentStore.fetchContents()
        return contentStore?.contents ?? { data: [] }
    })

</script>

<template>
    <section>
        
        <section class="p-2">
            <Breadcrumb
                heading="Lista contenidos"
                primary-section="Contenidos"
                primary-link="/kg-admin/contents"
                secondary-section="Lista"/>
        </section>

        <section class="mt-6 p-2">
            <div class="bg-white shadow-lg rounded-lg px-2 pt-10 pb-6 dark:bg-dark-light">

                <!-- Beginning Content Header -->
                <ContentHeader/>
                <!-- End Content Header -->
                
                <!-- Beginning Content Table -->
                <section v-if="contents?.data">
                    <ContentTable :contents="contents?.data"/>
                </section>
                <!-- End Content Table -->

                <!-- Beginning Content Pagination -->
                <ContentPagination/>
                <!-- End Content Pagination -->
                
            </div>
        </section>

        <SelectContentTypeModal
            v-if="isOpen('SelectContentTypeModal')"
            @closeSelectContentTypeModal="close"/>

    </section>
</template>
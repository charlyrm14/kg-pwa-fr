<script setup lang="ts">

    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import ContentHeader from '~/components/admin/contents/ContentHeader.vue';
    import ContentTable from '~/components/admin/contents/ContentTable.vue';
    import ContentPagination from '~/components/admin/contents/ContentPagination.vue';
    import SelectContentTypeModal from '~/components/admin/contents/SelectContentTypeModal.vue';
    import DeleteContent from '~/components/admin/contents/DeleteContent.vue';
    import { useModalManager, useAlert } from '#imports';
    import { useContentStore } from '~/stores/contents';
    import Alert from '~/components/common/Alert.vue';

    definePageMeta({
        layout: 'admin'
    })

    const { isOpen, close, modalPayload } = useModalManager()
    const contentStore = useContentStore()
    const { alert, closeAlert } = useAlert()

    await useAsyncData('dashboardContents', async() => {
        await contentStore.fetchContents()
        return contentStore?.contents ?? { data: [] }
    })

    const contents = computed(() => contentStore.filteredContents)

</script>

<template>
    <section class="md:px-5">

        <Alert 
            v-if="alert.status" 
            :title="alert.title" 
            :description="alert.description" 
            :type="alert.type" 
            @closeAlert="closeAlert"/>
        
        <section>
            <Breadcrumb
                heading="Lista contenidos"
                primary-section="Contenidos"
                primary-link="/kg-admin/contents"
                secondary-section="Lista"/>
        </section>

        <section class="mt-6">
            <div class="bg-white shadow-lg rounded-lg pt-4 pb-6 dark:bg-dark-light">

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

        <DeleteContent
            v-if="isOpen('DeleteContentModal')"
            :content="modalPayload?.content"
            @closeDeleteContentModal="close"/>

    </section>
</template>
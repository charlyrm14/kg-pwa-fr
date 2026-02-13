<script setup lang="ts">
    import Alert from '~/components/common/Alert.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import { useAlert, useModalManager } from '#imports';
    import { useForm } from 'vee-validate';
    import type { CreateGenericContent } from '#imports';
    import { useContentStore } from '~/stores/contents';
    import { newNutritionSchema } from '~/validations/contents/new-nutrition.schema';
    import { useMediaUploadStore } from '~/stores/mediaUpload';
    import UploaderFile from '~/components/common/UploaderFile.vue';

    definePageMeta({
        layout: 'admin'
    })

    
    const contentStore = useContentStore()
    const mediaStore = useMediaUploadStore()

    const { alert, closeAlert } = useAlert()
    const { open, isOpen, close } = useModalManager()
    const { getPreviewFromMedia } = useMediaPreview()

    const publishContent = ref<boolean>(true)
    const imageContent = ref<boolean>(true) 
    const selectedMediaIds = ref<number[]>([])

    
    const { defineField,  handleSubmit,  errors} = useForm<CreateGenericContent>({
        initialValues: {
            content_status_id: 5
        },
        validationSchema: newNutritionSchema,
        validateOnMount: false
    })

    const [ name, nameAttrs ] = defineField('name')
    const [ content, contentAttrs ] = defineField('content')
    const [ content_status_id, content_status_idAttrs ] = defineField('content_status_id')

    const onSubmit = handleSubmit(async values => {
        const payload: CreateGenericContent = {
            ...values,
            content_type_id: 4,
            author_id: 2,
            cover_image: mediaStore.confirmedIds?.length
                ? mediaStore.confirmedIds
                : null
        }

        try {

            await contentStore.create(payload)

            mediaStore.confirmedMedia = []
            mediaStore.confirmedIds = []
            
        } catch (error) {
            console.error(error)
        }
    })

    const handleFilesSelected = (ids: number[]) => {
        selectedMediaIds.value = ids
    }

    const processedFiles = computed(() => mediaStore.confirmedMedia)

    
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
                heading="Nutrición"
                primary-section="Contenidos"
                primary-link="/kg-admin/contents"
                secondary-section="Crear Tip de Nutrición"/>
        </section>

        <section class="mt-7">
            <form @submit.prevent="onSubmit">
                <div class="flex flex-col md:flex-row gap-2">
                    <main class="md:basis-[70%]">
                        <div class="bg-white dark:bg-dark-light p-4 border border-gray-200 dark:border-dark-extralight rounded-lg">
                            <div class="p-2">
                                <input 
                                    type="text"
                                    id="title"
                                    name="title"
                                    v-model="name"
                                    v-bind="nameAttrs"
                                    placeholder="Agrega un título"
                                    class="text-gray-500 dark:text-gray-300 text-xl md:text-4xl w-full mt-2 focus:outline-none px-2 py-6 font-bold">
                                <span v-if="errors.name" class="text-red-500 text-sm px-2 font-bold"> 
                                    {{ errors.name  }}
                                </span>
                            </div>
                            <div class="p-2">
                                <div class="border-t border-gray-300 dark:border-dark-soft">
                                    <textarea 
                                        name="content" 
                                        id="content"
                                        v-model="content"
                                        v-bind="contentAttrs"
                                        class="w-full h-120 mt-3 text-gray-500 dark:text-gray-300 font-bold border-b border-gray-300 dark:border-dark-soft p-4 focus:outline-none"
                                        placeholder="Agrega un contenido"></textarea>
                                    <span v-if="errors.content" class="text-red-500 text-sm px-2 font-bold"> 
                                        {{ errors.content  }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </main>
                    <aside class="md:basis-[30%] space-y-4">
                        <div class="bg-white dark:bg-dark-light flex flex-col-reverse md:flex-col rounded-lg">
                            <div class="flex justify-between items-center gap-x-4 border-b border-gray-200 dark:border-dark-extralight p-4">
                                <NuxtLink to="/kg-admin/contents" class="border border-gray-300 dark:border-dark-extralight rounded-4xl px-4 py-2 transition-colors cursor-pointer hover:opacity-75 w-full text-gray-400 dark:text-gray-500 font-bold hover:text-red-500 hover:border-red-500 text-center"> 
                                    Cancelar 
                                </NuxtLink>
                                <button 
                                    type="submit"
                                    class="bg-blue-500 text-white font-bold rounded-4xl px-4 py-2 transition-colors cursor-pointer hover:opacity-75 w-full"> 
                                        Guardar 
                                </button>
                            </div>
                            <div class="border-b border-gray-200 dark:border-dark-extralight p-4">
                                <div class="flex justify-between items-center">
                                    <h4 class="text-gray-400 font-bold text-xl inline-flex items-center gap-x-3"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                                            Publicar 
                                    </h4>
                                    <button class="text-gray-400 cursor-pointer hover:opacity-75" @click="publishContent = !publishContent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon " :class="publishContent ? 'lucide-chevron-up' : 'lucide-chevron-down'"><path :d="publishContent ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'"/></svg>
                                    </button>
                                </div>
                                <div v-if="publishContent" class="mt-3">
                                    <label for="content_status_id" class="text-gray-500 dark:text-gray-300 font-bold"> Estatus </label>
                                    <select 
                                        name="content_status_id" 
                                        id="content_status_id" 
                                        v-model="content_status_id"
                                        v-bind="content_status_idAttrs"
                                        class="w-full mt-3 mb-1 border border-gray-300 dark:border-dark-soft text-gray-500 dark:text-gray-300 p-4 rounded-4xl focus:outline-none font-bold">
                                            <option :value="1"> DRAFT </option>
                                            <option :value="2"> PENDING REVIEW </option>
                                            <option :value="3"> REJECTED </option>
                                            <option :value="4"> SCHEDULED </option>
                                            <option :value="5"> PUBLISHED </option>
                                            <option :value="6"> UNPUBLISHED </option>
                                            <option :value="7"> DELETED </option>
                                    </select>
                                    <span v-if="errors.content_status_id" class="text-red-500 text-sm px-2 font-bold"> 
                                        {{ errors.content_status_id  }}
                                    </span>
                                </div>
                            </div>
                            
                            <div class="p-4">
                                <div class="flex justify-between items-center">
                                    <h4 class="text-gray-400 font-bold text-xl inline-flex items-center gap-x-3"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-plus-icon lucide-image-plus"><path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>
                                            Imagen portada 
                                    </h4>
                                    <button class="text-gray-400 cursor-pointer hover:opacity-75" @click="imageContent = !imageContent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon " :class="imageContent ? 'lucide-chevron-up' : 'lucide-chevron-down'"><path :d="imageContent ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'"/></svg>
                                    </button>
                                </div>
                                
                                <div v-if="imageContent" class="mt-3">
                                    <div 
                                        v-if="processedFiles.length"
                                        v-for="media in processedFiles"
                                        :key="media.id"
                                        class="w-full flex flex-col justify-center items-center">
                                            <img 
                                                v-if="getPreviewFromMedia(media)"
                                                :src="getPreviewFromMedia(media)" 
                                                :alt="media.uuid"
                                                class="w-40 h-40 rounded-xl shadow dark:shadow-none">
                                            <button
                                                class="mt-3 px-4 py-0.5 rounded-xl text-sm dark:bg-dark-soft dark:text-red-300 cursor-pointer hover:opacity-75"
                                                @click.prevent="mediaStore.discardFile(media.id)"> 
                                                    Descartar 
                                            </button>
                                    </div>
                                    <button
                                        v-else
                                        class="w-full mt-4 bg-white dark:bg-dark-light text-gray-400 dark:text-gray-300 py-3 rounded-4xl cursor-pointer hover:opacity-75 inline-flex justify-center gap-x-3 border border-gray-300 dark:border-dark-soft font-bold"
                                        @click.prevent="open('openUploaderFile')"> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                                                Seleccionar imagen 
                                    </button>
                                </div>
                            </div>

                        </div>
                    </aside>
                </div>
            </form>
        </section>

        <UploaderFile 
            v-if="isOpen('openUploaderFile')"
            :config="{
                maxFiles: 1,
                accept: ['image/png','image/jpeg'],
                context: 'featured_image',
                maxSizeMB: 3
            }"
            @files-selected="handleFilesSelected"
            @closeUploaderFile="close"/>

    </section>
</template>
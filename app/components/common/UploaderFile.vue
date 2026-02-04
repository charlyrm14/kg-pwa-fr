<script setup lang="ts">
    import Dropzone from '~/components/common/Dropzone.vue';
    import UploadQueue from '~/components/common/UploadQueue.vue';
    import type { UploaderConfig } from '~~/shared/types/Media';
    import { useMediaUploadStore } from '~/stores/mediaUpload';

    const props = defineProps<{
        config: UploaderConfig
    }>()

    const emit = defineEmits<{
        (e: 'closeUploaderFile'): void,
        (e: 'files-selected', ids: number[]): void
    }>()

    const mediaStore = useMediaUploadStore()

    const hasPendingOrUploading = computed(() =>
        mediaStore.items.some(i =>
            i.status === 'pending' || i.status === 'uploading'
        )
    )

    const hasDone = computed(() =>
        mediaStore.items.some(i => i.status === 'done')
    )

    const handleFiles = (files: File[]) => {
        mediaStore.addFiles(files)
    }

    const handleAccept = () => {
        mediaStore.confirmUploads()
        emit('files-selected', mediaStore.confirmedIds)
        emit('closeUploaderFile')
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-dark rounded-2xl shadow-xl w-[85%] max-w-md md:w-4/5 md:max-w-xl mx-4 max-h-[90vh] overflow-y-auto">
            
            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                        Cargar archivos
                </h2>
                <button 
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition cursor-pointer hover:opacity-75"
                    @click="$emit('closeUploaderFile')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <Dropzone
                :config="{
                    maxFiles: config.maxFiles,
                    accept: config.accept,
                    maxSizeMB: config.maxSizeMB
                }"
                @files-selected="handleFiles"/>

            <UploadQueue :maxFile="config.maxFiles"/>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4 bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-light shrink-0 sticky bottom-0">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2 cursor-pointer"
                    @click.prevent="$emit('closeUploaderFile')"> 
                        Cancelar 
                </button>
                <button
                    class="text-white px-4 py-2 rounded-lg transition"
                    :disabled="hasPendingOrUploading || !hasDone"
                    :class="[
                        hasPendingOrUploading || !hasDone
                        ? 'bg-blue-300 cursor-not-allowed'
                        : 'bg-blue-500 hover:opacity:75 cursor-pointer'
                    ]"
                    @click="handleAccept">
                        Aceptar
                </button>
            </div>

        </div>
    </div>
</template>
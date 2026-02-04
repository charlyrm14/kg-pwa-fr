<script setup lang="ts">
    import UploadFileIcon from '~/assets/media/upload.png'
    import type { UploaderConfig } from '~~/shared/types/Media';
    import { useDropzone } from '#imports';

    const props = defineProps<{
        config: UploaderConfig
    }>()

    const emit = defineEmits<{
        (e: 'files-selected', files: File[]): void
    }>()

    const {
        isDragging,
        fileInput,
        errors,
        openFileDialog,
        onDragOver,
        onDragLeave,
        onDrop,
        onFileChange
    } = useDropzone(
        props.config,
        (files) => {
            emit('files-selected', files)
        }
    )

</script>

<template>
    <div 
        class="my-2 px-6 py-4 dropzone"
        :class="{ dragging: isDragging }"
        @dragover.prevent="onDragOver"
        @dragleave.prevent="onDragLeave"
        @drop.prevent="onDrop"
        @click="openFileDialog">
            <input
                ref="fileInput"
                type="file"
                class="hidden"
                :multiple="config.maxFiles > 1"
                @change="onFileChange"/>
            <div class="border-2 border-dashed border-gray-300 dark:border-dark-extralight rounded-xl p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-light">
                <div class="flex flex-col justify-center items-center">
                    <img :src="UploadFileIcon" alt="Upload file" class="w-25">
                    <p>
                        <span class="text-blue-500"> Da click para seleccionar o <span class="font-bold"> arrastra y suelta </span> tus archivos </span>
                    </p>
                    <span v-if="config.maxSizeMB" class="text-gray-600 dark:text-gray-500 text-sm"> (Peso máximo por archivo {{ config.maxSizeMB }}MB) </span>
                </div>
            </div>
            <div v-if="errors.length" class="text-red-500 text-sm mt-2 font-bold">
                <div v-for="(err, i) in errors" :key="i">
                    {{ err.message }}
                </div>
            </div>
    </div>
</template>

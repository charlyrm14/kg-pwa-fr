<script setup lang="ts">
    import { useMediaUploadStore } from '~/stores/mediaUpload';
    import { useMediaPreview } from '#imports';

    const props = defineProps<{
        maxFile: number
    }>()

    const { getPreviewFromItem } = useMediaPreview()
    
    const mediaStore = useMediaUploadStore()

    const deleteFile = async(tempId: string) => {
        await mediaStore?.removeItem(tempId)
    }

</script>

<template>
    <div class="my-2 px-6 py-2 space-y-3">
        <h2 v-if="mediaStore?.items.length" class="text-gray-500 dark:text-gray-400 font-semibold"> Se estan cargando {{ maxFile }} archivo(s) ... </h2>
        <div
            v-if="mediaStore?.items.length"
            v-for="item in mediaStore?.items"
            :key="item.tempId"
            class="dark:bg-dark-light border border-gray-200 dark:border-dark-light shadow dark:shadow-none p-3 rounded-xl">
                <div class="flex justify-between items-start gap-x-4">
                    <div class="flex justify-between items-start gap-x-2">
                        <div>
                            <img
                                v-if="getPreviewFromItem(item)"
                                :src="getPreviewFromItem(item)"
                                :alt="item.file.name"
                                class="w-18 h-18 object-cover rounded"/>
                        </div>
                        <div>
                            <p class="dark:text-white text-base font-bold"> 
                                {{ item.file.name }} <span class="block text-base dark:text-gray-400 font-light"> 3MB </span>
                            </p>
                        </div>
                    </div>
                    <button
                        v-if="item.status === 'done' && item.uploadedMedia"
                        class="dark:text-gray-400 cursor-pointer hover:text-red-500 transition-colors"
                        @click="deleteFile(item.tempId)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
                <div class="w-full mt-2 h-2 rounded-xl overflow-hidden bg-gray-200">
                    <div
                        v-if="item.status !== 'error'"
                        class="h-full transition-all duration-300"
                        :class="{
                            'bg-gray-400 w-full': item.status === 'pending',
                            'bg-blue-500': item.status === 'uploading',
                            'bg-green-500 w-full': item.status === 'done'
                        }"
                        :style="item.status === 'uploading' ? { width: item.progress + '%' } : {}"/>
                    <div v-else class="h-full bg-red-500 w-full"/>
                </div>
        </div>
    </div>
</template>
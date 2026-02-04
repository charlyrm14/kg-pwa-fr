import type { UploadItem } from "~~/shared/types/Media"
import { useMedia } from "#imports"

export const useMediaUploadStore = defineStore('mediaUpload', () => {

    const { uploadMedia } = useMedia()

    const items = ref<UploadItem[]>([])
    const confirmedIds = ref<number[]>([])
    const confirmedMedia = ref<MediaUploadResponse[]>([])


    const addFiles = (files: File[]) => {
        files.forEach(file => {
            const item = reactive<UploadItem>({
                tempId: crypto.randomUUID(),
                file,
                progress: 0,
                status: 'pending'
            })

            items.value.push(item)
            uploadSingle(item)
        })
    }

    const uploadSingle = async(item: UploadItem) => {
        item.status = 'uploading'
        item.progress = 0

        try {

            const res = await uploadMedia([item.file])
            
            if (!res?.data?.length) {
                throw new Error('Upload failed')
            }

            item.uploadedMedia = res.data[0]
            item.status = 'done'
            item.progress = 100
        
        } catch {
            item.status = 'error'
        }
    }

    const removeItem = (tempId: string) => {
        items.value = items.value.filter(i => i.tempId !== tempId)
    }

    const confirmUploads = () => {

        confirmedMedia.value = items.value
            .filter(i => i.status === 'done' && i.uploadedMedia)
            .map(i => i.uploadedMedia!)

        confirmedIds.value = confirmedMedia.value.map(m => m.id)

        items.value = []
    }

    const discardFile = () => {
        confirmedMedia.value = []
        confirmedIds.value = []
    }
    
    return {
        items,
        confirmedIds,
        confirmedMedia,
        addFiles,
        removeItem,
        confirmUploads,
        discardFile
    }
})

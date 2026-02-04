import type { MediaUploadResponse } from "#imports"
import type { UploadItem } from "#imports"

export const useMediaPreview = () => {

    const config = useRuntimeConfig()

    const getPreviewFromItem = (item: UploadItem): string | undefined => {

        if (item.uploadedMedia?.mime_type.startsWith('image')) {
            return `${config.public.apiMediaBaseUrl}/${item.uploadedMedia.path}`
        }

        if (item.file.type.startsWith('image')) {
            return URL.createObjectURL(item.file)
        }

        return undefined
    }

    const getPreviewFromMedia = (media: MediaUploadResponse): string | undefined => {

        if (media.mime_type.startsWith('image')) {
            return `${config.public.apiMediaBaseUrl}/${media.path}`
        }

        return undefined
    }

    return {
        getPreviewFromItem,
        getPreviewFromMedia
    }
}

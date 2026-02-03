import type { MediaUploadResponse } from '~~/shared/types/Media'
import type { ApiResponse } from '#imports'

export const uploadMediaApi = async(files: File[]): Promise<ApiResponse<MediaUploadResponse[]>> => {

    const config = useRuntimeConfig()
    const formData = new FormData()

    files.forEach(file => {
        formData.append('files[]', file)
    })

    return await $fetch<ApiResponse<MediaUploadResponse[]>>(
        `${config.public.apiBaseUrl}/media`,
        {
            method: 'POST',
            body: formData,
        }
    )
}
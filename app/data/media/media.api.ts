import type { MediaUploadResponse } from '~~/shared/types/Media'
import type { ApiResponse } from '#imports'
import { authApi } from '../auth/auth.api'

export const uploadMediaApi = async(files: File[]): Promise<ApiResponse<MediaUploadResponse[]>> => {

    const api = authApi()
    const formData = new FormData()

    files.forEach(file => {
        formData.append('files[]', file)
    })

    return await api<ApiResponse<MediaUploadResponse[]>>('/media',
        {
            method: 'POST',
            body: formData,
        }
    )
}

export const deleteMediaApi = async(mediaId: number) => {

    const api = authApi()

    return await api(`/media/${mediaId}`,
        {
            method: 'DELETE'
        }
    )
}
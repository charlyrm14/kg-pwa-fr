import { 
    uploadMediaApi,
    deleteMediaApi 
} from "./media.api"
import type { 
    ApiResponse, 
    MediaUploadResponse 
} from "#imports"

export const uploadMediaDataSource = (files: File[]): Promise<ApiResponse<MediaUploadResponse[]>> => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(!IS_MOCK_API_MODE) {
        return Promise.resolve({
            data: []
        })
    }

    return uploadMediaApi(files)
}

export const deleteMediaDataSource = (mediaId: number) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) return null

    return deleteMediaApi(mediaId)
}
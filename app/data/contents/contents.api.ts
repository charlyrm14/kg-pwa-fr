import type { 
    ApiResponse, 
    PaginationContent, 
    Content,
    CreateContentPayload
} from "#imports"
import type { ContentDetail } from "~~/shared/types/Content"
import { authApi } from "../auth/auth.api"

export const fetchContentsApi = async(): Promise<ApiResponse<PaginationContent<Content>>> => {

    const api = authApi()

    return await api<ApiResponse<PaginationContent<Content>>>('/contents')
}

export const fetchContentBySlugApi = async(slug: string): Promise<ApiResponse<ContentDetail>> => {

    const api = authApi()

    return await api<ApiResponse<ContentDetail>>(`/contents/${slug}`)
}

export const createContentApi = async(payload: CreateContentPayload) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<CreateContentPayload>>(
        `${config.public.apiBaseUrl}/contents/`, 
        {
            method: 'POST',
            body: payload
        }
    )
}

export const deleteContentApi = async(slug: string) => {
    const config = useRuntimeConfig()
    
    return await $fetch<ApiResponse<Content>>(`
        ${config.public.apiBaseUrl}/contents/${slug}`,
        {
            method: 'DELETE'
        }
    )
}
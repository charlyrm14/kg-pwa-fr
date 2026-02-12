import type { 
    ApiResponse, 
    PaginationContent, 
    Content,
    CreateContentPayload
} from "#imports"
import type { ContentDetail } from "~~/shared/types/Content"

export const fetchContentsApi = async(): Promise<ApiResponse<PaginationContent<Content>>> => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<PaginationContent<Content>>>(
        `${config.public.apiBaseUrl}/contents`
    )
}

export const fetchContentBySlugApi = async(slug: string): Promise<ApiResponse<ContentDetail>> => {
    const config = useRuntimeConfig()
    
    return await $fetch<ApiResponse<ContentDetail>>(`
        ${config.public.apiBaseUrl}/contents/${slug}`
    )
}

export const createContentApi = async(payload: CreateContentPayload) => {

    const config = useRuntimeConfig()

    await $fetch<ApiResponse<CreateContentPayload>>(
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
import type { ApiResponse, PaginationContent, Content } from "#imports"

export const fetchContentsApi = async(): Promise<ApiResponse<PaginationContent<Content>>> => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<PaginationContent<Content>>>(
        `${config.public.apiBaseUrl}/contents`
    )
}

export const fetchContentBySlugApi = async(slug: string): Promise<ApiResponse<Content>> => {
    const config = useRuntimeConfig()
    
    return await $fetch<ApiResponse<Content>>(`
        ${config.public.apiBaseUrl}/contents/${slug}`
    )
}
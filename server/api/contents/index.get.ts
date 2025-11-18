import type { ApiResponse } from '~~/shared/types/ApiResponse'
import type { PaginationContent } from '~~/shared/types/Pagination'
import type { Content } from '~~/shared/types/Content'

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<PaginationContent<Content>>>(
        `${config.public.apiBaseUrl}/contents`
    )
})
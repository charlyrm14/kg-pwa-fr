import type { ApiResponse, PaginationContent, Content } from "#imports"
import { MOCK_CONTENT_LIST } from "#imports"

export const useContentStore = defineStore('contents', () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const contents = ref<PaginationContent<Content> | null>(null)

    const fetchContents = async(page = 1) => {
        try {

            if(IS_MOCK_API_MODE) {

                contents.value = MOCK_CONTENT_LIST
                return contents.value

            } else {
                
                const response = await $fetch<ApiResponse<PaginationContent<Content>>>(
                    `${config.public.apiBaseUrl}/contents`
                )

                contents.value = response.data
                return contents.value
            }
            
        } catch (error) {
            console.error('Error trying to get contents')
        }
    }

    return {
        contents,
        fetchContents
    }
})
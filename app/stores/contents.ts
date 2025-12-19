import type { ApiResponse, PaginationContent, Content } from "#imports"
import { MOCK_CONTENT_LIST } from "#imports"

export const useContentStore = defineStore('contents', () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const contents = ref<PaginationContent<Content> | null>(null)
    const contentDetail = ref<Content | null>(null)
    const contentTypeFilter = ref<'ALL' | 'NEWS' | 'EVENTS' | 'TIPS' | 'NUTRITION'>('ALL')

    const fetchContents = async(page = 1) => {
        try {

            if(IS_MOCK_API_MODE) {

                contents.value = MOCK_CONTENT_LIST

            } else {
                
                const response = await $fetch<ApiResponse<PaginationContent<Content>>>(
                    `${config.public.apiBaseUrl}/contents`
                )

                contents.value = response.data
            }

            return contents.value
            
        } catch (error) {
            console.error('Error trying to get contents')
        }
    }

    const fetchContentBySlug = async(slug: string): Promise<Content> => {
        try {

            if(IS_MOCK_API_MODE) {

                const contentBySlug = MOCK_CONTENT_LIST.data.find(cont => cont.slug === slug)
                
                if (!contentBySlug) {
                    throw createError({
                        statusCode: 404,
                        statusMessage: 'Page not found'
                    })
                }
                
                return contentDetail.value = contentBySlug

            } else {

                const response = await $fetch<ApiResponse<Content>>(
                    `${config.public.apiBaseUrl}/contents/${slug}`
                )

                contentDetail.value = response.data
                return contentDetail.value
            }

        } catch (error) {
            contentDetail.value = null
            throw error 
        }
    }

    const filteredContents = computed(() => {

        if (!contents.value) return null

        if (contentTypeFilter.value === 'ALL') {
            return contents.value
        }

        return {
            ...contents.value,
            data: contents.value.data.filter(content => content.type === contentTypeFilter.value)
        }
    })

    return {
        contents,
        contentDetail,
        contentTypeFilter,
        fetchContents,
        fetchContentBySlug,
        filteredContents
    }
})
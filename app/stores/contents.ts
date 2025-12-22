import type { ApiResponse, PaginationContent, Content } from "#imports"
import type { CreateContentPayload } from "~~/shared/types/Content"
import { MOCK_CONTENT_LIST } from "~/utils/mocks/content.mock"
import { useAlert } from "#imports"
import { adaptContent } from '~~/server/adapters/content.adapter'

export const useContentStore = defineStore('contents', () => {

    const { showAlert } = useAlert()

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const contents = ref<PaginationContent<Content> | null>(null)
    const contentDetail = ref<Content | null>(null)
    const contentTypeFilter = ref<'ALL' | 'NEWS' | 'EVENTS' | 'TIPS' | 'NUTRITION'>('ALL')

    /**
     * The function fetches contents either from a mock API or a real API endpoint and returns the
     * fetched contents.
     * @param [page=1] - The `page` parameter in the `fetchContents` function is used to specify the
     * page number of content to fetch. By default, if no page number is provided, it will fetch the
     * content from the first page. This parameter allows you to retrieve content from a specific page
     * when calling the `fetch
     * @returns The `contents.value` is being returned from the `fetchContents` function.
     */
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

    /**
     * The function fetches content by slug either from a mock API or a real API and filters the
     * contents based on a content type filter.
     * @param {string} slug - The `slug` parameter is a string that represents a unique identifier or
     * key used to retrieve specific content from a database or API. In the provided code snippet, the
     * `fetchContentBySlug` function is designed to fetch content based on this slug value.
     * @returns The `fetchContentBySlug` function returns a `Promise` that resolves to a `Content`
     * object. The `filteredContents` computed property returns filtered content based on the
     * `contentTypeFilter` value.
     */
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

    
    /**
     * The function `createContent` asynchronously creates content, logs the payload, pushes the
     * payload to a data array, navigates to a specific URL, and shows a success alert.
     * @param {CreateContentPayload} payload - The `payload` parameter in the `createContent` function
     * is an object of type `CreateContentPayload`. It contains the data necessary to create new
     * content, such as the title, description, and any other relevant information needed for the
     * content creation process. This payload is used to add new content to
     */
    const createContent = async(payload: CreateContentPayload) => {
        try {

            if(IS_MOCK_API_MODE) {

                await navigateTo('/kg-admin/contents')

                contents?.value?.data.unshift(adaptContent(payload))

            } else {

                await $fetch<ApiResponse<CreateContentPayload>>(`${config.public.apiBaseUrl}/contents/`, {
                    method: 'POST',
                    body: payload
                })
            }

            setTimeout(() => {
                showAlert('Éxito', 'Contenido creado con éxito', 'success') 
            }, 500);

        } catch (error) {
            console.error('Error to create content')
            showAlert('Error', 'Algo salio mal al crear tu contenido :(', 'error') 
        }
    }

    /* The `filteredContents` constant is using the `computed` function to create a reactive computed
    property. This computed property is dependent on the values of `contents.value` and
    `contentTypeFilter.value`. */
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
        createContent,
        filteredContents
    }
})
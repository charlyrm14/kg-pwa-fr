import type { 
    ApiResponse, 
    PaginationContent, 
    Content 
} from "#imports"
import type { 
    ContentDelete, 
    CreateContentPayload 
} from "~~/shared/types/Content"
import { useAlert } from "#imports"
import { adaptContent } from '~~/server/adapters/content.adapter'
import { 
    fetchContentsDataSource, 
    fetchContentBySlugDataSource, 
    deleteContentDataSource 
} from "~/data/contents/contents.datasource"

export const useContentStore = defineStore('contents', () => {

    const { showAlert } = useAlert()

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const contents = ref<PaginationContent<Content> | null>(null)
    const contentDetail = ref<Content | null>(null)
    const contentTypeFilter = ref<'todo' | 'noticias' | 'eventos' | 'consejos' | 'nutricion'>('todo')

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

            const response = await fetchContentsDataSource()
            contents.value = response.data

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
    const fetchContentBySlug = async(slug: string) => {
        try {

            const response = await fetchContentBySlugDataSource(slug)

            contentDetail.value = response.data
            return contentDetail.value
            
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

    /**
     * The function `deleteContent` asynchronously deletes content using the provided slug.
     * @param {ContentDelete} content - The `content` parameter is an object of type `ContentDelete`.
     * It likely contains information about the content that needs to be deleted, such as the content's
     * slug or other identifying information.
     */
    const deleteContent = async(content: ContentDelete) => {
        try {

            const { slug } = content
            
            await deleteContentDataSource(slug)

            contents.value = {
                ...contents.value!,
                data: contents.value!.data.filter(
                    content => content.slug !== slug
                ),
                total: contents.value!.total - 1
            }

            setTimeout(() => {
                showAlert('Éxito', 'Contenido eliminado con éxito', 'success') 
            }, 500); 

        } catch (error) {
            console.error(error)
        }
    }

    /* The `filteredContents` constant is using the `computed` function to create a reactive computed
    property. This computed property is dependent on the values of `contents.value` and
    `contentTypeFilter.value`. */
    const filteredContents = computed(() => {

        if (!contents.value) return null

        if (contentTypeFilter.value === 'todo') {
            return contents.value
        }

        return {
            ...contents.value,
            data: contents.value.data.filter(content => 
                content.type.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '') === contentTypeFilter.value
            )
        }
    })

    return {
        contents,
        contentDetail,
        contentTypeFilter,
        fetchContents,
        fetchContentBySlug,
        createContent,
        deleteContent,
        filteredContents
    }
})
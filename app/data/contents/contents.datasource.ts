import { 
    fetchContentsMock, 
    fetchContentBySlugMock,
    createContentMock,
    deleteContentMock 
} from "~/utils/mocks/content.mock"
import { 
    fetchContentsApi , 
    fetchContentBySlugApi,
    createContentApi,
    deleteContentApi 
} from "./contents.api"
import type { CreateContentPayload } from "#imports"

export const fetchContentsDataSource = () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return fetchContentsMock()
    }

    return fetchContentsApi()
}

export const fetchContentBySlugDataSource = (slug: string) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return fetchContentBySlugMock(slug)
    }

    return fetchContentBySlugApi(slug)
}

export const createContentDataSource = async(payload: CreateContentPayload) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return createContentMock(payload)
    }

    return createContentApi(payload)
}

export const deleteContentDataSource = async(slug: string) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return await deleteContentMock(slug)
    }

    return deleteContentApi(slug)
}
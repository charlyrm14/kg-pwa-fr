import { 
    fetchContentsMock, 
    fetchContentBySlugMock,
    deleteContentMock 
} from "~/utils/mocks/content.mock"
import { 
    fetchContentsApi , 
    fetchContentBySlugApi,
    deleteContentApi 
} from "./contents.api"

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

export const deleteContentDataSource = async(slug: string) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return await deleteContentMock(slug)
    }

    return deleteContentApi(slug)
}
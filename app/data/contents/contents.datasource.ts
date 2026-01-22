import { fetchContentsMock, fetchContentBySlugMock } from "~/utils/mocks/content.mock"
import { fetchContentsApi , fetchContentBySlugApi } from "./contents.api"

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
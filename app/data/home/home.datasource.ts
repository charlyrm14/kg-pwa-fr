import { HOME_OVERVIEW } from "~/utils/mocks/home-overview.mock"
import { fetchHomeOverviewApi } from "./home.api"

export const fetchHomeOverviewDataSource = async() => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return HOME_OVERVIEW
    }

    return fetchHomeOverviewApi()
}
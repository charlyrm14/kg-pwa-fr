import type { UserFilters } from "~~/shared/types/User"
import { fetchUserInfoApi, fetchUsersApi } from "./users.api"
import { fetchUsersMock, MOCK_USER_INFO } from "~/utils/mocks/users.mock"

export const fetchUsersDataSource = async(filters: UserFilters) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return fetchUsersMock(filters)
    }

    return fetchUsersApi(filters)
}

export const fetchUserInfoDataSource = async(uuid: string) => {
    const config = useRuntimeConfig()

    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_USER_INFO
    }

    return fetchUserInfoApi(uuid)
}
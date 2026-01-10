import type { UserFilters } from "~~/shared/types/User"
import { fetchUsersApi } from "./users.api"
import { fetchUsersMock } from "~/utils/mocks/users.mock"

export const fetchUsersDataSource = async(filters: UserFilters) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return fetchUsersMock(filters)
    }

    return fetchUsersApi(filters)
}
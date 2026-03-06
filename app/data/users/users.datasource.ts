import type { UserFilters } from "~~/shared/types/User"
import { 
    deleteUserApi, 
    fetchUserInfoApi, 
    fetchUsersApi 
} from "./users.api"
import { 
    fetchUsersMock, 
    fetchUserInfoMock, 
    deleteUserMock
} from "~/utils/mocks/users.mock"

export const fetchUsersDataSource = async(filters: UserFilters) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return fetchUsersMock(filters)
    }

    return fetchUsersApi(filters)
}

export const fetchUserInfoDataSource = async(uuid: string): Promise<ApiResponse<UserInfo>> => {
    const config = useRuntimeConfig()

    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return fetchUserInfoMock(uuid)
    }

    return fetchUserInfoApi(uuid)
}

export const deleteUserDataSource = async(uuid: string) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return deleteUserMock(uuid)
    }

    return deleteUserApi(uuid)
}
import type { UserProfilePayload } from "#imports"
import { fetchUserProfileApi, updateProfileApi } from "./profile.api"
import { MOCK_USER_AUTH_PROFILE_DATA } from "~/utils/mocks/user-auth.mock"
import { updateUserProfileMock } from "~/utils/mocks/users.mock"

export const fetchUserProfileDataSource = async() => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_USER_AUTH_PROFILE_DATA
    }

    return fetchUserProfileApi()
}

export const updateProfileDataSource = async(payload: UserProfilePayload) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return updateUserProfileMock()
    }

    return updateProfileApi(payload)
}
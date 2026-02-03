import type { UserProfilePayload } from "#imports"
import type { ApiResponse } from "#imports"
import type { UserProfileGeneralInfo } from "#imports"
import type { UserProfileResponse } from "~~/shared/types/User"

export const fetchUserProfileApi = async() => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserProfileResponse>>(
        `${config.public.apiBaseUrl}/profile`
    )
}

export const updateProfileApi = async(payload: UserProfilePayload): Promise<ApiResponse<UserProfileGeneralInfo>> => {

    const config = useRuntimeConfig()

    return $fetch<ApiResponse<UserProfileGeneralInfo>>(`
        ${config.public.apiBaseUrl}/profile`,
        {
            method: 'PUT',
            body: payload
        }
    )
}
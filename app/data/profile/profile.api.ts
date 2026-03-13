import type { 
    ApiResponse, 
    UserProfilePayload, 
    UserProfileGeneralInfo 
} from "#imports"
import type { UserProfileResponse } from "~~/shared/types/User"

export const fetchUserProfileApi = async(uuid: string) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserProfileResponse>>(
        `${config.public.apiBaseUrl}/profile/${uuid}`
    )
}

export const updateProfileApi = async(payload: UserProfilePayload): Promise<ApiResponse<UserProfileGeneralInfo>> => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserProfileGeneralInfo>>(`
        ${config.public.apiBaseUrl}/profile`,
        {
            method: 'PUT',
            body: payload
        }
    )
}
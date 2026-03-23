import type { 
    ApiResponse, 
    UserProfilePayload, 
    UserProfileGeneralInfo 
} from "#imports"
import type { UserProfileResponse } from "~~/shared/types/User"
import { authApi } from "../auth/auth.api"

export const fetchUserProfileApi = async(uuid: string) => {

    const api = authApi()

    return await api<ApiResponse<UserProfileResponse>>(`/profile/${uuid}`)
}

export const updateProfileApi = async(payload: UserProfilePayload): Promise<ApiResponse<UserProfileGeneralInfo>> => {

    const api = authApi()

    return await api<ApiResponse<UserProfileGeneralInfo>>('/profile',
        {
            method: 'PUT',
            body: payload
        }
    )
}
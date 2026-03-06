import type { 
    CreateUserPayload, 
    CreateUserResponse, 
    UserFilters 
} from "~~/shared/types/User";
import type { 
    ApiResponse, 
    PaginationContent, 
    User, 
    UserInfo 
} from "#imports";

export const fetchUsersApi = async(filters: UserFilters) => {
    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<PaginationContent<User>>>(`
        ${config.public.apiBaseUrl}/users`, {
            params: {
                page: 1,
                ...filters
            }
        }
    )
}

export const fetchUserInfoApi = async(uuid: string) => {
    const config = useRuntimeConfig()
    
    return await $fetch<ApiResponse<UserInfo>>(
        `${config.public.apiBaseUrl}/users/${uuid}`
    )
}

export const createUserApi = async(payload: CreateUserPayload) => {
    const config = useRuntimeConfig()
    
    return await $fetch<ApiResponse<CreateUserResponse>>(
        `${config.public.apiBaseUrl}/users`,
        {
            method: 'POST',
            body: payload
        }
    )
}

export const deleteUserApi = async(uuid: string) => {
    const config = useRuntimeConfig()

    return await $fetch(
        `${config.public.apiBaseUrl}/users/${uuid}`,
        {
            method: 'DELETE'
        }
    )
}
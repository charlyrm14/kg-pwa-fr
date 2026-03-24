import type { 
    CreateUserPayload, 
    CreateUserResponse, 
    UpdateUserPayload, 
    UpdateUserResponse, 
    UserFilters 
} from "~~/shared/types/User";
import type { 
    ApiResponse, 
    PaginationContent, 
    User, 
    UserInfo 
} from "#imports";
import { authApi } from "../auth/auth.api";

export const fetchUsersApi = async(filters: UserFilters) => {
    const api = authApi()

    return await api<ApiResponse<PaginationContent<User>>>('/users', {
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
    
    const api = authApi()

    return await api<ApiResponse<CreateUserResponse>>('/users',
        {
            method: 'POST',
            body: payload
        }
    )
}

export const updateUserApi = async(uuid: string, payload: UpdateUserPayload) => {

    const api = authApi()

    return await api<ApiResponse<UpdateUserResponse>>(`/users/${uuid}`,
        {
            method: 'PUT',
            body: payload
        }
    )
}

export const deleteUserApi = async(uuid: string) => {
    
    const api = authApi()

    return await api(`/users/${uuid}`,
        {
            method: 'DELETE'
        }
    )
}
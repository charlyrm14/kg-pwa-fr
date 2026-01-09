import type { UserFilters } from "~~/shared/types/User";
import type { ApiResponse, PaginationContent, User } from "#imports";

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
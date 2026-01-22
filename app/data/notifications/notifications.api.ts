import type { ApiResponse, CursorPagination, UserNotification } from "#imports"
export const fetchUserNotificationsApi = async(pageUrl: string | null = null) => {

    const config = useRuntimeConfig()
    const endpoint = pageUrl ? pageUrl : `${config.public.apiBaseUrl}/notifications`

    return await $fetch<ApiResponse<CursorPagination<UserNotification>>>(
        endpoint, {
            params: {
                page: 1
        }
    })
}
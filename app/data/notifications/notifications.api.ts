import type { ApiResponse, CursorPagination, UserNotification } from "#imports"
export const fetchUserNotificationsApi = async(pageUrl: string | null = null) => {

    const config = useRuntimeConfig()
    const endpoint = pageUrl ? pageUrl : `${config.public.apiBaseUrl}/notifications`

    const headers = useRequestHeaders(['cookie', 'authorization'])

    return await $fetch<ApiResponse<CursorPagination<UserNotification>>>(
        endpoint, 
        {
            headers,
            params: pageUrl ? undefined : { page: 1 }
        }
    )
}
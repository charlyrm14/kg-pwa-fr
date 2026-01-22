import type { 
    ApiResponse, 
    CursorPagination, 
    NotificationRead, 
    UserNotification 
} from "#imports"

/**
 * The function `fetchUserNotificationsApi` is an asynchronous TypeScript function that fetches user
 * notifications from an API endpoint with optional pagination support.
 * @param {string | null} [pageUrl=null] - The `pageUrl` parameter is a string that represents the URL
 * of the page from which notifications are being fetched. It is optional and can be `null` if not
 * provided.
 * @returns The `fetchUserNotificationsApi` function returns a Promise that resolves to an ApiResponse
 * object containing a CursorPagination of UserNotification objects.
 */
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

/**
 * This TypeScript function marks a notification as read by sending a PATCH request to the API endpoint
 * with the notification ID.
 * @param {number} notificationId - The `notificationId` parameter is the unique identifier of the
 * notification that you want to mark as read. This identifier is used to locate the specific
 * notification in the system and update its status to "read".
 * @returns The function `markAsReadApi` is returning a Promise that resolves to a `NotificationRead`
 * object.
 */
export const markAsReadApi = async(notificationId: number): Promise<NotificationRead> => {
    
    const config = useRuntimeConfig()

    return await $fetch<NotificationRead>(`
        ${config.public.apiBaseUrl}/notifications/${notificationId}`,
        { method: 'PATCH' }
    )
}
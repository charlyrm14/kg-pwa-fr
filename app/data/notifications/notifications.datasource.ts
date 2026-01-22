import { 
    fetchUserNotificationsApi,
    markAsReadApi 
} from "./notifications.api"
import { 
    fetchUserNotificationsMock,
    markAsReadFromMock 
} from "~/utils/mocks/notifications.mock"

/**
 * The function fetches user notifications data from either a mock API or a real API based on the
 * runtime configuration.
 * @param {string | null} [pageUrl=null] - The `pageUrl` parameter is a string that represents the URL
 * of the page from which the notifications are being fetched. It is used to determine which page's
 * notifications to fetch. If no `pageUrl` is provided, the default value is set to `null`.
 * @returns The `fetchUserNotificationsDataSource` function returns either the result of the
 * `fetchUserNotificationsMock` function or the result of the `fetchUserNotificationsApi` function
 * based on the value of the `IS_MOCK_API_MODE` variable. If `IS_MOCK_API_MODE` is true (indicating
 * mock API mode), it returns the result of `fetchUserNotificationsMock`. Otherwise, it returns
 */
export const fetchUserNotificationsDataSource = (pageUrl: string | null = null) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return fetchUserNotificationsMock()
    }

    return fetchUserNotificationsApi(pageUrl)
}

/**
 * The function `markNotificationAsReadDataSource` checks if the application is in mock API mode and
 * then either marks a notification as read using mock data or calls the API to mark it as read.
 * @param {number} notificationId - The `notificationId` parameter is a number that represents the
 * unique identifier of the notification that needs to be marked as read.
 * @returns The function `markNotificationAsReadDataSource` returns the result of either
 * `markAsReadFromMock(notificationId)` or `markAsReadApi(notificationId)` based on the value of
 * `IS_MOCK_API_MODE`. If `IS_MOCK_API_MODE` is true, it returns the result of
 * `markAsReadFromMock(notificationId)`, otherwise it returns the result of `markAsRead
 */
export const markNotificationAsReadDataSource = (notificationId: number) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return markAsReadFromMock(notificationId)
    }

    return markAsReadApi(notificationId)
}
import { fetchUserNotificationsApi } from "./notifications.api"
import {  fetchUserNotificationsMock } from "~/utils/mocks/notifications.mock"

export const fetchUserNotificationsDataSource = (pageUrl: string | null = null) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return fetchUserNotificationsMock()
    }

    return fetchUserNotificationsApi(pageUrl)
}
import { fetchUserNotificationsDataSource } from "~/data/notifications/notifications.datasource"
export function useNotifications () {

    /**
     * The function fetches user notifications from a data source using an optional page URL parameter.
     * @param {string | null} [pageUrl=null] - The `pageUrl` parameter in the `fetchUserNotifications`
     * function is a string that represents the URL of the page from which the notifications are being
     * fetched. It is optional and can be `null` if not provided.
     * @returns The `fetchUserNotifications` function is returning the result of calling the
     * `fetchUserNotificationsDataSource` function with the `pageUrl` parameter. This function is an
     * asynchronous function that fetches user notifications data.
     */
    const fetchUserNotifications = async(pageUrl: string | null = null) => {
        return await fetchUserNotificationsDataSource(pageUrl)
    }

    return {
        fetchUserNotifications
    }
}
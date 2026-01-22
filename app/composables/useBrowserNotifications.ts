export function useBrowserNotifications () {

    const permission = ref<NotificationPermission | null>(
        process.client ? Notification.permission : null
    )

    const isSupported = process.client && 'Notification' in window

    const requestPermission = async () => {

        if(!isSupported) return null
        if (permission.value === 'granted') return permission.value

        const result = await Notification.requestPermission()
        permission.value = result
        return result
    }

    const notify = (title: string, url: string, options?: NotificationOptions) => {

        if(!isSupported) return null

        if(permission.value !== 'granted') return

        const notification = new Notification(title, options)
        if (url) {
            notification.onclick = async () => {
                await navigateTo(url.startsWith('/') ? url : `/${url}`)
            }
        }
    }

    return {
        permission,
        isSupported,
        requestPermission,
        notify
    }
}
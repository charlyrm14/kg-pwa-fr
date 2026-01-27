export function useBrowserNotifications () {

    const permission = ref<NotificationPermission | null>(null)
    const isSupported = ref<boolean>(false)

    onMounted(() => {
        if (typeof window === 'undefined') return

        if ('Notification' in window) {
            isSupported.value = true
            permission.value = Notification.permission
        }
    })

    const requestPermission = async () => {

        if(!isSupported.value) return null
        if (permission.value === 'granted') return permission.value

        const result = await Notification.requestPermission()
        permission.value = result
        return result
    }

    const notify = (title: string, url: string, options?: NotificationOptions) => {

        if(!isSupported.value) return null
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
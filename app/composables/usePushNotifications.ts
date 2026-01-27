export function usePushNotifications () {

    const config = useRuntimeConfig();
    const isSupported = ref<boolean>(false)

    onMounted(() => {
        if(typeof window === 'undefined') return

        isSupported.value = 'serviceWorker' in navigator && 'PushManager' in window
    })

    const getServiceWorker = async() => {
        if(!isSupported.value) return null

        return await navigator.serviceWorker.ready
    }

    const saveLocalSubscription = (sub: any) => {
        localStorage.setItem('push_subscription', JSON.stringify(sub))
    }

    const getLocalSubscription = () => {
        const stored = localStorage.getItem('push_subscription')
        return stored ? JSON.parse(stored) : null
    }

    const sendPushSubscription = async (sub: any) => {
        await $fetch(`${config.public.apiBaseUrl}/push`, {
            method: 'POST',
            body: {
                endpoint: sub.endpoint,
                keys: {
                    public_key: sub.keys.p256dh,
                    auth_token: sub.keys.auth
                }
            }
        })
    }

    const subscribeUser = async() => {

        if (!('serviceWorker' in navigator)) return null

        const register = await getServiceWorker()
        if(!register) return null

        let subscription = await register.pushManager.getSubscription()

        if (!subscription) {
            subscription = await register.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: config.public.vapidKey
            })
        }

        const sub = subscription.toJSON()

        const localSub = getLocalSubscription()

        if (!localSub || localSub.endpoint !== sub.endpoint) {
            await sendPushSubscription(sub)
            saveLocalSubscription(sub)
        }

        return sub
    }

    return {
        isSupported,
        subscribeUser
    }
}
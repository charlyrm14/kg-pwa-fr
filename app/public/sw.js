import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'

cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)

self.skipWaiting()

self.addEventListener('push', function (event) {

    if (!event.data) return

    const data = event.data.json()
    
    const title = data.title || 'Notification'

    const options = {
        body: data.body || '',
        icon: '/assets/media/icon-192x192.png',
        badge: '/assets/media/icon-64x64.png',
        data: {
            url: data.data.url || '/'
        },
        vibrate: [100, 50, 100],
    }
    
    event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', function (event) {

    event.notification.close()

    const targetUrl = event.notification.data?.url || '/'

    const fullUrl = targetUrl.startsWith('http')
        ? targetUrl
        : self.location.origin + targetUrl

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then(clientList => {
                for (const client of clientList) {
                    if (client.url === fullUrl && 'focus' in client) {
                        return client.focus()
                    }
                }

                if (clients.openWindow) {
                    return clients.openWindow(fullUrl)
                }
            })
    )
})

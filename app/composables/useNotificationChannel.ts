import type Pusher from "pusher-js";
import { useBrowserNotifications } from "#imports";
import SharkNotification from '~~/public/media/notification.png'

export function useNotificationChannel(pusher: Pusher) {

    const channelName = 'notifications' //`private-users.${MOCK_USER_ID}`
    const { notify } = useBrowserNotifications()
    
    const subscribe = () => {
        const channel = pusher.subscribe(channelName)

        channel.bind('notification.received', (data: any) => {
            console.log(data)
            const { title, body, action_url } = data;

            notify(title, action_url, {
                body: body,
                icon: SharkNotification
            })
        })
    }

    const unsubscribe = () => {
        const channel = pusher.subscribe(channelName)
        if (channel) {
            channel.unbind_all();
            pusher.unsubscribe('channel-notifications');
        }
    }

    return {
        subscribe,
        unsubscribe
    }

}
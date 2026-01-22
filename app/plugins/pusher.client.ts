import Pusher from 'pusher-js'

export default defineNuxtPlugin(() => {

    const config = useRuntimeConfig()

    const pusher = new Pusher(config.public.pusherKey, {
        cluster: config.public.pusherCluster,
        //wsHost: config.public.pusherHost,
        //wsPort: Number(config.public.pusherPort),
        //forceTLS: false,
        //encrypted: false,
        //disableStats: true,
        //enabledTransports: ['ws', 'wss'],
    })

    return {
        provide: {
            pusher,
        },
    }
});

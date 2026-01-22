<script setup lang="ts">
    import Footer from '~/components/user/layouts/Footer.vue';
    import Header from '~/components/user/layouts/Header.vue';
    import { useNotificationChannel } from '#imports';
    import { useBrowserNotifications } from '#imports';

    // const config = useRuntimeConfig()
    // const IS_MOCK_API_MODE = config.public.mockApiMode
    // const { $pusher } = useNuxtApp()
    // const { requestPermission } = useBrowserNotifications()
    // const { subscribe } = useNotificationChannel($pusher)

    // onMounted(async() => {
    //     if(IS_MOCK_API_MODE) return
    //     await requestPermission()
    //     subscribe()
    // })

</script>
<template>
    <div class="flex flex-col min-h-screen">
        <Header/>
        <main class="flex-grow pt-16 pb-16 bg-gray-100 dark:bg-dark">
            <div class="container mx-auto p-4">
                <slot />
            </div>
        </main>
        <Footer/>
    </div>
</template>

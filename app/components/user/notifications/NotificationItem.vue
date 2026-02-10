<script setup lang="ts">
    import SharkNotification from '~/assets/media/notification.webp'
    import type { UserNotification } from '#imports';
    import { useNotifications } from '#imports';

    defineProps<{
        notification: UserNotification
    }>()

    const { markAsRead } = useNotifications()

    const openNotification = async(notif: UserNotification) => {
        await navigateTo(`${notif?.notification?.action_url}`)
        markAsRead(notif?.id)
    }
    
</script>

<template>
    <div 
        class="p-3 rounded-4xl shadow-lg dark:shadow-none cursor-pointer hover:opacity-75"
        :class="notification?.is_read ? 'bg-white dark:bg-dark-extralight' : 'bg-gray-300/80 dark:bg-dark-light'">
            <div class="flex justify-between items-start">
                <div 
                    class="flex justify-between items-start gap-x-5 shrink-0" 
                    @click="openNotification(notification)">
                        <div 
                            class="bg-pink-100 rounded-2xl">
                                <img 
                                    :src="SharkNotification" 
                                    :alt="notification?.notification?.title"
                                    class="w-18 h-18"
                                    lazy="loading">
                        </div>
                        <div class="space-y-3 md:space-y-2">
                            <div 
                                class="dark:text-gray-400 font-light text-xs md:text-sm"> 
                                    {{ notification?.notification?.title ?? 'Unknown' }} 
                                        <span class="block dark:text-white font-bold text-xs md:text-base"> {{ notification?.notification?.body?.slice(0, 35) ?? 'Unknown' }} </span>
                            </div>
                            <p class="dark:text-gray-400 text-sm"> 
                                {{ notification?.notification?.created_at }} 
                            </p>
                        </div>
                </div>
            </div>
    </div>
</template>
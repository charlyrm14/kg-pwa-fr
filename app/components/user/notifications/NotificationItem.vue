<script setup lang="ts">
    import SharkNotification from '~/assets/media/notification.png'
    import type { UserNotification } from '#imports';

    defineProps<{
        notification: UserNotification
    }>()

</script>

<template>
    <div class="bg-white dark:bg-dark-extralight p-3 rounded-4xl shadow-lg dark:shadow-none">
        <div class="flex justify-between items-start">
            <div class="flex justify-between items-start gap-x-5 shrink-0">
                <NuxtLink 
                    :to="`/${notification?.notification?.action_url}`"
                    class="bg-pink-100 rounded-2xl">
                        <img 
                            :src="SharkNotification" 
                            :alt="notification?.notification?.title"
                            class="w-18 h-18">
                </NuxtLink>
                <div class="space-y-3 md:space-y-2">
                    <NuxtLink 
                        :to="`/${notification?.notification?.action_url}`"
                        class="dark:text-gray-400 font-light text-xs md:text-sm"> 
                            {{ notification?.notification?.title ?? 'Unknown' }} 
                                <span class="block dark:text-white font-bold text-xs md:text-base"> {{ notification?.notification?.body?.slice(0, 35) ?? 'Unknown' }} </span>
                    </NuxtLink>
                    <p class="dark:text-gray-400 text-sm"> 
                        {{ notification?.notification?.created_at }} 
                    </p>
                </div>
            </div>
            <button class="px-2 dark:text-gray-400 cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </button>
        </div>
    </div>
</template>
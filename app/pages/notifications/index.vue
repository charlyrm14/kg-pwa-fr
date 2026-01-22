<script setup lang="ts">
    import NotificationItem from '~/components/user/notifications/NotificationItem.vue';
    import { useNotifications } from '#imports';

    const { fetchUserNotifications } = useNotifications()
    
    const { data: notifications, pending, error } = await useAsyncData('user-notifications', 
        () => fetchUserNotifications(),
        { server: true }
    )

    const userNotifications = computed(() => {
        return notifications?.value?.data?.data ?? []
    })

</script>

<template>
    <section>

        <section v-if="pending">
            <p class="text-center dark:text-gray-400">
                Cargando notificaciones...
            </p>
        </section>

        <section v-else-if="error">
            <p class="text-center text-red-500">
                Ocurrió un error al cargar las notificaciones
            </p>
        </section>
        
        <section v-else-if="userNotifications.length" class="space-y-3">
            <NotificationItem
                v-for="notification in userNotifications"
                :key="notification.id"
                :notification="notification"/>
        </section>

        <section v-else>
            <p class="text-pink-500 font-normal text-xl text-center">
                Mantente al tanto
                    <span class="block font-extrabold"> En este apartado aparecerán tus actualizaciones, alertas y recordatorios importantes en cuanto se generen. </span>
            </p>
        </section>

        <section v-if="userNotifications.length" class="mt-12">
            <button class="w-full bg-blue-500 text-white rounded-lg px-4 py-3 cursor-pointer hover:opacity-75">
                Cargar más notificaciones
            </button>
        </section>
        
    </section>
</template>

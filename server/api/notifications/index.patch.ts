import { NotificationRead } from "~~/shared/types/Notification";

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig();
    const { id } = event.context.params as { id: string }

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Notification id is required'
        })
    }

    try {

        return await $fetch<NotificationRead>(
            `${config.public.apiBaseUrl}/notifications/${id}`, 
            {
                method: 'PATCH',
            }
        )
        
    } catch (error) {
        console.error(error)
        throw error
    }
});

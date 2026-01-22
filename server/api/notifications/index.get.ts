import type { ApiResponse } from "~~/shared/types/ApiResponse"
import type { CursorPagination } from "~~/shared/types/Pagination"
import type { UserNotification } from "~~/shared/types/Notification"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<CursorPagination<UserNotification>>>(
        `${config.public.apiBaseUrl}/notifications`
    )
})
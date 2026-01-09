import { ApiResponse } from "~~/shared/types/ApiResponse"
import type { User } from "~~/shared/types/User"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<User[]>>(
        `${config.public.apiBaseUrl}/users`
    )
})
import type { ApiResponse } from "~~/shared/types/ApiResponse" 
import type { HomeUser } from "~~/shared/types/HomeOverview"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<HomeUser>>(
        `${config.public.apiBaseUrl}/overview/user`
    )
})
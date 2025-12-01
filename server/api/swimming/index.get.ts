import { ApiResponse } from "~~/shared/types/ApiResponse"
import { SwimCategory } from "~~/shared/types/Swimming"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<SwimCategory[]>>(
        `${config.public.apiBaseUrl}/swim-categories`
    )
})
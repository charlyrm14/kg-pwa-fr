import type { ApiResponse } from '~~/shared/types/ApiResponse'
import { HobbyData } from '~~/shared/types/Hobby'

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<HobbyData[]>>(
        `${config.public.apiBaseUrl}/hobbies`
    )
})
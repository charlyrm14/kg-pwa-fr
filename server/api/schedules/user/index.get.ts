import { ApiResponse } from "~~/shared/types/ApiResponse"
import { UserSchedule } from "~~/shared/types/Schedule"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserSchedule>>(
        `${config.public.apiBaseUrl}/schedules/user`
    )
})
import type { ApiResponse, UserSchedule } from "#imports"

export const fetchUserScheduleApi = async(): Promise<ApiResponse<UserSchedule>> => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserSchedule>>(
        `${config.public.apiBaseUrl}/schedules`
    )
}
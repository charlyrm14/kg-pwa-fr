import type { ApiResponse } from "~~/shared/types/ApiResponse"
import type { UserAttendance } from "~~/shared/types/Attendance"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserAttendance>>(
        `${config.public.apiBaseUrl}/attendances/history`
    )
})
import type { ApiResponse, UserAttendance, AttendanceStatus } from "#imports"

export const fetchMonthlyAttendanceApi = async(): Promise<ApiResponse<UserAttendance>> => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserAttendance>>(
        `${config.public.apiBaseUrl}/attendances/history`
    )
}

export const fetchAttendanceStatusesApi = async() => {

    const config = useRuntimeConfig()

    return $fetch<ApiResponse<AttendanceStatus[]>>(
        `${config.public.apiBaseUrl}/attendances/statuses`
    )
}
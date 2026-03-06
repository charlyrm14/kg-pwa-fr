import type { 
    ApiResponse, 
    UserAttendance, 
    AttendanceStatus, 
    AttendanceCurrentDay,
    PaginationContent,
    AssignUserAttendancePayload
} from "#imports"

export const fetchAttendancesTodayApi = async(): Promise<PaginationContent<AttendanceCurrentDay>> => {

    const config = useRuntimeConfig()

    return await $fetch<PaginationContent<AttendanceCurrentDay>>(
        `${config.public.apiBaseUrl}/attendances/today`
    )
}

export const assignUserAttendanceApi = async(userUuid: string, payload: AssignUserAttendancePayload) => {

    const config = useRuntimeConfig()

    return await $fetch<PaginationContent<AttendanceCurrentDay>>(
        `${config.public.apiBaseUrl}/attendances/assign/${userUuid}`,
        {
            method: 'PUT',
            body: payload
        }
    )
}

export const fetchMonthlyAttendanceApi = async(): Promise<ApiResponse<UserAttendance>> => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserAttendance>>(
        `${config.public.apiBaseUrl}/attendances/history`
    )
}

export const fetchAttendanceStatusesApi = async() => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<AttendanceStatus[]>>(
        `${config.public.apiBaseUrl}/attendances/statuses`
    )
}
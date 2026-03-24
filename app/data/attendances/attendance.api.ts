import type { 
    ApiResponse, 
    UserAttendance, 
    AttendanceStatus, 
    AttendanceCurrentDay,
    PaginationContent,
    AssignUserAttendancePayload
} from "#imports"
import { authApi } from "../auth/auth.api"

export const fetchAttendancesTodayApi = async(): Promise<PaginationContent<AttendanceCurrentDay>> => {

    const api = authApi()

    return await api<PaginationContent<AttendanceCurrentDay>>('/attendances/today')
}

export const assignUserAttendanceApi = async(userUuid: string, payload: AssignUserAttendancePayload) => {

    const api = authApi()

    return await api<PaginationContent<AttendanceCurrentDay>>(`/attendances/assign/${userUuid}`,
        {
            method: 'PUT',
            body: payload
        }
    )
}

export const fetchMonthlyAttendanceApi = async(): Promise<ApiResponse<UserAttendance>> => {

    const api = authApi()

    return await api<ApiResponse<UserAttendance>>('/attendances/history')
}

export const fetchAttendanceStatusesApi = async() => {

    const api = authApi()

    return await api<ApiResponse<AttendanceStatus[]>>('/attendances/statuses')
}
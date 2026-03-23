import type { 
    ApiResponse, 
    AssignUserSchedulePayload, 
    UserSchedule 
} from "#imports"
import { authApi } from "../auth/auth.api"

export const fetchUserScheduleApi = async(): Promise<ApiResponse<UserSchedule>> => {

    const api = authApi()

    return await api<ApiResponse<UserSchedule>>('/schedules')
}

export const assignUserScheduleApi = async(userUuid: string, payload: AssignUserSchedulePayload) => {

    const config = useRuntimeConfig()

    return await $fetch(
        `${config.public.apiBaseUrl}/schedules/${userUuid}`,
        {
            method: 'PUT',
            body: payload
        }
    )
}
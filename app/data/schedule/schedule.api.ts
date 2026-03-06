import type { ApiResponse, AssignUserSchedulePayload, UserSchedule } from "#imports"

export const fetchUserScheduleApi = async(): Promise<ApiResponse<UserSchedule>> => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserSchedule>>(
        `${config.public.apiBaseUrl}/schedules`
    )
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
import { MOCK_USER_SCHEDULE } from "~/utils/mocks/schedules.mock";
import type { ApiResponse, UserSchedule } from "#imports";

export function useSchedule () {

    const config = useRuntimeConfig();
    const IS_MOCK_API_MODE = config.public.mockApiMode
    const schedule = ref<ApiResponse<UserSchedule> | null>(null)

    const fetchUserSchedule = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                schedule.value = MOCK_USER_SCHEDULE

            } else {

                const response = await $fetch<ApiResponse<UserSchedule>>(
                    `${config.public.apiBaseUrl}/schedules`
                )

                schedule.value = response
            }

            return schedule.value
            
        } catch (error) {

            console.error('Error to get user schedule')
        }
    }

    return {
        schedule,
        fetchUserSchedule
    }
}
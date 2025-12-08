import type { ApiResponse } from "#imports"
import type { UserAttendance } from "~~/shared/types/Attendance"

export const useAttendanceStore = defineStore('attendances', () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const monthlyAttendance = ref<ApiResponse<UserAttendance> | null>(null)

    const fetchMonthlyAttendance = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                monthlyAttendance.value = MOCK_USER_ATTENDANCES_CURRENT_MONTH

            } else {

                const response = await $fetch<ApiResponse<UserAttendance>>(
                    `${config.public.apiBaseUrl}/attendances/users`
                )

                monthlyAttendance.value = response
            }

            return monthlyAttendance.value

        } catch (error) {
            console.log('Error to get user attendances by current month')
        }
    }

    return {
        monthlyAttendance,
        fetchMonthlyAttendance
    }
})

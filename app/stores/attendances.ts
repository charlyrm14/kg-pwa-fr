import type { ApiResponse } from "#imports"
import type { AttendanceCurrentDay, UserAttendance, AttendanceReport } from "~~/shared/types/Attendance"
import type { PaginationContent } from "#imports"
import { downloadMockReport, triggerFileDownload } from "#imports"
import { MOCK_USER_ATTENDANCES_CURRENT_MONTH, MOCK_USER_ATTENDANCES_CURRENT_DAY } from "~/utils/mocks/attendances.mock"

export const useAttendanceStore = defineStore('attendances', () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const attendancesToday = ref<PaginationContent<AttendanceCurrentDay> | null>(null)
    const monthlyAttendance = ref<ApiResponse<UserAttendance> | null>(null)

    const fetchAttendancesToday = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                attendancesToday.value = MOCK_USER_ATTENDANCES_CURRENT_DAY

            } else {

                const response = await $fetch<PaginationContent<AttendanceCurrentDay>>(
                    `${config.public.apiBaseUrl}/attendances/today`
                )

                attendancesToday.value = response

            }

            return attendancesToday.value
            
        } catch (error) {
            console.error('Error to get today attendances')
        }
    }

    /**
     * The function `fetchMonthlyAttendance` retrieves monthly attendance data either from a mock API
     * or a real API endpoint.
     * @returns The `monthlyAttendance.value` is being returned from the `fetchMonthlyAttendance`
     * function.
     */
    const fetchMonthlyAttendance = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                monthlyAttendance.value = MOCK_USER_ATTENDANCES_CURRENT_MONTH

            } else {

                const response = await $fetch<ApiResponse<UserAttendance>>(
                    `${config.public.apiBaseUrl}/attendances/history`
                )

                monthlyAttendance.value = response
            }

            return monthlyAttendance.value

        } catch (error) {
            console.log('Error to get user attendances by current month')
        }
    }

    /**
     * The function `generateAttendanceReport` asynchronously generates an attendance report based on
     * the provided data.
     * @param {AttendanceReport} data - The `data` parameter in the `generateAttendanceReport` function
     * represents an object of type `AttendanceReport`. This object likely contains information needed
     * to generate an attendance report, such as the year, month, and possibly other relevant data for
     * the report generation process.
     * @returns If the `IS_MOCK_API_MODE` flag is true, the function will return after downloading the
     * mock report. Otherwise, if the flag is false, the function will trigger a file download of the
     * attendance report generated based on the data provided.
     */
    const generateAttendanceReport = async(data: AttendanceReport) => {
        try {

            if(IS_MOCK_API_MODE) {
                await downloadMockReport()
                return
            } 

            const blob = await $fetch<Blob>(`${config.public.apiBaseUrl}/reports`, {
                method: 'POST',
                body: data
            })

            triggerFileDownload(blob, `reporte-${data.year}-${data.month}.xlsx`)
            
        } catch (error) {
            console.error('Error generating attendance report')
        }
    }

    return {
        attendancesToday,
        monthlyAttendance,
        fetchAttendancesToday,
        fetchMonthlyAttendance,
        generateAttendanceReport
    }
})

import type { ApiResponse } from "#imports"
import type { 
    AttendanceCurrentDay, 
    UserAttendance, 
    AttendanceReport,
    AttendanceStatus 
} from "~~/shared/types/Attendance"
import type { PaginationContent } from "#imports"
import { 
    downloadMockReport, 
    triggerFileDownload 
} from "#imports"
import { 
    MOCK_ATTENDANCES_STATUSES,
    MOCK_USER_ATTENDANCES_CURRENT_MONTH, 
    MOCK_USER_ATTENDANCES_CURRENT_DAY 
} from "~/utils/mocks/attendances.mock"
import { useAlert } from "#imports"

export const useAttendanceStore = defineStore('attendances', () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode
    const { showAlert } = useAlert()

    const attendanceStatuses = ref<ApiResponse<AttendanceStatus[]> | null>(null)
    const attendancesToday = ref<PaginationContent<AttendanceCurrentDay> | null>(null)
    const monthlyAttendance = ref<ApiResponse<UserAttendance> | null>(null)

    /**
     * The function `fetchAttendancesToday` retrieves today's attendances either from a mock API or a
     * real API endpoint.
     * @returns The function `fetchAttendancesToday` is returning the value of `attendancesToday`,
     * which contains either the mock user attendances for the current day
     * (`MOCK_USER_ATTENDANCES_CURRENT_DAY`) if `IS_MOCK_API_MODE` is true, or the response from the
     * API call to fetch today's attendances if `IS_MOCK_API_MODE` is false.
     */
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
     * The function fetches attendance statuses either from a mock API or a real API endpoint and
     * returns the result.
     * @returns The `attendanceStatuses.value` is being returned from the `fetchAttendanceStatuses`
     * function.
     */
    const fetchAttendanceStatuses = async() => {
        try {
                if(IS_MOCK_API_MODE) {

                    attendanceStatuses.value = MOCK_ATTENDANCES_STATUSES

                } else {

                    const response = await $fetch<ApiResponse<AttendanceStatus[]>>(
                        `${config.public.apiBaseUrl}/attendances/statuses`
                    )

                    attendanceStatuses.value = response
                }

                return attendanceStatuses.value
            
        } catch (error) {
            console.error('Error to get attendance statuses')
        }
    }

    /**
    * The function `assignUserAttendance` is an asynchronous function that updates a user's attendance
    * status using a PUT request.
    * @param {any} payload - The `payload` parameter is an object containing the following properties:
    */
    const assignUserAttendance = async(payload: any) => {
        try {

            if(IS_MOCK_API_MODE) {

                const user = attendancesToday.value?.data.find(attendance => 
                    attendance.user.uuid === payload.user_uuid
                )
                
                if(user) {
                    const status = MOCK_ATTENDANCES_STATUSES.data.find(status => 
                        status.id === payload.attendance_status_id
                    )

                    if(status) {
                        user.attendance_status = status.name
                    }
                }

            } else {

                const { user_uuid, attendance_status_id } = payload

                await $fetch(`${config.public.apiBaseUrl}/attendances/assign/${user_uuid}`, {
                    method: 'PUT',
                    body: {
                        attendance_status_id
                    }
                })

            }

            await fetchAttendancesToday()
            showAlert('Éxito', 'Asistencia asignada correctamente.', 'success')
            
        } catch (error) {
            console.error(error)
            showAlert('Error', 'Error al asignar la asistencia.', 'error')
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
        attendanceStatuses,
        attendancesToday,
        monthlyAttendance,
        fetchAttendanceStatuses,
        assignUserAttendance,
        fetchAttendancesToday,
        fetchMonthlyAttendance,
        generateAttendanceReport
    }
})

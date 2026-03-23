import { 
    downloadMockReport, 
    triggerFileDownload,
    useAlert,
    type ApiResponse,
    type AttendanceCurrentDay, 
    type UserAttendance, 
    type AttendanceReport,
    type AttendanceStatus, 
    type AssignUserAttendancePayload,
    type PaginationContent 
} from "#imports"

import { 
    assignUserAttendanceDataSource, 
    fetchAttendanceStatusesDataSource, 
    fetchAttendancesTodayDataSource, 
    fetchMonthlyAttendanceDataSource 
} from "~/data/attendances/attendance.datasource"

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

            const response = await fetchAttendancesTodayDataSource()

            attendancesToday.value = response

            return attendancesToday.value
            
        } catch (error) {
            console.error(error)
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
                const response = await fetchAttendanceStatusesDataSource()

                attendanceStatuses.value = response
                return attendanceStatuses.value
            
        } catch (error) {
            console.error(error)
        }
    }

    /**
    * The function `assignUserAttendance` is an asynchronous function that updates a user's attendance
    * status using a PUT request.
    * @param {any} payload - The `payload` parameter is an object containing the following properties:
    */
    const assignUserAttendance = async(userUuid: string, payload: AssignUserAttendancePayload) => {
        try {

            await assignUserAttendanceDataSource(userUuid, payload)

            await fetchAttendancesToday()
            showAlert('Éxito', 'Asistencia asignada correctamente.', 'success')
            
        } catch (error) {
            console.error(error)
            showAlert('Error', 'Error al asignar la asistencia.', 'error')
            throw error
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

            const response = await fetchMonthlyAttendanceDataSource()
            
            monthlyAttendance.value = response

            return response.data

        } catch (error) {
            console.log(error)
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
            console.error(error)
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

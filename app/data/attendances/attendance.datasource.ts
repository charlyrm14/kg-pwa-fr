import { fetchMonthlyAttendanceApi, fetchAttendanceStatusesApi } from "./attendance.api"
import { MOCK_USER_ATTENDANCES_CURRENT_MONTH, MOCK_ATTENDANCES_STATUSES } from "~/utils/mocks/attendances.mock"

export const fetchMonthlyAttendanceDataSource = () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_USER_ATTENDANCES_CURRENT_MONTH
    }

    return fetchMonthlyAttendanceApi()
}

export const fetchAttendanceStatusesDataSource = async() => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_ATTENDANCES_STATUSES
    }

    return fetchAttendanceStatusesApi()
}
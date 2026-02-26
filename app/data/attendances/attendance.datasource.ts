import type { AssignUserAttendancePayload } from "~~/shared/types/Attendance"
import { 
    fetchMonthlyAttendanceApi, 
    fetchAttendanceStatusesApi, 
    fetchAttendancesTodayApi, 
    assignUserAttendanceApi
} from "./attendance.api"
import { 
    MOCK_USER_ATTENDANCES_CURRENT_MONTH, 
    MOCK_ATTENDANCES_STATUSES,
    MOCK_USER_ATTENDANCES_CURRENT_DAY, 
    assignUserAttendanceMock
} from "~/utils/mocks/attendances.mock"

export const fetchAttendancesTodayDataSource = () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_USER_ATTENDANCES_CURRENT_DAY
    }

    return fetchAttendancesTodayApi()
}

export const assignUserAttendanceDataSource = (userUuid: string, payload: AssignUserAttendancePayload) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return assignUserAttendanceMock(userUuid, payload)
    }

    return assignUserAttendanceApi(userUuid, payload)
}

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
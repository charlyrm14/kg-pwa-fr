import { fetchUserScheduleApi } from "./schedule.api"
import { MOCK_USER_SCHEDULE } from "~/utils/mocks/schedules.mock"

export const fetchUserScheduleDataSource = async() => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_USER_SCHEDULE;
    }

    return fetchUserScheduleApi()
}
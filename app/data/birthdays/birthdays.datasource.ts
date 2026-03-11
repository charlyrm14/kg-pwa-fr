import { MOCK_USER_BIRTHDAY } from "~/utils/mocks/users.mock"
import { fetchUsersBirthdayApi } from "./birthdays.api"

export const fetchUsersBirthdayDataSource = () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_USER_BIRTHDAY
    }

    return fetchUsersBirthdayApi()
}
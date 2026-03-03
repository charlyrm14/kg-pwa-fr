import { MOCK_SWIM_PROGRAMS } from "~/utils/mocks/swim-program.mock"
import { fetchSwimProgramApi } from "./swim-program.api"

export const fetchSwimProgramDataSource = async() => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_SWIM_PROGRAMS
    }

    return fetchSwimProgramApi()
}
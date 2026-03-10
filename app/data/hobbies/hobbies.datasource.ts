import { MOCK_HOBBIES_LIST } from "~/utils/mocks/hobby.mock"
import { addHobbiesApi, fetchHobbiesApi } from "./hobbies.api"

export const fetchHobbiesDataSource = async() => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return MOCK_HOBBIES_LIST
    }

    return fetchHobbiesApi()
}

export const addHobbiesDataSource = (hobbies: Array<number>) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return
    }

    return addHobbiesApi(hobbies)
}
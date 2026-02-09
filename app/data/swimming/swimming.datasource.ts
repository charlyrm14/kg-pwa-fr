import { fetchSwimCategoriesApi } from "./swimming.api";
import { SWIM_CATEGORIES_LIST } from "~/utils/mocks/swimming.mock";

export const fetchSwimCategoriesDataSource = async() => {

    const config = useRuntimeConfig();
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return SWIM_CATEGORIES_LIST
    }

    return fetchSwimCategoriesApi()
}
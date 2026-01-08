import { SWIM_CATEGORIES_LIST } from "~/utils/mocks/swimming.mock";
import type { ApiResponse, SwimCategory } from "#imports";

export function useSwimming () {

    const config = useRuntimeConfig();
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const swimCategories = ref<ApiResponse<SwimCategory[]> | null>(null)

    const fetchSwimCategories = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                swimCategories.value = SWIM_CATEGORIES_LIST

            } else {

                swimCategories.value = await $fetch<ApiResponse<SwimCategory[]>>(
                    `${config.public.apiBaseUrl}/swim-categories`
                )

            }

            return swimCategories.value
            
        } catch (error) {

            console.error('Error trying to get swim categories')
        }
    }

    return {
        swimCategories,
        fetchSwimCategories
    }
}
import type { ApiResponse } from "#imports"
import type { HomeUser } from "#imports"
import { HOME_OVERVIEW } from "#imports";

export function useHomeOverview () {

    const config = useRuntimeConfig();
    const IS_MOCK_API_MODE = config.public.mockApiMode
    const homeData = ref<ApiResponse<HomeUser> | null>(null)

    const fetchHomeOverview = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                homeData.value = HOME_OVERVIEW

            } else {

                const response = await $fetch<ApiResponse<HomeUser>>(
                    `${config.public.apiBaseUrl}/overview/user`
                )

                homeData.value = response
            }

            return homeData.value
            
        } catch (error) {
            console.error('Error trying to get home overview data')
        }
    }

    return {
        homeData,
        fetchHomeOverview
    }
}
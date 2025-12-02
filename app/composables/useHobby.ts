import { MOCK_HOBBIES_LIST } from "#imports";
import type { ApiResponse, HobbyData } from "#imports";

export function useHobby () {

    const config = useRuntimeConfig();
    const IS_MOCK_API_MODE = config.public.mockApiMode
    const hobbies = ref<ApiResponse<HobbyData[]> | null>(null)

    const fetchHobbies = async() => {
        try {

            if(IS_MOCK_API_MODE) {
                
                hobbies.value = MOCK_HOBBIES_LIST

            } else {

                const response = await $fetch<ApiResponse<HobbyData[]>>(
                    `${config.public.apiBaseUrl}/hobbies`
                )

                hobbies.value = response
            }

            return hobbies.value
            
        } catch (error) {
            console.error('Error trying to get hobbies')
        }
    }

    return {
        hobbies,
        fetchHobbies
    }
}

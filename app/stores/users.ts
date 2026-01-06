import type { UserProfileData } from "~~/shared/types/User"
import { MOCK_USER_AUTH_PROFILE_DATA } from "#imports"

export const useUserStore = defineStore('users', () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const user = ref<UserProfileData | null>(null)

    const fetchUserProfileData = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                user.value = MOCK_USER_AUTH_PROFILE_DATA.data

            } else {

                const response = await $fetch<ApiResponse<UserProfileData>>(
                    `${config.public.apiBaseUrl}/profile`
                )

                user.value = response.data
            }

            return user.value

        } catch(error) {
            console.error('Error getting user profile data')
        }
    }

    return {
        user,
        fetchUserProfileData
    }
})

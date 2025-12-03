import type { ApiResponse, UserBirthday } from "#imports"
import { MOCK_USER_BIRTHDAY } from "#imports"

export function useUserBirthday() {

    const config = useRuntimeConfig();
    const IS_MOCK_API_MODE = config.public.mockApiMode
    const usersBirthday = ref<ApiResponse<UserBirthday[]> | null>(null)

    const fetchUsersBirthday = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                usersBirthday.value = MOCK_USER_BIRTHDAY

            } else {

                const response = await $fetch<ApiResponse<UserBirthday[]>>(
                    `${config.public.apiBaseUrl}/users/birthdays/current`
                )

                usersBirthday.value = response
            }

            return usersBirthday.value

        } catch (error) {

            console.log('Error to get users birthday')
        }
    }

    return {
        usersBirthday,
        fetchUsersBirthday
    }
}
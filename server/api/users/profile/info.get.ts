import { UserProfileData } from "~~/shared/types/User"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserProfileData>>(
        `${config.public.apiBaseUrl}/users/profile/info`
    )
})
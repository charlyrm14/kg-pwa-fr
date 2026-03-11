export const fetchUsersBirthdayApi = async(): Promise<ApiResponse<UserBirthday[]>> => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserBirthday[]>>(
        `${config.public.apiBaseUrl}/birthdays/today`
    )
}

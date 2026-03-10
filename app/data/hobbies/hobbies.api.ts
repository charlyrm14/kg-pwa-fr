export const fetchHobbiesApi = async() => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<HobbyData[]>>(
        `${config.public.apiBaseUrl}/hobbies`
    )
}

export const addHobbiesApi = async(hobbies: Array<number>) => {

    const config = useRuntimeConfig()

    return await $fetch(
        `${config.public.apiBaseUrl}/hobbies/me`,
        {
            method: 'PUT',
            body: {
                hobbies: hobbies
            }
        }
    )
}
import { authApi } from "../auth/auth.api"

export const fetchHobbiesApi = async() => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<HobbyData[]>>(
        `${config.public.apiBaseUrl}/hobbies`
    )
}

export const addHobbiesApi = async(hobbies: Array<number>) => {

    const api = authApi()

    return await api('/hobbies/me',
        {
            method: 'PUT',
            body: {
                hobbies: hobbies
            }
        }
    )
}
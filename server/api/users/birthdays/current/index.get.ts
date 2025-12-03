import { ApiResponse } from '~~/shared/types/ApiResponse';
import { UserBirthday } from "~~/shared/types/User";

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<UserBirthday[]>>(
        `${config.public.apiBaseUrl}/users/birthdays/current`
    )
})
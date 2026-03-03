import type { ApiResponse } from "~~/shared/types/ApiResponse"
import type { Program } from "~~/shared/types/SwimProgram"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<Program>>(
        `${config.public.apiBaseUrl}/swim-programs`
    )
})
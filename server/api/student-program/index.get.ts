import type { ApiResponse } from "~~/shared/types/ApiResponse"
import type { StudentProgram } from "~~/shared/types/StudentProgram"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<StudentProgram>>(
        `${config.public.apiBaseUrl}/student-programs`
    )
})
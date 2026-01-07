import { ApiResponse } from "~~/shared/types/ApiResponse"
import type { StudentProgress } from "~~/shared/types/Progress"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<StudentProgress>>(
        `${config.public.apiBaseUrl}/student-progress`
    )
})
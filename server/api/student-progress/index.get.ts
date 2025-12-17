import { ApiResponse } from "~~/shared/types/ApiResponse"
import type { StudentProgress } from "~~/shared/types/Progress"

export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<StudentProgress>>(
        `${config.public.apiBaseUrl}/student-progress/771f8eb5-a52e-40e4-af21-af947bf76048`
    )
})
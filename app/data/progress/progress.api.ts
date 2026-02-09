import type { ApiResponse, StudentProgress } from "#imports";

export const fetchStudentProgressApi = async() => {

    const config = useRuntimeConfig();

    return await $fetch<ApiResponse<StudentProgress>>(
        `${config.public.apiBaseUrl}/student-progress`
    )
}
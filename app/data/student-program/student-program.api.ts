import type { ApiResponse, StudentProgram } from "#imports"

export const fetchStudentProgramApi = async(): Promise<ApiResponse<StudentProgram>> => {
    const config = useRuntimeConfig()

    return $fetch<ApiResponse<StudentProgram>>(
        `${config.public.apiBaseUrl}/student-programs`
    )
}
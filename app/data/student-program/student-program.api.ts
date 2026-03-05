import type { 
    ApiResponse, 
    AssignStudentProgramPayload, 
    StudentProgram 
} from "#imports"

export const fetchStudentProgramApi = async(uuid?: string): Promise<ApiResponse<StudentProgram>> => {
    const config = useRuntimeConfig()

    return $fetch<ApiResponse<StudentProgram>>(
        `${config.public.apiBaseUrl}/student-programs/`
    )
}

export const assignUserProgressApi = async(payload: AssignStudentProgramPayload) => {
    const config = useRuntimeConfig()

    return $fetch<ApiResponse<StudentProgram>>(
        `${config.public.apiBaseUrl}/student-programs`, 
        {
            method: 'POST',
            body: payload
        }
    )
}

export const updateSkillProgressApi = async(skillProgressId: number, percentage: number) => {

    const config = useRuntimeConfig()

    return $fetch(
        `${config.public.apiBaseUrl}/student-skill-progress/${skillProgressId}`,
        {
            method: 'PATCH',
            body: {
                progress_percentage: percentage
            }
        }
    )
}
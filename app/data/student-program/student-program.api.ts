import { 
    type ApiResponse, 
    type AssignStudentProgramPayload, 
    type StudentProgram 
} from "#imports"
import { authApi } from "../auth/auth.api"

export const fetchStudentProgramApi = async(uuid?: string): Promise<ApiResponse<StudentProgram>> => {

    const api = authApi()

    return await api<ApiResponse<StudentProgram>>(
        uuid ? `/student-programs/${uuid}` : '/student-programs'
    )
}

export const assignUserProgressApi = async(payload: AssignStudentProgramPayload) => {
    const config = useRuntimeConfig()

    return await $fetch<ApiResponse<StudentProgram>>(
        `${config.public.apiBaseUrl}/student-programs`, 
        {
            method: 'POST',
            body: payload
        }
    )
}

export const updateSkillProgressApi = async(skillProgressId: number, percentage: number) => {

    const config = useRuntimeConfig()

    return await $fetch(
        `${config.public.apiBaseUrl}/student-skill-progress/${skillProgressId}`,
        {
            method: 'PATCH',
            body: {
                progress_percentage: percentage
            }
        }
    )
}
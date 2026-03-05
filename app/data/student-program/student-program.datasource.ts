import { MOCK_STUDENT_PROGRAM_PROGRESS } from "~/utils/mocks/student-program.mock"
import { 
    assignUserProgressApi, 
    fetchStudentProgramApi, 
    updateSkillProgressApi 
} from "./student-program.api"

export const fetchStudentProgramDataSource = async(uuid?: string) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode
    
    if(IS_MOCK_API_MODE) {
        return MOCK_STUDENT_PROGRAM_PROGRESS
    } 

    return fetchStudentProgramApi(uuid)
}

export const assignUserProgressDataSource = async(payload: AssignStudentProgramPayload) => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode
    
    if(IS_MOCK_API_MODE) {
        return
    }
    
    return assignUserProgressApi(payload)
}

export const updateSkillProgressDataSource = async(skillProgressId: number, percentage: number) => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode
    
    if(IS_MOCK_API_MODE) {
        return
    } 

    return updateSkillProgressApi(skillProgressId, percentage)
}
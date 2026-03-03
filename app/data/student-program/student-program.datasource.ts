import { MOCK_STUDENT_PROGRAM_PROGRESS } from "~/utils/mocks/student-program.mock"
import { fetchStudentProgramApi } from "./student-program.api"

export const fetchStudentProgramDataSource = async() => {
    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode
    
    if(IS_MOCK_API_MODE) {
        return MOCK_STUDENT_PROGRAM_PROGRESS
    } 

    return fetchStudentProgramApi()
}
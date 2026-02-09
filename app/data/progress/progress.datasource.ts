import { fetchStudentProgressApi } from "./progress.api";
import { STUDENT_PROGRESS } from "~/utils/mocks/student-progress.mock";

export const fetchStudentProgressDataSource = async() => {

    const config = useRuntimeConfig();
    const IS_MOCK_API_MODE = config.public.mockApiMode

    if(IS_MOCK_API_MODE) {
        return STUDENT_PROGRESS
    }

    return fetchStudentProgressApi()
}
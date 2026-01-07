import type { ApiResponse } from "#imports";
import type { StudentProgress } from "#imports";
import { STUDENT_PROGRESS } from "#imports";

export function useStudentProgress () {

    const config = useRuntimeConfig();
    const IS_MOCK_API_MODE = config.public.mockApiMode

    const studentProgress = ref<ApiResponse<StudentProgress> | null>(null)

    const fetchStudentProgress = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                studentProgress.value = STUDENT_PROGRESS

            } else {

                const response = await $fetch<ApiResponse<StudentProgress>>(
                    `${config.public.apiBaseUrl}/student-progress`
                )

                studentProgress.value = response
            }

            return studentProgress.value
            
        } catch (error) {

            console.error('Error trying to student progress')
        }
    }

    return {
        studentProgress,
        fetchStudentProgress
    }
}
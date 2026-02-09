import { fetchStudentProgressDataSource } from "~/data/progress/progress.datasource";

export function useStudentProgress () {

    const fetchStudentProgress = async() => {
        try {
            return await fetchStudentProgressDataSource()
        } catch (error) {
            console.error(error)
        }
    }

    return {
        fetchStudentProgress
    }
}
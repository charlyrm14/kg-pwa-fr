import { fetchStudentProgramDataSource } from "~/data/student-program/student-program.datasource"

export function useStudentProgram  () {

    const fetchStudentProgram = async() => {
        return await fetchStudentProgramDataSource()
    }

    return {
        fetchStudentProgram
    }
}
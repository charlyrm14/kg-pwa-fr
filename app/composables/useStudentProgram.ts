import { 
    assignUserProgressDataSource,
    fetchStudentProgramDataSource, 
    updateSkillProgressDataSource 
} from "~/data/student-program/student-program.datasource"

import { 
    useAlert,
    type AssignStudentProgramPayload,
    type StudentProgram 
} from "#imports"

export function useStudentProgram  () {

    const { showAlert } = useAlert()

    const studentProgram = useState<StudentProgram | null>(
        'student-program',
        () => null
    )

    const loading = useState<boolean>(
        'student-program-loading',
        () => false
    )

    const error = useState<any>(
        'student-program-error',
        () => null
    )

    /**
     * The function `fetchStudentProgram` asynchronously fetches student program data, avoiding
     * duplicate requests and handling loading and error states.
     * @param {string} [uuid] - The `uuid` parameter in the `fetchStudentProgram` function is an
     * optional string parameter. It is used to uniquely identify a student program when fetching data.
     * If a `uuid` is provided, the function will attempt to fetch the student program data associated
     * with that specific `uuid`. If no `
     * @returns The function `fetchStudentProgram` is returning the data fetched from the
     * `fetchStudentProgramDataSource` function.
     */
    const fetchStudentProgram = async(uuid?: string) => {
        try {

            /** Evita doble fetch */
            if (studentProgram.value || loading.value) return

            loading.value = true
            error.value = null

            const response = await fetchStudentProgramDataSource(uuid)
            studentProgram.value = response.data 

            return response.data

        } catch (error) {
            console.error(error)
            throw error
        } finally {
            loading.value = false
        }
    }

    /**
     * The function `assignUserProgress` assigns user progress, displays a success message, fetches
     * student program data if a user UUID is provided, and handles errors by displaying appropriate
     * alerts.
     * @param {AssignStudentProgramPayload} payload - The `payload` parameter in the
     * `assignUserProgress` function is of type `AssignStudentProgramPayload`. It is an object that
     * contains the necessary data for assigning user progress, such as user UUID and program details.
     */
    const assignUserProgress = async(payload: AssignStudentProgramPayload) => {
        try {

            await assignUserProgressDataSource(payload)

            showAlert('Éxito', 'Progreso asignado con éxito', 'success')

            if(payload?.user_uuid) {
                await fetchStudentProgram(payload?.user_uuid)
            }
            
        } catch (error: any) {
            if(error.statusCode === 422) {
                showAlert('Error', error.data.message, 'error')
            } else {
                showAlert('Error', 'Hubo un error al asignar el progreso', 'error')
            }

            console.error(error)
            throw error
        }
    }

    /**
     * The function `updateStudentSkillProgress` updates a student's skill progress, displays a success
     * message, and fetches the student's program data, handling errors with an alert.
     * @param {number} skillProgressId - The `skillProgressId` parameter is the unique identifier of
     * the skill progress that you want to update. It is used to identify the specific skill progress
     * record in the data source that needs to be updated with the new percentage value.
     * @param {number} percentage - The `percentage` parameter in the `updateStudentSkillProgress`
     * function represents the new progress percentage for a specific skill. This value is used to
     * update the skill progress of a student in a learning program. It indicates how much of the skill
     * has been completed or mastered by the student.
     */
    const updateStudentSkillProgress = async(skillProgressId: number, percentage: number, userUuid: string) => {
        try {

            await updateSkillProgressDataSource(skillProgressId, percentage)
            
            showAlert('Éxito', 'Habilidad actualizada con éxito', 'success')

            await fetchStudentProgram(userUuid)

        } catch (error) {
            showAlert('Error', 'Hubo un error al actualizar la habilidad', 'error')
            console.error(error)
            throw error
        }
    }

    return {
        studentProgram,
        loading,
        error,
        fetchStudentProgram,
        assignUserProgress,
        updateStudentSkillProgress
    }
}
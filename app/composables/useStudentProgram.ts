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

    const assignUserProgress = async(payload: AssignStudentProgramPayload) => {
        try {

            await assignUserProgressDataSource(payload)

            showAlert('Éxito', 'Progreso asignado con éxito', 'success')

            await fetchStudentProgram()
            
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

    const updateStudentSkillProgress = async(skillProgressId: number, percentage: number) => {
        try {

            await updateSkillProgressDataSource(skillProgressId, percentage)
            
            showAlert('Éxito', 'Habilidad actualizada con éxito', 'success')

            await fetchStudentProgram()

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
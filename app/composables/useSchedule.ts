import { assignUserScheduleDataSource, fetchUserScheduleDataSource } from "~/data/schedule/schedule.datasource";
import { useAlert } from "#imports";

export function useSchedule () {

    const { showAlert } = useAlert()

    const fetchUserSchedule = async() => {
        try {
            return await fetchUserScheduleDataSource()
        } catch (error) {
            console.error(error)
        }
    }

    const assignUserSchedule = async(userUuid: string, payload: AssignUserSchedulePayload) => {
        try {
            await assignUserScheduleDataSource(userUuid, payload)
            showAlert('Éxito', 'Horario asignado con éxito', 'success')

        } catch (error: any) {
            showAlert('Error', 'Hubo un error al asignar el horario', 'error')
            console.error(error)
            throw error
        }
    }

    return {
        fetchUserSchedule,
        assignUserSchedule
    }
}
import * as yup from 'yup'

export const newAssignUserSchedule = yup.object({
    entry_time: yup
        .string()
        .required('Debes seleccionar un horario de entrada'),
    departure_time: yup
        .string()
        .required('Debes seleccionar un horario de salida'),
})

import * as yup from 'yup'

export const newRetroactiveAttendanceSchema = yup.object({
    attendance_date: yup
        .string()
        .required('Debes agregar la fecha de asistencia'),
    attendance_status_id: yup   
        .number()
        .required('Debes seleccionar un estatus')
        .notOneOf([0], 'Debes seleccionar un estatus'),
})

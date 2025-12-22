import * as yup from 'yup'

export const newEventSchema = yup.object({
    name: yup
        .string()
        .min(8, 'El título debe tener al menos 8 caracteres')
        .max(100, 'El título debe tener un máximo de 100 caracteres')
        .required('Debes agregar un título'),
    content: yup
        .string()
        .min(8, 'El contenido debe tener al menos 8 caracteres')
        .max(2000, 'El título debe tener un máximo de 2000 caracteres')
        .required('Debes agregar una breve descripción del evento'),
    content_status_id: yup
        .number()
        .required('Debes seleccionar una categoría')
        .notOneOf([0], 'Debes seleccionar un estatus'),
    start_date: yup
        .string()
        .required('Debes agregar la fecha de inicio del evento')
        .matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,'Formato inválido, se esperaba el formato (YYYY-MM-DD HH:mm)'),
    end_date: yup
        .string()
        .required('Debes agregar la fecha de fin del evento')
        .matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,'Formato inválido, se esperaba el formato (YYYY-MM-DD HH:mm)'),
    location: yup
        .string()
        .min(8, 'La ubicación debe tener al menos 8 caracteres')
        .max(200, 'El título debe tener un máximo de 2000 caracteres')
        .required('Debes agregar una breve descripción del evento')
})
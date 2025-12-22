import * as yup from 'yup'

export const newNutritionSchema = yup.object({
    name: yup
        .string()
        .min(8, 'El título debe tener al menos 8 caracteres')
        .max(100, 'El título debe tener un máximo de 100 caracteres')
        .required('Debes agregar un título'),
    content: yup
        .string()
        .min(8, 'El contenido debe tener al menos 8 caracteres')
        .max(2000, 'El título debe tener un máximo de 2000 caracteres')
        .required('Debes agregar una breve descripción'),
    content_status_id: yup
        .number()
        .required('Debes seleccionar una categoría')
        .notOneOf([0], 'Debes seleccionar un estatus'),
})

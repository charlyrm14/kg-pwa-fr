import * as yup from 'yup'

export const updateUserSchema = yup.object({
    name: yup
        .string()
        .min(4, 'El nombre debe tener al menos 4 caracteres')
        .max(20, 'El nombre debe tener un máximo de 20 caracteres')
        .required('Debes agregar un nombre'),
    last_name: yup
        .string()
        .min(4, 'El apellido aterno debe tener al menos 4 caracteres')
        .max(20, 'El apellido aterno debe tener un máximo de 20 caracteres')
        .required('Debes agregar un apellido paterno'),
    mother_last_name: yup
        .string()
        .min(4, 'El apellido materno debe tener al menos 4 caracteres')
        .max(20, 'El apellido materno debe tener un máximo de 20 caracteres')
        .nullable(),
    birthdate: yup
        .string()
        .required('Debes agregar una fecha de nacimiento'),
    role_id: yup
        .number()
        .required('Debes seleccionar un rol de usuario')
        .notOneOf([0], 'Debes seleccionar un rol de usuario valido'),
})
import * as yup from 'yup'

export const newUserSchema = yup.object({
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
        .max(20, 'El apellido materno debe tener un máximo de 20 caracteres'),
    email: yup
        .string()
        .email()
        .max(30, 'El correo debe tener un máximo de 30 caracteres')
        .required('Debes ingresar un correo electrónico'),
    birthdate: yup
        .string()
        .required('Debes agregar una fecha de nacimiento'),
    role_id: yup
        .number()
        .required('Debes seleccionar un rol de usuario')
        .notOneOf([0], 'Debes seleccionar un rol de usuario valido'),
})
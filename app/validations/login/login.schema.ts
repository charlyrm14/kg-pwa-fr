import * as yup from 'yup'

export const loginSchema = yup.object({
    email: yup
        .string()
        .email('Ingresa un correo electrónico valido')
        .required('Ingresa un correo electrónico'),
    password: yup
        .string()
        .required('Ingresa tu contraseña')
})

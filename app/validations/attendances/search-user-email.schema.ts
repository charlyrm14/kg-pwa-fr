import * as yup from 'yup'

export const searchUserEmailSchema = yup.object({
    email: yup
            .string()
            .email('Ingresa un correo electrónico valido')
            .required('Ingresa un correo electrónico')
})

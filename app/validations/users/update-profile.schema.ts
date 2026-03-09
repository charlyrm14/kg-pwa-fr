import * as yup from 'yup'


export const updateProfileSchema = yup.object({
    about_me: yup
        .string()
        .min(4, 'Texto demasiado corto')
        .max(600, 'Texto demasiado largo'),
    birthdate: yup
        .string()
        .matches(
            /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
            'La fecha debe tener el formato AAAA-MM-DD'
        ),
    phone_number: yup
        .string()
        .nullable()
        .matches(/^[0-9]+$/, 'El teléfono solo debe contener números')
        .length(10, 'El número debe tener exactamente 10 dígitos'),
    address: yup
        .string()
        .min(4, 'Dirección demasiado corta')
        .max(250, 'Haz alcanzado el límite de texto para una dirección'),
    gender_id: yup
        .number()
        .notOneOf([0], 'Debes seleccionar un genero'),
})

export const aboutMeSchema = updateProfileSchema.pick(['about_me']);
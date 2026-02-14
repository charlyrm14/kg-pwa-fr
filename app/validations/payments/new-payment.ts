import * as yup from 'yup'

export const newPaymentSchema = yup.object({
    payment_type_id: yup
        .number()
        .required('Debes seleccionar una tipo de pago')
        .notOneOf([0], 'Debes seleccionar un tipo de pago valido'),
    amount: yup
        .number()
        .required('Debes ingresar un monto'),
    payment_date: yup
        .string(),
    payment_reference_id: yup
        .number()
        .required('Debes seleccionar una referencia de pago')
        .notOneOf([0], 'Debes seleccionar una referencia de pago valida'),
    notes: yup
        .string()
        .min(8, 'La nota debe tener al menos 8 caracteres')
        .max(2000, 'La nota debe tener un máximo de 2000 caracteres')
        .optional()
})

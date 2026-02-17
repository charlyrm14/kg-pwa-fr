import type { CursorPagination } from '~~/shared/types/Pagination'
import type { 
    Payment, 
    PaymentFilters, 
    CreatePaymentPayload, 
    PaymentDetail
} from '~~/shared/types/Payment'
import { 
        fetchPaymentsDataSource,
        fetchPaymentByIdDataSource,
        createPaymentDataSource
} from '~/data/payments/payments.datasource'
import { useAlert, type ApiResponse } from '#imports'

export const usePaymentStore = defineStore('payments', () => {

    const { showAlert } = useAlert()

    const config = useRuntimeConfig()
    const payments = ref<CursorPagination<Payment> | null>(null)
    const paymentDetail = ref<PaymentDetail | null>(null)
    const typeFilter = ref<'todo' |'visita' | 'mensual-basica' | 'anual'>('todo')

    /**
     * The function fetchPayments asynchronously fetches payment data with optional filters and updates
     * the payments value.
     * @param [page=1] - The `page` parameter in the `fetchPayments` function is used to specify the
     * page number of the data to be fetched. By default, it is set to 1 if no value is provided when
     * calling the function. This parameter is typically used in scenarios where data is paginated, and
     * you
     * @param {PaymentFilters} filters - The `filters` parameter in the `fetchPayments` function is an
     * object that contains specific criteria to filter the payments data. It is of type
     * `PaymentFilters`, which likely includes properties such as payment status, payment date range,
     * payment method, etc. These filters are used to fetch payments that meet
     * @returns The `fetchPayments` function is returning the `payments.value` after setting it to the
     * data retrieved from the `fetchPaymentsDataSource` function.
     */
    const fetchPayments = async(pageUrl: string | null = null, filters: PaymentFilters = {}) => {
        try {

            const endpoint = pageUrl ? pageUrl : `${config.public.apiBaseUrl}/payments`

            const response = await fetchPaymentsDataSource(endpoint, filters)
            
            payments.value = response.data
            return payments.value
            
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * The function fetches payment details by ID asynchronously using a data source and updates the
     * paymentDetail value.
     * @param {number} paymentId - The `paymentId` parameter is a number that is used to identify a
     * specific payment for which you want to fetch details.
     * @returns The `fetchPaymentById` function is returning the value of `paymentDetail.value`.
     */
    const fetchPaymentById = async(paymentId: number) => {
        try {
            const response = await fetchPaymentByIdDataSource(paymentId)
            paymentDetail.value = response.data

            return paymentDetail.value
            
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * The function `create` asynchronously creates a payment, navigates to a specific page, and
     * displays a success or error alert message.
     * @param {CreatePaymentPayload} payload - The `payload` parameter in the `create` function likely
     * contains data needed to create a payment. It is of type `CreatePaymentPayload`, which suggests
     * it may include information such as payment amount, payment method, recipient details, and any
     * other relevant data required to process a payment.
     */
    const create = async(payload: CreatePaymentPayload) => {
        try {

            await createPaymentDataSource(payload)
            await navigateTo('/kg-admin/payments')

            setTimeout(() => {
                showAlert('Éxito', 'Pago registrado con éxito', 'success')
            }, 1000);
            
    
        } catch (error) {
            console.error(error)
            showAlert('Error', 'Algo salio mal al registrar tu pago :(', 'error') 
        }
    }

    /* The `filteredPayments` constant is using the `computed` function to create a reactive computed
    property based on the values of `payments` and `typeFilter`. Here's a breakdown of what it's
    doing: */
    const filteredPayments = computed(() => {
        
        if(!payments.value) return null

        if(typeFilter.value === 'todo') {
            return payments.value.data
        }
        
        return payments.value.data.filter(p => p.type.slug === typeFilter.value)
    })

    return {
        payments,
        paymentDetail,
        typeFilter,
        fetchPayments,
        fetchPaymentById,
        create,
        filteredPayments
    }
})

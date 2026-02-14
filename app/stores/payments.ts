import type { CursorPagination } from '~~/shared/types/Pagination'
import type { 
    Payment, 
    PaymentFilters, 
    CreatePaymentPayload 
} from '~~/shared/types/Payment'
import { createPaymentDataSource, fetchPaymentsDataSource } from '~/data/payments/payments.datasource'
import { useAlert } from '#imports'

export const usePaymentStore = defineStore('payments', () => {

    const { showAlert } = useAlert()

    const config = useRuntimeConfig()
    const payments = ref<CursorPagination<Payment> | null>(null)
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
        typeFilter,
        fetchPayments,
        create,
        filteredPayments
    }
})

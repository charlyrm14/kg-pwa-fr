import type { CursorPagination } from '~~/shared/types/Pagination'
import type { Payment, PaymentFilters } from '~~/shared/types/Payment'
import { fetchPaymentsDataSource } from '~/data/payments/payments.datasource'

export const usePaymentStore = defineStore('payments', () => {

    const config = useRuntimeConfig()
    const payments = ref<CursorPagination<Payment> | null>(null)
    const typeFilter = ref<0 | 1 | 2 | 3 | 4>(0)

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
    const fetchPayments = async(
        pageUrl: string | null = null, 
        filters: PaymentFilters = {}
    ) => {
        try {

            const endpoint = pageUrl ? pageUrl : `${config.public.apiBaseUrl}/payments`

            const response = await fetchPaymentsDataSource(endpoint, filters)
            
            payments.value = response.data
            return payments.value
            
        } catch (error) {
            console.error(error)
        }
    }

    const filteredPayments = computed(() => {
        
        if(!payments.value) return null

        if(typeFilter.value === 0) {
            return payments.value.data
        }
        
        return payments.value.data.filter(p => p.type.id === typeFilter.value)
    })

    return {
        payments,
        typeFilter,
        fetchPayments,
        filteredPayments
    }
})

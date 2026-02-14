import { CreatePaymentPayload, Payment } from "~~/shared/types/Payment";
import { getTodayDate } from "~/utils/date";

export function adaptPayment (payload: CreatePaymentPayload): Payment {
    return {
        id: Math.floor(Math.random() * 100) + 1,
        amount: payload.amount,
        payment_date: payload.payment_date,
        covered_until_date: getTodayDate(),
        notes: payload.notes ?? null,
        created_at: getTodayDate(),
        created_at_formatted: "Right now",
        user: null,
        type: {
            name: "Visita",
            slug: "visita"
        },
        reference: {
            name: "Efectivo",
            slug: "efectivo"
        }
    }
}
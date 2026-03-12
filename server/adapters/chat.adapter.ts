import { getTodayDate } from "~/utils/date"
import type { HistoryChatMessage } from "~~/shared/types/Chat"

export function adaptMessage (payload: HistoryChatMessage): HistoryChatMessage {
    return {
        id: Math.floor(Math.random() * 100) + 1,
        message: payload.message,
        sender_type: payload.sender_type,
        created_at: getTodayDate(),
        user: {
            name: payload.user?.name,
            last_name: payload?.user?.last_name,
            email: payload?.user?.email
        },
    }
}
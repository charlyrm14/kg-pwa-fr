import type { CreateContentPayload } from "~~/shared/types/Content";
import type { Content } from "~~/shared/types/Content";
import { statusName, textTypeContentById } from '~/utils/contents'
import { toSlug } from '~/utils/string'
import { getTodayDate, extractHourMinutes } from '~/utils/date'

export function adaptContent (payload: CreateContentPayload): Content {
    return {
        name: payload.name,
        slug: toSlug(payload.name),
        content: payload.content,
        created_at: getTodayDate(),
        updated_at: getTodayDate(),
        author: 'Carlos Ramos',
        type: textTypeContentById(payload.content_type_id),
        status: statusName(payload.content_status_id), 
        event: payload.content_type_id === 2
            ? {
                location: payload.location ?? 'Unknown',
                start_date: payload.start_date ?? 'Unknown',
                start_hour: extractHourMinutes(payload.start_date),
                end_date: payload.end_date ?? 'Unknown',
                end_hour: extractHourMinutes(payload.end_date)
            } 
            : null
    }
}
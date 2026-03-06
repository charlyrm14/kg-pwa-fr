import { getTodayDate } from "~/utils/date";
import { CreateUserPayload, User } from "~~/shared/types/User";

export function adaptUser (payload: CreateUserPayload): User {
    return {
        name: payload.name,
        last_name: payload.last_name,
        mother_last_name: payload.mother_last_name ?? null,
        email: payload.email,
        uuid: crypto.randomUUID(),
        student_code: `STU-${getTodayDate()}`,
        role_id: payload.role_id,
        created_at: getTodayDate(),
        role_name: payload.name,
    }
}
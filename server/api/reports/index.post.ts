import type { AttendanceReport } from "~~/shared/types/Attendance";

export default defineEventHandler(async(event) => {

    const body = await readBody<AttendanceReport>(event)
    const config = useRuntimeConfig();

    try {

        return await $fetch<AttendanceReport>(`${config.public.apiBaseUrl}/reports`, {
            method: 'POST',
            body,
            responseType: 'blob'
        })
        
    } catch (error) {
        console.error(error)
    }
});

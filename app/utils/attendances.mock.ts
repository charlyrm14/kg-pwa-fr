import type { ApiResponse } from "#imports"
import type { UserAttendance } from "#imports"

export const MOCK_USER_ATTENDANCES_CURRENT_MONTH: ApiResponse<UserAttendance> = {
    data: {
        name: "Carlos I",
        last_name: "Ramos",
        mother_last_name: null,
        email: "charlyrm14@gmail.com",
        uuid: "771f8eb5-a52e-40e4-af21-af947bf76048",
        student_code: null,
        current_month: "Diciembre",
        current_year: 2025,
        attendances: [
            {
                day_id: 1,
                day_name: "LUNES",
                shorting_day: "L",
                day_with_number: "LUNES, 08",
                day_number: 1,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "PRESENT",
                attendance_description: "El alumno o participante asistió a la sesión.",
                attendance_month: "Diciembre"
            },
            {
                day_id: 6,
                day_name: "SÁBADO",
                shorting_day: "S",
                day_with_number: "SÁBADO, 06",
                day_number: 6,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "PRESENT",
                attendance_description: "El alumno o participante asistió a la sesión.",
                attendance_month: "Diciembre"
            },
            {
                day_id: 5,
                day_name: "VIERNES",
                shorting_day: "V",
                day_with_number: "VIERNES, 05",
                day_number: 5,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "LATE",
                attendance_description: "El alumno llegó tarde.",
                attendance_month: "Diciembre"
            },
            {
                day_id: 3,
                day_name: "MIÉRCOLES",
                shorting_day: "M",
                day_with_number: "MIÉRCOLES, 03",
                day_number: 3,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "ABSENT_UNJUSTIFIED",
                attendance_description: "Ausencia sin previo aviso ni justificación.",
                attendance_month: "Diciembre"
            },
            {
                day_id: 1,
                day_name: "LUNES",
                shorting_day: "L",
                day_with_number: "LUNES, 01",
                day_number: 1,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "PRESENT",
                attendance_description: "El alumno o participante asistió a la sesión.",
                attendance_month: "Diciembre"
            }
        ]
    }
}
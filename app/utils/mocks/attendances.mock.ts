import type { ApiResponse } from "#imports"
import type { UserAttendance } from "#imports"
import type { AttendanceCurrentDay } from "~~/shared/types/Attendance"
import type { PaginationContent } from "#imports"
import type { AttendanceStatus } from "~~/shared/types/Attendance"

export const MOCK_ATTENDANCES_STATUSES: ApiResponse<AttendanceStatus[]> = {
    data: [
        {
            id: 1,
            name: "Asistió",
            description: "El alumno o participante asistió a la sesión."
        },
        {
            id: 2,
            name: "Ausencia no justificada",
            description: "Ausencia sin previo aviso ni justificación."
        },
        {
            id: 3,
            name: "Ausencia justificada",
            description: "Ausencia justificada (ej. enfermedad, cita médica)."
        },
        {
            id: 4,
            name: "Tarde",
            description: "El alumno llegó tarde."
        },
        {
            id: 5,
            name: "Exento",
            description: "Exento de asistir por parte del entrenador (ej. lesión, descanso)."
        },
        {
            id: 6,
            name: "No asignado",
            description: "Día no asignado como asistencia."
        }
    ]
}

export const MOCK_USER_ATTENDANCES_CURRENT_MONTH: ApiResponse<UserAttendance> = {
    data: {
        name: "Carlos I",
        last_name: "Ramos",
        mother_last_name: null,
        email: "charlyrm14@gmail.com",
        uuid: "9fc11977-5ee9-4f00-b279-9778797b06c3",
        student_code: null,
        current_month: "Diciembre",
        current_year: 2025,
        attendances: [
            {
                day_id: 4,
                day_name: "Jueves 08",
                shorting_day: "J",
                day_with_number: "Jueves, 08",
                day_number: 8,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "No asignado",
                attendance_description: "Día no asignado como asistencia.",
                attendance_month: "Enero"
            },
            {
                day_id: 3,
                day_name: "Miércoles",
                shorting_day: "M",
                day_with_number: "Miércoles, 07",
                day_number: 7,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "Asistió",
                attendance_description: "El alumno o participante asistió a la sesión.",
                attendance_month: "Enero"
            },
            {
                day_id: 2,
                day_name: "Martes",
                shorting_day: "M",
                day_with_number: "Martes, 06",
                day_number: 6,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "Tarde",
                attendance_description: "El alumno llegó tarde.",
                attendance_month: "Enero"
            },
            {
                day_id: 1,
                day_name: "Lunes",
                shorting_day: "L",
                day_with_number: "Lunes, 05",
                day_number: 5,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "Ausencia no justificada",
                attendance_description: "Ausencia sin previo aviso ni justificación.",
                attendance_month: "Enero"
            },
            {
                day_id: 7,
                day_name: "Domingo",
                shorting_day: "D",
                day_with_number: "Domingo, 04",
                day_number: 4,
                entry_time: "09:00:00",
                departure_time: "10:00:00",
                type_attendance: "Asistió",
                attendance_description: "El alumno o participante asistió a la sesión.",
                attendance_month: "Enero"
            }
        ]
    }
}

export const MOCK_USER_ATTENDANCES_CURRENT_DAY: PaginationContent<AttendanceCurrentDay> = {
    current_page: 1,
    data: [
        {
            user: {
                name: "Carlos I.",
                last_name: "Ramos",
                mother_last_name: null,
                email: "charlyrm14@gmail.com",
                uuid: "771f8eb5-a52e-40e4-af21-af947bf76048",
                student_code: null,
                role_name: "ADMIN"
            },
            day_name: "MARTES",
            shorting_day: "M",
            day_formatted_name: "Martes",
            entry_time: "10:00:00",
            departure_time: "11:00:00",
            attendance_status_id: null,
            attendance_status: null,
            created_at: "2025-12-03",
            updated_at: "2025-12-03"
        },
        {
            user: {
                name: "Valentina E",
                last_name: "Hérnandez",
                mother_last_name: null,
                email: "vhernandezkg@gmail.com",
                uuid: "314f6587-5371-41bc-b77a-62c6a7e20ec8",
                student_code: "STU-20251013-8656",
                role_name: "STUDENT"
            },
            day_name: "MARTES",
            shorting_day: "M",
            day_formatted_name: "Martes",
            entry_time: "10:00:00",
            departure_time: "11:00:00",
            attendance_status_id: null,
            attendance_status: null,
            created_at: "2025-12-03",
            updated_at: "2025-12-03"
        }
    ],
    last_page: 1,
    links: {
        first: "http://127.0.0.1:8000/api/v1/attendances/today?page=1",
        last: "http://127.0.0.1:8000/api/v1/attendances/today?page=1",
        prev: null,
        next: null
    },
    next_page_url: null,
    per_page: 15,
    prev_page_url: null,
    total: 1
}
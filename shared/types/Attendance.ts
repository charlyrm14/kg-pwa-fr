export const ATTENDANCE_STATUS_MAP = {
    PRESENT: { 
        color: 'bg-lime-500', 
        status: 'Asistió' 
    },
    ABSENT_UNJUSTIFIED: { 
        color: 'bg-red-500', 
        status: 'Ausencia sin justificación.'
    },
    ABSENT_JUSTIFIED: { 
        color: 'bg-orange-500', 
        status: 'Ausencia justificada' 
    },
    LATE: { 
        color: 'bg-amber-500',
        status: 'Retardo' 
    },
    EXCUSED: { 
        color: 'bg-teal-500', 
        status: 'Exento de asistir.' 
    },
    UNASSIGNED: { 
        color: 'bg-gray-600', 
        status: 'Día no asignado' 
    },
} as const;

export type AttendanceType = keyof typeof ATTENDANCE_STATUS_MAP

export type AttendanceBgColor = typeof ATTENDANCE_STATUS_MAP[AttendanceType]['color'];

export interface AttendanceColorMap {
    id: number;
    status: string;
    color: AttendanceBgColor;
}

export interface Attendance {
    day_id: number
    day_name: string
    shorting_day: string
    day_with_number: string
    day_number: number
    entry_time: string
    departure_time: string
    type_attendance: string
    attendance_description: string
    attendance_month: string
}

export interface UserAttendance {
    name: string
    last_name: string
    mother_last_name: string | null 
    email: string
    uuid: string
    student_code: string | null
    current_month: string
    current_year: number
    attendances: Attendance[]
}
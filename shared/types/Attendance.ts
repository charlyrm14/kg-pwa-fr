export const ATTENDANCE_STATUS_MAP = {
    PRESENT: { 
        color: 'bg-lime-500', 
        status: 'Asistió' 
    },
    ABSENT_UNJUSTIFIED: { 
        color: 'bg-red-500', 
        status: 'Ausencia no justificada.'
    },
    ABSENT_JUSTIFIED: { 
        color: 'bg-yellow-500', 
        status: 'Ausencia justificada' 
    },
    LATE: { 
        color: 'bg-orange-400',
        status: 'Retardo' 
    },
    EXCUSED: { 
        color: 'bg-teal-600', 
        status: 'Exento' 
    },
    UNASSIGNED: { 
        color: 'bg-slate-400', 
        status: 'No asignado' 
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

export interface AttendanceReport {
    report_type: string
    year: number
    month: number
    user_id: string | null
}

export interface UserAttendanceCurrentDay {
    name: string
    last_name: string
    mother_last_name: string | null
    email: string
    uuid: string
    student_code: string | null
    role_name: string
}

export interface AttendanceCurrentDay {
    user: UserAttendanceCurrentDay
    day_name: string
    shorting_day: string
    day_formatted_name: string
    entry_time: string
    departure_time: string
    attendance_status: string | null
    created_at: string
    updated_at: string
}

export interface AttendanceStatus {
    id: number
    name: string
    description: string
}
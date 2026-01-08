import type { ApiResponse, UserSchedule } from "#imports"

export const MOCK_USER_SCHEDULE: ApiResponse<UserSchedule> = {
    data: {
        name: "Carlos I",
        last_name: "Ramos",
        mother_last_name: null,
        email: "charlyrm14@gmail.com",
        uuid: "771f8eb5-a52e-40e4-af21-af947bf76048",
        student_code: null,
        schedules: [
            {
                day_id: 1,
                day_name: "Lunes",
                shorting_day: "L",
                day_formatted_name: "Lunes",
                entry_time: "09:00",
                departure_time: "10:00"
            },
            {
                day_id: 3,
                day_name: "Miércoles",
                shorting_day: "M",
                day_formatted_name: "Miércoles",
                entry_time: "09:00",
                departure_time: "10:00"
            },
            {
                day_id: 5,
                day_name: "Viernes",
                shorting_day: "V",
                day_formatted_name: "Viernes",
                entry_time: "09:00",
                departure_time: "10:00"
            },
            {
                day_id: 6,
                day_name: "Sábado",
                shorting_day: "S",
                day_formatted_name: "Sábado",
                entry_time: "09:00",
                departure_time: "10:00"
            }
        ]   
    } 
}
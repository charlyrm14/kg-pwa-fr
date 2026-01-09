import type { ApiResponse, PaginationContent, UserBirthday, User } from "#imports"
import type { UserFilters } from "~~/shared/types/User"

export const MOCK_USERS: PaginationContent<User> = {
    current_page: 1,
    data: [
        {
            name: "Héctor A",
            last_name: "Hérnandez",
            mother_last_name: null,
            email: "handrekg@gmail.com",
            uuid: "1a008647-6544-42e5-a3d0-42a4e54a5c92",
            student_code: "STU-20260108-7308",
            role_id: 3,
            created_at: "2026-01-08",
            role_name: "Estudiante"
        },
        {
            name: "Valentina E",
            last_name: "Hérnandez",
            mother_last_name: null,
            email: "vhernandezkg@gmail.com",
            uuid: "63595e9c-d9d5-4a09-a683-8818192f21b2",
            student_code: "STU-20260108-1271",
            role_id: 3,
            created_at: "2026-01-08",
            role_name: "Estudiante"
        },
        {
            name: "Gregorio",
            last_name: "Morales",
            mother_last_name: null,
            email: "gmoraleskg@gmail.com",
            uuid: "236e703d-2d2d-4326-98af-bfe82934d6aa",
            student_code: null,
            role_id: 2,
            created_at: "2026-01-08",
            role_name: "Profesor"
        },
        {
            name: "Virginia",
            last_name: "Morales",
            mother_last_name: null,
            email: "gusi_allison@gmail.com",
            uuid: "9418476f-b9c4-46aa-8cbb-ad97ee7cb460",
            student_code: null,
            role_id: 1,
            created_at: "2026-01-08",
            role_name: "Admin"
        },
        {
            name: "AI",
            last_name: "Assistant",
            mother_last_name: null,
            email: "aiassistant@kg-dreams.com",
            uuid: "d8fbc7e2-1ca7-4b2b-b1a5-6249dbf8186c",
            student_code: null,
            role_id: 2,
            created_at: "2026-01-08",
            role_name: "Profesor"
        },
        {
            name: "Carlos I",
            last_name: "Ramos",
            mother_last_name: null,
            email: "charlyrm14@gmail.com",
            uuid: "9fc11977-5ee9-4f00-b279-9778797b06c3",
            student_code: null,
            role_id: 1,
            created_at: "2026-01-08",
            role_name: "Admin"
        }
    ],
    last_page: 1,
    links: {
        first: "http://127.0.0.1:8000/api/v1/users?page=1",
        last: "http://127.0.0.1:8000/api/v1/users?page=1",
        prev: null,
        next: null
    },
    next_page_url: null,
    per_page: 15,
    prev_page_url: null,
    total: 6
}

export const MOCK_USER_BIRTHDAY: ApiResponse<UserBirthday[]> = {
    data: [
        {
            name: "Carlos I.",
            last_name: "Ramos",
            mother_last_name: null,
            email: "charlyrm14@gmail.com",
            uuid: "771f8eb5-a52e-40e4-af21-af947bf76048",
            student_code: null,
            profile: {
                about_me: "This is a lorem ipsum dolor sit amet consectetur adipiscing elit taciti, pulvinar congue aliquet rhoncus tempus interdum ut est, non morbi massa laoreet fringilla proin hendrerit. Donec nec inceptos a dictum et ante mattis fusce dictumst, purus aliquet suscipit aptent litora taciti dui orci dapibus, vel nunc erat cum maecenas laoreet tincidunt diam. Tellus sed purus convallis curae faucibus tempus congue imperdiet quisque, euismod neque consequat orci ullamcorper elementum eleifend vitae lectus, hendrerit ultricies habitasse a ut donec accumsan mauris.",
                birthdate: "1990-12-03",
                age: 35,
                gender: "MASCULINO"
            },
            current_level: "Nivel Foca"
        }, 
        {
            name: "Valentina E.",
            last_name: "Hérnandez",
            mother_last_name: null,
            email: "vhernandezkg@gmail.com",
            uuid: "4f507188-2b7e-4263-9e06-dcb01ea9c0e4",
            student_code: "STU-20251013-8656",
            profile: {
                about_me: "This is a lorem ipsum dolor sit amet consectetur adipiscing elit taciti, pulvinar congue aliquet rhoncus tempus interdum ut est, non morbi massa laoreet fringilla proin hendrerit. Donec nec inceptos a dictum et ante mattis fusce dictumst, purus aliquet suscipit aptent litora taciti dui orci dapibus, vel nunc erat cum maecenas laoreet tincidunt diam. Tellus sed purus convallis curae faucibus tempus congue imperdiet quisque, euismod neque consequat orci ullamcorper elementum eleifend vitae lectus, hendrerit ultricies habitasse a ut donec accumsan mauris.",
                birthdate: "2015-12-03",
                age: 10,
                gender: "FEMENINO"
            },
            current_level: "Nivel Foca"
        }
    ]
}

export const fetchUsersMock = async(filters: UserFilters): Promise<ApiResponse<PaginationContent<User>>> => {
    const filtered = MOCK_USERS.data.filter(user => {
        if (filters.email) return user.email === filters.email
        return true
    })

    return {
        data: {
            ...MOCK_USERS,
            data: filtered,
            total: filtered.length
        }
    }
}
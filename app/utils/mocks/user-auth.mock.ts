import type { ApiResponse, UserProfileResponse } from '#imports'

export const MOCK_USER_AUTH_PROFILE_DATA: ApiResponse<UserProfileResponse> = {
    data: {
        name: "Carlos",
        last_name: "Ramos",
        mother_last_name: null,
        email: "charlyrm14@gmail.com",
        force_password_change: 0,
        uuid: "771f8eb5-a52e-40e4-af21-af947bf76048",
        student_code: null,
        role: "ADMIN",
        profile: {
            about_me: "Desarrollador Full Stack con 6 años de experiencia en el desarrollo de aplicaciones web escalables. Especializado en Laravel (5.6–12), Vue 3 y bases de datos MySQL/SQL Server, con experiencia adicional en Express.js y React. He participado en proyectos de alto impacto para empresas como AMEX y Liverpool, logrando optimizar procesos operativos y mejorando la experiencia de usuario mediante soluciones seguras y de alto rendimiento. Enfocado en APIs RESTful, autenticación JWT,  y buenas prácticas de clean code. ",
            birthdate: "1990-12-01",
            lada: 52,
            phone_number: "55-7786-4159",
            address: null,
            gender: "MASCULINO"
        },
        hobbies: [
            {
                id: 7,
                name: "Escuchar Música"
            },
            {
                id: 14,
                name: "Correr o Trotar"
            }
        ],
        profile_image: null,
        created_at: "2025-10-13",
        updated_at: "2025-10-13"
    }
}
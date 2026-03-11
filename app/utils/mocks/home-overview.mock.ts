import type { ApiResponse, HomeUser } from "#imports"

export const HOME_OVERVIEW: ApiResponse<HomeUser> = {
    data: {
        name: "Carlos I",
        last_name: "Ramos",
        mother_last_name: null,
        email: "charlyrm14@gmail.com",
        uuid: "9fc11977-5ee9-4f00-b279-9778797b06c3",
        student_code: null,
        role: "Admin",
        current_level: {
            category_id: 7,
            category_name: "Estrella de Mar",
            category_slug: "estrella-de-mar",
            category_description: "Tu coordinación mejora y comienzas a nadar distancias más largas.",
            progress_percentage: 0,
            skills_completed: 0,
            skills_total: 3,
            started_at: "2026-03-11",
            completed_at: null
        },
        next_level: {
            category_id: 8,
            category_name: "Delfín",
            category_slug: "delfin",
            category_description: "Tu técnica es cada vez más sólida. Ya dominas más de un estilo."
        },
        last_event: {
            title: "Triatlón Copa del Océano 2026",
            slug: "triatlon-copa-del-oceano-2026",
            content: "¡Inscríbete y Desafía tus Límites en el Paraíso Costero! Fecha: Sábado 12 de abril de 2026 Lugar: Playa Esmeralda, Costa del Pacífico Distancias: Olímpica (1.5 km Natación / 40 km Ciclismo / 10 km Carrera) Descripción del Evento: El Triatlón Copa del Océano regresa en su tercera edición, ofreciendo una de las rutas más desafiantes y espectaculares del calendario nacional. La competencia se desarrollará en el entorno incomparable de Playa Esmeralda, comenzando con un tramo de natación en aguas cristalinas, seguido por un recorrido en bicicleta con vistas panorámicas a la costa y finalizando con una carrera a pie a lo largo del malecón principal.",
            published_at: null,
            location: "Nextlalpan, Edo. de México",
            start_date: "2026-03-12",
            start_hour: "09:00",
            end_date: "2026-03-12",
            end_hour: "12:00",
            remaining_time: "19.981008565556 horas"
        },
        last_reminder: {
            title: "Próximo pago",
            subtitle: "Pago de mensualidad • $120.00"
        },
        todays_birthdays: [
            {
                name: "Carlos I",
                last_name: "Ramos",
                age: 35
            },
            {
                name: "Valentina E",
                last_name: "Hérnandez",
                age: 10
            }
        ]
    }
}
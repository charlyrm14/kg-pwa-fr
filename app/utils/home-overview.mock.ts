import type { ApiResponse } from "#imports"
import type { HomeUser } from "#imports"

export const HOME_OVERVIEW: ApiResponse<HomeUser> = {
    data: {
        name: "Carlos I",
        last_name: "Ramos",
        mother_last_name: null,
        email: "charlyrm14@gmail.com",
        uuid: "771f8eb5-a52e-40e4-af21-af947bf76048",
        student_code: null,
        role: "ADMIN",
        current_level: {
            category_name: "TORTUGA",
            total_progress: 50,
            total_progress_formatted: "50%"
        },
        next_level: "MANTARRAYA",
        last_event: {
            title: "Todo Listo para la Copa Regional de Natación 2025",
            slug: "todo-listo-para-la-copa-regional-de-natacion-2025",
            content: "La emoción crece entre los amantes de la natación, ya que este sábado dará inicio la Copa Regional de Natación 2025, uno de los eventos más esperados del año para atletas jóvenes y experimentados. Más de 250 nadadores provenientes de distintas escuelas y clubes competirán en pruebas que van desde 50 metros libres hasta 200 metros mariposa, distribuidas en categorías por edad. El evento se llevará a cabo en el Complejo Acuático King Dreams, reconocido por sus instalaciones de nivel profesional. Entrenadores y familias ya anticipan jornadas llenas de energía, marcas personales y destacadas actuaciones. Los organizadores destacaron que la competencia busca no solo promover el alto rendimiento, sino también fortalecer la convivencia deportiva y el desarrollo de nuevos talentos. Las pruebas comenzarán a las 8:00 a.m., y el acceso al público será totalmente gratuito, fomentando así la participación de la comunidad en este importante encuentro acuático.",
            published_at: "2025-11-13",
            location: "Nextlalpan, Edo. de México",
            start_date: "2026-01-26",
            start_hour: "09:00",
            end_date: "2026-01-26",
            end_hour: "14:00",
            remaining_time: "40 días"
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
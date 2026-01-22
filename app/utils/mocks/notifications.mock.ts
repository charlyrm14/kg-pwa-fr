import type { ApiResponse, CursorPagination, UserNotification } from "#imports"

export const MOCK_NOTIFICATION_LIST: ApiResponse<CursorPagination<UserNotification>> = {
    data: {
        data: [
            {
                id: 1,
                is_read: 0,
                read_at: null,
                delivered_at: null,
                channel: null,
                created_at: "2025-12-19",
                updated_at: "2025-12-19",
                notification: {
                    id: 1,
                    title: "Nueva noticia publicada",
                    body: "¡Épico! Los 'Dragones' Rompen Récord y Aseguran el...",
                    notification_type_id: 1,
                    data: null,
                    action_url: "contents/noticias/epico-los-dragones-rompen-record-y-aseguran-el-liderato-en-un-partido-no-apto-para-cardiacos",
                    is_broadcast: true,
                    created_at: "2025-12-19",
                    updated_at: "2025-12-19",
                    notification_type: {
                        id: 1,
                        name: "Nuevo contenido",
                        slug: "nuevo-contenido",
                        description: "Un nuevo contenido ha sido publicado."
                    }
                }
            },
            {
                id: 2,
                is_read: 0,
                read_at: null,
                delivered_at: null,
                channel: null,
                created_at: "2025-12-19",
                updated_at: "2025-12-19",
                notification: {
                    id: 1,
                    title: "Nuevo evento publicado",
                    body: "Triatlón Copa del Océano 2026 ...",
                    notification_type_id: 1,
                    data: null,
                    action_url: "contents/eventos/triatlon-copa-del-oceano-2026",
                    is_broadcast: true,
                    created_at: "2025-12-19",
                    updated_at: "2025-12-19",
                    notification_type: {
                        id: 1,
                        name: "Nuevo contenido",
                        slug: "nuevo-contenido",
                        description: "Un nuevo contenido ha sido publicado."
                    }
                }
            },
            {
                id: 3,
                is_read: 0,
                read_at: null,
                delivered_at: null,
                channel: null,
                created_at: "2025-12-19",
                updated_at: "2025-12-19",
                notification: {
                    id: 1,
                    title: "Nuevo consejo publicado",
                    body: "Mejora tu alineación y respiración para ...",
                    notification_type_id: 1,
                    data: null,
                    action_url: "contents/consejos/mejora-tu-alineacion-y-respiracion-para-nadar-mas-eficiente",
                    is_broadcast: true,
                    created_at: "2025-12-19",
                    updated_at: "2025-12-19",
                    notification_type: {
                        id: 1,
                        name: "Nuevo contenido",
                        slug: "nuevo-contenido",
                        description: "Un nuevo contenido ha sido publicado."
                    }
                }
            },
            {
                id: 4,
                is_read: 0,
                read_at: null,
                delivered_at: null,
                channel: null,
                created_at: "2025-12-19",
                updated_at: "2025-12-19",
                notification: {
                    id: 1,
                    title: "Nuevo tipo de nutrición",
                    body: "Alimenta tu energía con comidas equilibradas ...",
                    notification_type_id: 1,
                    data: null,
                    action_url: "contents/nutricion/alimenta-tu-energia-con-comidas-equilibradas-antes-y-despues-del-entrenamiento",
                    is_broadcast: true,
                    created_at: "2025-12-19",
                    updated_at: "2025-12-19",
                    notification_type: {
                        id: 1,
                        name: "Nuevo contenido",
                        slug: "nuevo-contenido",
                        description: "Un nuevo contenido ha sido publicado."
                    }
                }
            }
        ],
        path: "http://127.0.0.1:8000/api/v1/notifications",
        per_page: 15,
        next_cursor: null,
        next_page_url: null,
        prev_cursor: null,
        prev_page_url: null
    }
}

export const fetchUserNotificationsMock = async(): Promise<ApiResponse<CursorPagination<UserNotification>>> => {
    return MOCK_NOTIFICATION_LIST
}
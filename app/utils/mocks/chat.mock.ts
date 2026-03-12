export const MOCK_CREATE_CHAT: ApiResponse<CreateChatResponse> = {
    data: {
        title: null,
        uuid: "ed2b1a49-f0cb-44d5-86a2-5720a1a5282d",
        created_by: {
            name: "Carlos I.",
            last_name: "Ramos",
            email: "correo@correo.com",
            uuid: "018cc99f-a5ee-4db5-93f8-6ea45fd35d2d"
        },
        chat_type: "Asistente IA",
        participants: [
            {
                name: "Carlos I.",
                last_name: "Ramos",
                email: "correo@correo.com",
                uuid: "018cc99f-a5ee-4db5-93f8-6ea45fd35d2d",
                joined_at: "2026-03-11 16:18:05"
            }
        ],
        created_at: "2026-03-11",
        updated_at: "2026-03-11"
    }
}

export const MOCK_HISTORY_CHAT: ApiResponse<HistoryChatResponse> = {
    data: {
        chat: {
            uuid: "ed2b1a49-f0cb-44d5-86a2-5720a1a5282d",
            title: null,
            type: "Asistente IA",
            created_by: "Carlos I",
            created_at: "2026-03-11"
        },
        messages: [
            {
                id: 6,
                message: "Existen cuatro estilos de natación reconocidos oficialmente: el crol o libre, la espalda, el pecho y la mariposa.",
                sender_type: "AI",
                created_at: "2026-03-11",
                user: {
                    name: "AI",
                    last_name: "Assistant",
                    email: "aiassistant@kg-dreams.com"
                }
            },
            {
                id: 5,
                message: "Cuantos estilos de natación existen?",
                sender_type: "Usuario",
                created_at: "2026-03-11",
                user: {
                    name: "Carlos I",
                    last_name: "Ramos",
                    email: "correo@correo.com"
                }
            }
        ],
        path: "/api/v1/chat/ed2b1a49-f0cb-44d5-86a2-5720a1a5282d/messages",
        per_page: 10,
        next_cursor: null,
        next_page_url: null,
        prev_cursor: null,
        prev_page_url: null
    }
}
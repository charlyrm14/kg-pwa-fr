export interface CreateChatPayload {
    title: string | null
    chat_type_id: number
}

export interface CreateChatResponse {
    title: string | null
    uuid: string
    created_by: {
        name: string
        last_name: string
        email: string
        uuid: string
    },
    chat_type: string
    participants: Participant[]
    created_at: string
    updated_at: string
}

export interface Participant {
    name: string
    last_name: string
    email: string
    uuid: string
    joined_at: string
}

export interface HistoryChatResponse {
    chat: {
        uuid: string
        title: string | null
        type: string
        created_by: string
        created_at: string
    }
    messages: HistoryChatMessage[]
    path: string
    per_page: number
    next_cursor: string | null
    next_page_url: string | null
    prev_cursor: string | null
    prev_page_url: string | null
}

export interface HistoryChatMessage {
    id: number
    message: string
    sender_type: string
    created_at: string
    user: MessageUser
}

export interface MessageUser {
    name: string
    last_name: string
    email: string
}

export interface MessageChatPayload {
    message: string
}

export interface MessageChatResponse {
    user: string
    last_name: string
    id: number
    message: string
    created_at: string
    updated_at: string
}

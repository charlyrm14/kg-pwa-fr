export type ContentStatus = 'borrador' | 'pendiente-de-revision' | 'rechazado' | 'programado' | 'publicado' | 'no-publicado' | 'eliminado'

export type ContentTypeSlug = 'noticias' | 'eventos' | 'consejos' | 'nutricion';

export interface EventDetails {
    location: string | null
    start_date: string | null
    start_hour: string | null
    end_date: string | null
    end_hour: string | null
}

export interface Content {
    name: string
    slug: string
    content: string
    created_at: string
    updated_at: string
    author: string | null
    type: string
    status: string
    event: EventDetails | null
}

interface BaseCreateContent {
    name: string
    content: string
    content_status_id: number
    author_id: number
    cover_content?: number[]
} 

export interface CreateEventContent extends BaseCreateContent {
    content_type_id: 2
    location: string
    start_date: string
    end_date: string
}

export interface CreateGenericContent extends BaseCreateContent {
    content_type_id: 1 | 3 | 4
    location?: null
    start_date?: null
    end_date?: null
}

export type CreateContentPayload = CreateEventContent | CreateGenericContent
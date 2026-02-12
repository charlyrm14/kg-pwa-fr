export type ContentStatus = 'borrador' | 'pendiente-de-revision' | 'rechazado' | 'programado' | 'publicado' | 'no-publicado' | 'eliminado'

export type ContentTypeSlug = 'noticias' | 'eventos' | 'consejos' | 'nutricion'

export type ContentTypeFilter = 'todo' | 'noticias' | 'eventos' | 'consejos' | 'nutricion'

export interface ContentThumbnail {
    id: number
    path: string
    variant: string
    is_main: boolean
    width: number
    height: number
    media_id: number
    created_at: string
}

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
    thumbnail: ContentThumbnail | null
}

interface BaseCreateContent {
    name: string
    content: string
    content_status_id: number
    author_id: number
    cover_image?: number[] | null
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

export interface ContentDelete {
    name: string
    slug: string
}

export interface CoverContentDetail {
    id: number
    uuid: string
    path: string
    mime_type: string
    context: string
    created_at: string
}

export interface ContentDetail {
    name: string
    slug: string
    content: string
    created_at: string
    updated_at: string
    author: string | null
    type: string
    status: string
    event: EventDetails | null
    cover_image: CoverContentDetail | null
}
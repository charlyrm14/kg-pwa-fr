export type ContentTypeSlug = 'news' | 'events' | 'tips' | 'nutrition';

export interface EventDetails {
    location: string | null
    start_date: string | null
    end_date: string | null
}

export interface Content {
    title: string
    slug: string
    content: string
    created_at: string
    updated_at: string
    author: string | null
    type: string
    status: string
    event: EventDetails | null
}
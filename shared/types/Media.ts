export interface MediaVariantResponse {
    id: number
    path: string
    variant: string
    is_main: boolean
    width: number
    height: number
    media_id: number
    created_at: string
} 

export interface MediaUploadResponse {
    id: number
    uuid: string
    path: string
    mime_type: string
    disk: string
    created_at: string
    variants: MediaVariantResponse [] | null
}
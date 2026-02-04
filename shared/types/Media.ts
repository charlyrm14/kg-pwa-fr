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

export type MediaDeletePayload = Omit<MediaUploadResponse, 'variants'>

export interface UploadItem {
    tempId: string
    file: File
    progress: number
    status: 'pending' | 'uploading' | 'done' | 'error'
    uploadedMedia?: MediaUploadResponse
}

export interface UploaderConfig {
    maxFiles: number
    accept: string[]
    maxSizeMB: number
    context?: string
}

export interface DropzoneError {
    type: 'max-files' | 'max-size' | 'invalid-type'
    message: string
}
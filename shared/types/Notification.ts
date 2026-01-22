export interface NotificationType {
    id: number
    name: string
    slug: string
    description: string
}

export interface NotificationDetail {
    id: number
    title: string
    body: string
    notification_type_id: number
    data: string | null
    action_url: string
    is_broadcast: boolean
    created_at: string
    updated_at: string
    notification_type: NotificationType
}

export interface UserNotification {
    id: number
    is_read: number
    read_at: string | null
    delivered_at: string | null
    channel: string | null
    created_at: string
    updated_at: string
    notification: NotificationDetail
}

export interface NotificationRead {
    message: string
    data: {
        id: number
        is_read: number
        read_at: string
    }
}
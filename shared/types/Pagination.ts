export interface PaginationContent<T> {
    current_page: number
    data: T[] 
    last_page: number
    links: {
        first: string
        last: string
        prev: string | null
        next: string | null
    },
    next_page_url: string | null
    per_page: number
    prev_page_url: string | null
    total: number
}
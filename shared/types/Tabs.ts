import type { Component } from 'vue'

export interface ProfileTabComponent {
    component: Component
    props?: Record<string, any>
    emitsRefresh?: boolean
}

export interface ProfileTab {
    id: number
    title: string
    components: ProfileTabComponent[]
}
import type { Component } from 'vue'

export interface ProfileTabComponent {
    component: Component
    props?: Record<string, any>
}

export interface ProfileTab {
    id: number
    title: string
    components: ProfileTabComponent[]
}
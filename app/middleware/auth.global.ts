import { useAuth } from "#imports"

export default defineNuxtRouteMiddleware((to) => {

    const { isAuthenticated } = useAuth()

    if (['/login', '/register'].includes(to.path)) return

    if(!isAuthenticated.value) {
        return navigateTo('login')
    }
})
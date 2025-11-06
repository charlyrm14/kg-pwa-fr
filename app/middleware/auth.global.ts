import { useAuth } from "#imports"

export default defineNuxtRouteMiddleware((to, from) => {

    const { isAuthenticated } = useAuth()

    if(to.meta.requiresAuth && !isAuthenticated) {
        return navigateTo('login')
    }
})
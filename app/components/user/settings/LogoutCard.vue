<script setup lang="ts">
    import { useAuth } from '#imports';

    const { user, logout } = useAuth()

    const handleLogout = async() => {
        if(!user) return
        await logout()
    }

</script>

<template>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 shadow">
        <div class="flex justify-between items-center">
            <p class="dark:text-white font-light mb-2"> 
                Cerrar sesión <span class="block text-xs dark:text-gray-400"> Salir de la aplicación </span>
            </p>
            <button 
                class="bg-gray-200 dark:bg-dark-soft text-red-500 p-2 rounded-full font-semibold cursor-pointer hover:opacity-75 inline-flex items-center gap-x-2"
                @click.prevent="handleLogout">
                    Salir <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
            </button>
        </div>
    </div>
</template>

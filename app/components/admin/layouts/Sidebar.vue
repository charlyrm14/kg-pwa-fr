<script setup lang="ts">
    import { useAdminSidebar } from '#imports';

    const route = useRoute();
    const { isOpen, close } = useAdminSidebar()

</script>

<template>
    <aside 
        id="sidebar" 
        class="w-65 flex-shrink-0 bg-white dark:bg-dark-light shadow-xl/10 md:shadow-lg/10 rounded-xl md:m-4 md:h-auto overflow-y-auto flex flex-col fixed top-16 bottom-0 left-0 z-30 transform transition-transform duration-300 px-3 md:px-0"
        :class="[isOpen ? 'translate-x-0' : '-translate-x-full', 'md:translate-x-0 md:flex']">
        <nav class="p-4 space-y-4">
            
            <div class="pb-2">
                <h3 class="text-xs font-semibold text-gray-500 dark:text-white uppercase tracking-wider mb-6">Dashboards</h3>
                <ul class="space-y-2">
                    <li>
                        <NuxtLink 
                            to="/kg-admin" 
                            class="flex items-center p-2 rounded-lg  hover:text-blue-500 transition"
                            :class="route.path === '/kg-admin' ? 'bg-gray-100 dark:bg-dark-soft text-blue-500 font-bold' : 'text-gray-400 font-semibold'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house mr-3"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                                    Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            to="/kg-admin/contents" 
                            class="flex items-center p-2 rounded-lg hover:text-blue-500 transition"
                            :class="route.path === '/kg-admin/contents' ? 'bg-gray-100 dark:bg-dark-soft text-blue-500 font-bold' : 'text-gray-400 font-semibold'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper mr-3"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                                    Contenido
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            to="/kg-admin/payments" 
                            class="flex items-center p-2 rounded-lg hover:text-blue-500 transition"
                            :class="route.path === '/kg-admin/payments' ? 'bg-gray-100 dark:bg-dark-soft text-blue-500 font-bold' : 'text-gray-400 font-semibold'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet mr-3"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
                                    Pagos
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            to="/kg-admin/attendances" 
                            class="flex items-center p-2 rounded-lg hover:text-blue-500 transition"
                            :class="route.path === '/kg-admin/attendances' ? 'bg-gray-100 dark:bg-dark-soft text-blue-500 font-bold' : 'text-gray-400 font-semibold'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check-icon lucide-user-check mr-3"><path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                                    Asistencias
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            to="/kg-admin/users" 
                            class="flex items-center p-2 rounded-lg hover:text-blue-500 transition"
                            :class="route.path === '/kg-admin/users' ? 'bg-gray-100 dark:bg-dark-soft text-blue-500 font-bold' : 'text-gray-400 font-semibold'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users mr-3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                                    Usuarios
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </aside> 
    <div id="sidebar-overlay" v-if="isOpen" class="fixed inset-0 dark:bg-black bg-opacity-50 z-20 hidden md:hidden" @click="close"></div>
</template>

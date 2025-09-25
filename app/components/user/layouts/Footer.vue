<script setup lang="ts">

    const route = useRoute()
</script>

<template>
    <footer class="fixed bottom-0 left-0 w-full z-10 py-4 px-2 bg-white dark:bg-dark dark:text-white shadow-[0_-5px_10px_0_rgba(0,0,0,0.1)] border-t border-gray-200 dark:border-dark-soft">
        <nav class="flex justify-around items-center h-full">
        
            <NuxtLink 
                to="/" 
                class="flex flex-col items-center justify-center text-sm space-y-1 hover:text-blue-500">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        :stroke-width="route.path === '/' ? 2 : 1"
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="lucide lucide-house-icon lucide-house"
                        :class="route.path === '/' ? 'text-blue-500' : ''">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>
                    <span 
                        class="font-light"
                        :class="route.path === '/' ? 'text-blue-500' : ''"> Inicio </span>
            </NuxtLink>

            <NuxtLink 
                to="/my-progress" 
                class="flex flex-col items-center justify-center text-sm space-y-1 hover:text-blue-500">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        :stroke-width="route.path === '/my-progress' ? 2 : 1" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="lucide lucide-chart-line-icon lucide-chart-line"
                        :class="route.path === '/my-progress' ? 'text-blue-500' : ''">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>
                    </svg>
                    <span 
                        class="font-light"
                        :class="route.path === '/my-progress' ? 'text-blue-500' : ''"> Progreso </span>
            </NuxtLink>

            <NuxtLink 
                to="/my-classes"  
                class="flex flex-col items-center justify-center text-sm space-y-1 hover:text-blue-500">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        :stroke-width="route.path === '/my-classes' ? 2 : 1" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="lucide lucide-calendar-days-icon lucide-calendar-days"
                        :class="route.path === '/my-classes' ? 'text-blue-500' : ''">
                            <path d="M8 2v4"/>
                            <path d="M16 2v4"/>
                            <rect width="18" height="18" x="3" y="4" rx="2"/>
                            <path d="M3 10h18"/>
                            <path d="M8 14h.01"/>
                            <path d="M12 14h.01"/>
                            <path d="M16 14h.01"/>
                            <path d="M8 18h.01"/>
                            <path d="M12 18h.01"/>
                            <path d="M16 18h.01"/>
                    </svg>
                    <span 
                        class="font-light"
                        :class="route.path === '/my-classes' ? 'text-blue-500' : ''"> Clases </span>
            </NuxtLink>
                        
            <NuxtLink 
                to="/profile" 
                class="flex flex-col items-center justify-center text-sm space-y-1 hover:text-blue-500">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        :stroke-width="route.path === '/profile' ? 2 : 1" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="lucide lucide-user-icon lucide-user"
                        :class="route.path === '/profile' ? 'text-blue-500' : ''">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span 
                        class="font-light"
                        :class="route.path === '/profile' ? 'text-blue-500' : ''"> Perfil </span>
            </NuxtLink>

        </nav>
    </footer>
</template>
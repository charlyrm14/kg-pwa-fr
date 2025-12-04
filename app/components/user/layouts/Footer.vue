<script setup lang="ts">

    const route = useRoute()
</script>

<template>
    <footer class="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white rounded-full px-4 py-3 flex items-center justify-between gap-6 shadow-lg z-50 w-[92%] sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%] 2xl:w-[40%]">

        <NuxtLink 
            to="/" 
            class="flex items-center text-gray-400 hover:text-white"
            :class="route.path === '/' 
                ? 'gap-2 bg-blue-500 px-5 py-2 rounded-full text-white shadow-inner flex-shrink-0' 
                : 'flex-col'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    <span v-if="route.path === '/'" class="text-sm font-medium"> Inicio </span>
        </NuxtLink>

        <NuxtLink 
            to="/my-progress"
            class="flex items-center text-gray-400 hover:text-white"
            :class="route.path === '/my-progress' 
                ? 'gap-2 bg-blue-500 px-5 py-2 rounded-full text-white shadow-inner flex-shrink-0' 
                : 'flex-col'">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="lucide lucide-chart-line-icon lucide-chart-line">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>
                    </svg>
                    <span v-if="route.path === '/my-progress'" class="text-sm font-medium"> Progreso </span>
        </NuxtLink>

        <NuxtLink 
            to="/my-classes"
            class="flex items-center text-gray-400 hover:text-white"
            :class="route.path === '/my-classes' 
                ? 'gap-2 bg-blue-500 px-5 py-2 rounded-full text-white shadow-inner flex-shrink-0' 
                : 'flex-col'">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="lucide lucide-calendar-days-icon lucide-calendar-days">
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
                    <span v-if="route.path === '/my-classes'" class="text-sm font-medium"> Clases </span>
        </NuxtLink>

        <NuxtLink 
            to="/profile"
            class="flex items-center text-gray-400 hover:text-white"
            :class="route.path === '/profile' 
                ? 'gap-2 bg-blue-500 px-5 py-2 rounded-full text-white shadow-inner flex-shrink-0' 
                : 'flex-col'">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="lucide lucide-user-icon lucide-user">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span v-if="route.path === '/profile'" class="text-sm font-medium"> Perfil </span>
        </NuxtLink>

    </footer>
</template>
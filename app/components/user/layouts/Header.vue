<script setup lang="ts">
    const route = useRoute()
</script>

<template>
    <header class="bg-white dark:bg-dark dark:text-white p-3 fixed top-0 left-0 w-full z-10 border-b border-gray-200 dark:border-dark-soft">
        <nav class="container mx-auto flex justify-between items-center">
            <NuxtLink 
                to="/settings"
                class="text-xl font-bold">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="lucide lucide-cog-icon lucide-cog">
                            <path d="M11 10.27 7 3.34"/>
                            <path d="m11 13.73-4 6.93"/>
                            <path d="M12 22v-2"/>
                            <path d="M12 2v2"/>
                            <path d="M14 12h8"/>
                            <path d="m17 20.66-1-1.73"/>
                            <path d="m17 3.34-1 1.73"/>
                            <path d="M2 12h2"/>
                            <path d="m20.66 17-1.73-1"/>
                            <path d="m20.66 7-1.73 1"/>
                            <path d="m3.34 17 1.73-1"/>
                            <path d="m3.34 7 1.73 1"/>
                            <circle cx="12" cy="12" r="2"/>
                            <circle cx="12" cy="12" r="8"/>
                    </svg>
            </NuxtLink>
            <ul class="flex space-x-4">
                <li>
                    <NuxtLink 
                        to="/chat/ia"
                        class="cursor-pointer"
                        :class="route.path === '/chat/ia' ? 'text-blue-500' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="/notifications" 
                        class="cursor-pointer"
                        :class="route.path === '/notifications' ? 'text-blue-500' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>


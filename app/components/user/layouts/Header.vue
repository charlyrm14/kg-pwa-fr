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
                        to="/kg-admin"
                        class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/favorites"
                        class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/ranking"
                        class="cursor-pointer"
                        :class="route.path === '/ranking' ? 'text-blue-500' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy-icon lucide-trophy"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/chat/ia"
                        class="cursor-pointer"
                        :class="route.path === '/chat/ia' ? 'text-blue-500' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="/notifications" 
                        class="cursor-pointer"
                        :class="route.path === '/notifications' ? 'text-blue-500' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>


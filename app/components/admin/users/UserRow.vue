<script setup lang="ts">
    import { 
        useModalManager, 
        bgRoleUserColor, 
        type User 
    } from '#imports';

    const { open } = useModalManager()

    defineProps<{
        user: User
    }>()

</script>

<template>
    <NuxtLink :to="`/kg-admin/users/edit/${user?.uuid}`">
        <div class="w-full bg-gray-100 dark:bg-dark-extralight rounded-lg space-y-2 cursor-pointer hover:opacity-75 p-2 shadow mb-3">
            <div class="flex justify-between items-center">
                <div class="flex justify-between items-center gap-x-3 md:gap-x-4">
                    <div class="bg-gray-200 dark:bg-dark-soft text-gray-600 dark:text-gray-400 rounded-xl p-2 md:p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div>
                        <span class="text-gray-600 dark:text-gray-400 font-bold"> 
                            {{ user?.name }}
                        </span>
                        <span class="text-blue-500 text-xs md:text-sm block"> {{ user?.email }} </span>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full" :class="bgRoleUserColor(user?.role_id)"></span>
                        <span class="text-gray-600 dark:text-gray-300 font-semibold">
                            {{ user?.role_name ?? 'Unknown' }}
                        </span>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right dark:text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </div>
        </div>
    </NuxtLink>
</template>
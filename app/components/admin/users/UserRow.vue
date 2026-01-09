<script setup lang="ts">
    import { useModalManager } from '#imports';
    import type { User } from '#imports';
    import { bgRoleUserColor } from '#imports';
    import { excludeUserFromDele } from '#imports';

    const { open } = useModalManager()

    defineProps<{
        user: User
    }>()

    const showActionsContent = ref<boolean>(false)

</script>

<template>
    <div class="flex items-center border-b border-dashed border-gray-200 dark:border-dark-soft mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div class="w-1/5 flex-shrink-0 px-2 font-medium">
                    <p class="dark:white font-bold text-lg"> {{ user?.name }} <span class="block font-light text-sm dark:text-gray-300"> {{ user?.last_name }} </span> </p>
                </div>
                <div class="w-1/5 flex-shrink-0 px-2">
                    <p class="dark:text-gray-300"> {{ user?.email }} </p>
                </div>
                <div class="w-1/5 flex-shrink-0 px-2">
                    <p class="dark:text-gray-300"> {{ user?.created_at }} </p>
                </div>
                <div class="w-1/5 flex-shrink-0 px-2">
                    <span 
                        class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white" 
                        :class="bgRoleUserColor(user?.role_id)">
                            {{ user?.role_name }}
                    </span>
                </div>
                <div class="w-1/5 flex-shrink-0 px-2 relative">
                    <button
                        @click="showActionsContent = !showActionsContent"
                        class="bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-lg cursor-pointer hover:opacity-75 text-sm inline-flex gap-x-1">
                            Acciones
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    class="lucide"
                                    :class="!showActionsContent ? 'lucide-chevron-down-icon lucide-chevron-down' : 'lucide-chevron-up-icon lucide-chevron-up'">
                                        <path :d="!showActionsContent ? 'm6 9 6 6 6-6' : 'm18 15-6-6-6 6'"/>
                                </svg>
                    </button>
                    <div 
                        v-if="showActionsContent"
                        class="absolute -bottom-26 -left-9 bg-white border border-gray-200 dark:border-none dark:bg-dark-extralight rounded-lg shadow-xl w-40 z-50">
                            <div class="px-2 py-2 ">
                                <NuxtLink
                                    :to="`/kg-admin/users/edit/${user?.uuid}`"
                                    class="dark:text-gray-400 text-base inline-flex items-center gap-x-2 font-light px-3 py-1 cursor-pointer hover:text-blue-500  rounded-lg w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen-icon lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>
                                            Editar
                                </NuxtLink>
                            </div> 
                            <div class="px-2 py-2">
                                <button
                                    v-if="excludeUserFromDele(user?.email)"
                                    @click="open('DeleteUserModal', user)"
                                    class="dark:text-gray-400 text-base inline-flex items-center gap-x-2 font-light px-3 py-1 cursor-pointer hover:text-red-500  rounded-lg w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                            Eliminar
                                </button>
                            </div> 
                    </div>
                </div>
            </div>
</template>
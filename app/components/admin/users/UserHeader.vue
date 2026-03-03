<script setup lang="ts">
    import { 
        useModalManager, 
        type RoleType 
    } from '#imports';
    import { useUserStore } from '~/stores/users';

    const { open } = useModalManager()
    const userStore = useUserStore()

    const userRoleSelected = ref<RoleType>(0)
    const showFilterContent = ref<boolean>(false)

    const filterUsersByRole = (roleId: RoleType) => {
        userStore.roleType = roleId
        userRoleSelected.value = roleId
    }

</script>

<template>
    <div class="flex justify-between items-center flex-wrap gap-4">
        <div class="relative w-full sm:w-auto">
            <input 
                type="search" 
                id="search"
                name="search"
                placeholder="Search users" 
                class="w-full sm:w-auto bg-gray-200 border border-gray-100 px-10 py-2 rounded-4xl text-gray-600 focus:outline-none dark:bg-dark-extralight dark:border-none dark:text-gray-400">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="lucide lucide-search-icon lucide-search absolute top-2 left-2 text-gray-400 dark:text-gray-500">
                    <path d="m21 21-4.34-4.34"/>
                    <circle cx="11" cy="11" r="8"/>
                </svg>
        </div>
        
        <div class="flex justify-between md:flex-wrap gap-2 sm:space-x-4 w-full md:w-auto">
            <div class="relative w-full md:w-auto">
                <button
                    @click="showFilterContent = !showFilterContent"
                    class="inline-flex items-center gap-x-2  px-4 py-2 rounded-4xl cursor-pointer w-full"
                    :class="showFilterContent ? 'bg-pink-500 text-white' : 'bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-400 cursor-pointer hover:opacity-75'">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="22" 
                            height="22" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="lucide lucide-funnel-icon lucide-funnel">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>
                        </svg> Filtrar
                </button>
                <div 
                    v-if="showFilterContent"
                    class="absolute -bottom-80 md:-left-54 bg-white dark:bg-dark-light border border-gray-100 dark:border-dark-soft rounded-4xl w-80 shadow z-50">
                        <div class="border-b border-gray-100 dark:border-dark-soft p-4 flex justify-between items-center">
                            <p class="dark:text-gray-400"> Opciones de filtro </p>
                        </div>
                        <div class="p-2 m-1 space-y-2">
                            <p class="dark:text-gray-300 font-bold mb-3"> Tipo de usuario: </p>

                            <button 
                                class="px-3 py-1 md:py-2 bg-gray-200 dark:bg-dark-extralight rounded-4xl w-full text-start cursor-pointer hover:opacity-75"
                                @click="filterUsersByRole(0)"
                                :class="userRoleSelected === 0 ? 'text-orange-500 border border-orange-500 font-extrabold' : 'dark:text-white'">
                                    Todos
                            </button>

                            <button 
                                class="px-3 py-1 md:py-2 bg-gray-200 dark:bg-dark-extralight rounded-4xl w-full text-start cursor-pointer hover:opacity-75"
                                @click="filterUsersByRole(1)"
                                :class="userRoleSelected === 1 ? 'text-blue-500 border border-blue-500 font-extrabold' : 'dark:text-white'">
                                    Administradores
                            </button>

                            <button 
                                class="px-3 py-1 md:py-2 bg-gray-200 dark:bg-dark-extralight rounded-4xl w-full text-start cursor-pointer hover:opacity-75"
                                @click="filterUsersByRole(2)"
                                :class="userRoleSelected === 2 ? 'text-purple-500 border border-purple-500 font-extrabold' : 'dark:text-white'">
                                    Profesores
                            </button>

                            <button 
                                class="px-3 py-1 md:py-2 bg-gray-200 dark:bg-dark-extralight rounded-4xl w-full text-start cursor-pointer hover:opacity-75"
                                @click="filterUsersByRole(3)"
                                :class="userRoleSelected === 3 ? 'text-emerald-500 border border-emerald-500 font-extrabold' : 'dark:text-white'">
                                    Alumnos
                            </button>

                        </div>
                </div>
            </div>
            <button
                @click="open('CreateUserModal')"
                class="inline-flex justify-center items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded-4xl cursor-pointer hover:opacity-75 w-full md:w-auto"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus-icon lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                        Agregar <span class="hidden md:block"> usuario </span> 
            </button>
        </div>
    </div>
</template>
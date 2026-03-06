<script setup lang="ts">
    import { 
        useModalManager, 
        type UserInfo 
    } from '#imports';

    const props = defineProps<{
        user: UserInfo
    }>()

    const { open } = useModalManager()

</script>

<template>
    <div>
        <div class="bg-white dark:bg-dark-light rounded-2xl p-4 mt-3">
            <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg mb-2"> Eliminar cuenta de usuario </h4>
            </div>
            <div class="bg-gray-200 dark:bg-dark-extralight rounded-xl p-4 mt-4">
                <p class="text-gray-600 dark:text-gray-300 font-bold inline-flex items-start md:items-center text-xs md:text-base gap-x-4"> 
                    <span class="text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                    </span> Estás a punto de eliminar la cuenta de este usuario. Al confirmar esta acción, el usuario perderá inmediatamente el acceso a la plataforma y su sesión actual será cerrada.
                </p>
            </div>
            <div class="flex justify-end items-center my-4">
                <button 
                    v-if="user"
                    class="bg-red-500 text-white font-semibold px-4 py-2 rounded-full cursor-pointer hover:opacity-75"
                    type="button"
                    @click="open('ConfirmUserDeleteModal', {
                        name: user.name,
                        last_name: user.last_name,
                        uuid: user.uuid
                    } as UserDelete)">
                        Si, eliminar usuario 
                </button>
            </div>
        </div>
    </div>
</template>
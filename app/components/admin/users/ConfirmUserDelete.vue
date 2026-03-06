<script setup lang="ts">
    import type { UserDelete } from '~~/shared/types/User';
    import { useModalManager } from '#imports';
    import { useUserStore } from '~/stores/users';

    const { getPayload } = useModalManager()
    const userStore = useUserStore()

    const emit = defineEmits<{
        (e: 'closeUserConfirmDelete'): void
    }>();

    const user = getPayload<UserDelete>()

    const isSubmitting = ref<boolean>(false)

    const handleSubmit = async(userDelete: UserDelete) => {
        isSubmitting.value = true
        try {

            if(!user) return
            
            await userStore?.deleteUser(userDelete)
            
        } catch (error) {
            console.error(error)

        } finally {
            isSubmitting.value = false
            emit('closeUserConfirmDelete')
        }
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-dark rounded-2xl shadow-xl w-[90%] max-w-md md:w-4/5 md:max-w-xl mx-4">

            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        Eliminar usuario
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click="$emit('closeUserConfirmDelete')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="px-6 pb-4 space-y-3">
                <h4 class="dark:text-white font-bold text-base md:text-xl md:text-center"> 
                    Esto acción eliminara a 
                        <span class="text-blue-500"> {{ user?.name }} </span> y perdera su acceso a la app 
                </h4>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-full px-4 py-2 font-semibold"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    :disabled="isSubmitting"
                    @click="$emit('closeUserConfirmDelete')"> 
                        Cancelar 
                </button>
                <button
                    v-if="user"
                    @click="handleSubmit({
                        name: user?.name,
                        last_name: user?.last_name,
                        uuid: user?.uuid
                    })"
                    type="button"
                    :disabled="isSubmitting"
                    class="text-white px-4 py-2 rounded-full hover:opacity-75 font-bold"
                    :class="isSubmitting ? 'bg-red-300 cursor-progress' : 'bg-red-500 cursor-pointer'"> 
                        {{ !isSubmitting ? 'Si, eliminar usuario' : 'Eliminando usuario' }} 
                </button>
            </div>

        </div>
    </div>
</template>

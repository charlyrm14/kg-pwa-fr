<script setup lang="ts">

    const emit = defineEmits<{
        (e: 'closeDeleteUserModal'): void
    }>();

    const isSubmitting = ref<boolean>(false)

    const handleSubmit = () => {

        isSubmitting.value = true

        setTimeout(() => {
            isSubmitting.value = false
        }, 4000);
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
                    @click="$emit('closeDeleteUserModal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="px-6 pb-4">
                <h4 class="dark:text-white font-bold"> 
                    Esto acción eliminara a <span class="text-blue-500"> Jhon W </span> y perdera su acceso a la app 
                </h4>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    :disabled="isSubmitting"
                    @click="$emit('closeDeleteUserModal')"> 
                        Cancelar 
                </button>
                <button
                    :disabled="isSubmitting"
                    @click="handleSubmit"
                    class="text-white px-4 py-2 rounded-lg hover:opacity-75"
                    :class="isSubmitting ? 'bg-red-300 cursor-progress' : 'bg-red-500 cursor-pointer'"> 
                        {{ !isSubmitting ? 'Eliminar usuario' : 'Eliminando usuario' }} 
                </button>
            </div>

        </div>
    </div>
</template>

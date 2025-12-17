<script setup lang="ts">

    defineEmits<{
        (e: 'closeSelectProfileImageModal'): void
    }>()

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
        <div class="bg-white dark:bg-dark rounded-2xl shadow-xl w-[85%] max-w-md md:w-4/5 md:max-w-xl mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                        Elegir foto de perfil
                </h2>
                <button 
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition cursor-pointer hover:opacity-75"
                    @click="$emit('closeSelectProfileImageModal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="my-2 px-6 py-2 space-y-4">
                <div class="flex justify-between items-center gap-x-4">
                    <div class="bg-gray-100 dark:bg-dark-light rounded-4xl px-2 py-4 md:px-4 md:py-6 w-full cursor-pointer hover:opacity-75">
                        <div class="flex justify-center dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-plus-icon lucide-image-plus"><path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>
                        </div>
                        <div class="flex justify-center dark:text-gray-400 mt-2">
                            <span class="inline-flex"> Subir foto </span>
                        </div>
                    </div>
                    <div class="bg-gray-100 dark:bg-dark-light rounded-4xl px-2 py-4 md:px-4 md:py-6 w-full cursor-pointer hover:opacity-75">
                        <div class="flex justify-center dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera-icon lucide-camera"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>
                        </div>
                        <div class="flex justify-center dark:text-gray-400 mt-2">
                            <span class="inline-flex"> Tomar foto </span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="dark:text-gray-300"> Imagen cargada </h4>
                </div>
                <div class="bg-gray-100 dark:bg-dark-light rounded-2xl shadow dark:shadow-none p-2.5">
                    <div class="flex justify-between items-start">
                        <div class="flex justify-between items-center gap-x-4">
                            <div class="flex justify-center items-center dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                            </div>
                            <div>
                                <h4 class="dark:text-gray-400 text-sm"> 
                                    mi-profile-photo.png
                                        <span class="block dark:text-white text-lg font-extrabold"> 1MB </span>
                                </h4>
                            </div>
                        </div>
                        <button class="dark:text-gray-500 hover:text-red-500 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                    </div>
                    <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-soft overflow-hidden mt-4 mb-2">
                        <div class="h-full w-[80%] rounded-full bg-green-500"></div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4 bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-light shrink-0 sticky bottom-0">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    :disabled="isSubmitting"
                    @click="$emit('closeSelectProfileImageModal')"> 
                        Cancelar 
                </button>
                <button
                    :disabled="isSubmitting"
                    @click="handleSubmit"
                    class="text-white px-4 py-2 rounded-lg hover:opacity-75"
                    :class="isSubmitting ? 'bg-blue-300 cursor-progress' : 'bg-blue-500 cursor-pointer'"> 
                        {{ !isSubmitting ? 'Guardar' : 'Guardando' }} 
                </button>
            </div>

        </div>
    </div>
</template>
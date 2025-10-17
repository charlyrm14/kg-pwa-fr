<script setup lang="ts">

    const emit = defineEmits<{
        (e: 'closeCreateUserModal'): void
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
                        Agregar usuario
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click="$emit('closeCreateUserModal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="my-6 px-6 py-4 space-y-4">

                <div>
                    <label for="name" class="dark:text-gray-500"> Nombre </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ej: Jhon W"
                        class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-lg focus:outline-none">
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-2">
                    <div>
                        <label for="last_name" class="dark:text-gray-500"> Apellido paterno <span class="font-bold text-red-500"> * </span> </label>
                        <input 
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="Ej: Smith"
                            class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-lg focus:outline-none">
                    </div>
                    <div>
                        <label for="mother_last_name" class="dark:text-gray-500"> Apellido materno </label>
                        <input 
                            type="text"
                            id="mother_last_name"
                            name="mother_last_name"
                            placeholder="Ej: Brown"
                            class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-lg focus:outline-none">
                    </div>
                </div>

                <div>
                    <label for="email" class="dark:text-gray-500"> Correo electrónico </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ej: correo@correo.com"
                        class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-lg focus:outline-none">
                </div>

                <div>
                    <label for="rol" class="dark:text-gray-500"> Tipo de usuario </label>
                    <select 
                        name="role_id" 
                        id="role_id"
                        class="w-full p-4 bg-gray-100 dark:bg-dark-light dark:text-white mt-2 rounded-lg focus:outline-none">
                            <option value="1"> Administrador </option>
                            <option value="2"> Profesor </option>
                            <option value="3"> Estudiante </option>
                    </select>
                </div>

            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    :disabled="isSubmitting"
                    @click="$emit('closeCreateUserModal')"> 
                        Cancelar 
                </button>
                <button
                    :disabled="isSubmitting"
                    @click="handleSubmit"
                    class="text-white px-4 py-2 rounded-lg hover:opacity-75"
                    :class="isSubmitting ? 'bg-blue-300 cursor-progress' : 'bg-blue-500 cursor-pointer'"> 
                        {{ !isSubmitting ? 'Crear usuario' : 'Creando usuario' }} 
                </button>
            </div>

        </div>
    </div>
</template>

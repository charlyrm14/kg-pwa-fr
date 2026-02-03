<script setup lang="ts">
    import { useImagePicker } from '#imports';
    import { useProfile } from '#imports';
    import ProfileAvatar from '~/assets/media/shark.png'

    const config = useRuntimeConfig();

    const emit = defineEmits<{
        (e: 'closeSelectProfileImageModal'): void,
        (e: 'avatar-updated', newAvatar: string): void
    }>()

    const {
        fileInput,
        file,
        previewUrl,
        openPicker,
        onSelect,
        reset
    } = useImagePicker()

    const { uploadAvatar } = useProfile()


    const isSubmitting = ref<boolean>(false)
    const profileAvatar = ref<string>(ProfileAvatar)

    const closeModal = () => {
        reset()
        emit('closeSelectProfileImageModal')
    }
    
    const handleSubmit = async() => {

        if(!previewUrl.value || !file.value) return

        isSubmitting.value = true

        try {
            
            const response = await uploadAvatar(file.value as File)
            console.log(response)
            if (response?.data?.profile_image?.path) {
                emit('avatar-updated', `${config.public.apiMediaBaseUrl}/${response?.data?.profile_image?.path }`)
                emit('closeSelectProfileImageModal')
            }

        } catch (error) {
            console.error(error)
        }
        finally {
            isSubmitting.value = false
        }
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
                    :class="isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'"
                    @click="closeModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="my-6 px-6 py-2 space-y-4">

                <div class="flex justify-center items-center gap-x-4">
                    <div class="dark:bg-dark-light rounded-4xl p-1 flex">
                        <div>
                            <input
                                ref="fileInput"
                                type="file"
                                class="hidden"
                                accept="image/*"
                                @change="onSelect"/>
                            <button 
                                class="dark:bg-dark-soft dark:text-white rounded-4xl px-4 py-1.5 inline-flex items-center gap-x-2 cursor-pointer hover:opacity-75"
                                @click="openPicker"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-plus-icon lucide-image-plus"><path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg> 
                                        Subir foto
                            </button>
                        </div>
                        <button 
                            class="dark:text-gray-400 px-4 py-1.5 inline-flex items-center gap-x-2 cursor-pointer hover:opacity-75"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera-icon lucide-camera"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>
                                    Tomar foto 
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="previewUrl" class="pb-4">
                <div class="flex justify-center p-4">
                    <div class="border-4 border-blue-500 rounded-full p-1">
                        <img :src="previewUrl" alt="Avatar profile" class="rounded-full w-50 h-50 object-cover">
                    </div>
                </div>
                <div class="flex justify-center">
                    <button 
                        class="dark:bg-dark-light p-2 rounded-full dark:text-gray-400 cursor-pointer hover:text-red-500"
                        @click="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4 bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-light shrink-0 sticky bottom-0">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'"
                    @click="closeModal"> 
                        Cancelar 
                </button>
                <button
                    @click="handleSubmit"
                    class="text-white px-4 py-2 rounded-lg hover:opacity-75"
                    :class="!isSubmitting ? 'bg-blue-500 cursor-pointer' : 'bg-blue-300 cursor-not-allowed'"> 
                        Guardar
                </button>
            </div>

        </div>
    </div>
</template>
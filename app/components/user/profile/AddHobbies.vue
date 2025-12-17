<script setup lang="ts">

    import { useHobby } from '#imports';

    defineEmits<{
        (e: 'closeAddHobbiesModal'): void
    }>()

    const { hobbies, fetchHobbies} = useHobby()

    onMounted(async() => {
        try {
            await fetchHobbies()
        } catch(error) {
            console.error('Error to get hobbies')
        }
    })

    const isSubmitting = ref<boolean>(false)
    const hobbiesSelected = ref<number[]>([])
    const error = ref<boolean>(false)

    const addHobby = (idHobby: number) => {
        const index = hobbiesSelected.value.indexOf(idHobby)
        if (index === -1) { // Si no existe se agrega
            hobbiesSelected.value.push(idHobby)
            error.value = false
        } else { // Si existe se elimina
            hobbiesSelected.value.splice(index, 1)
        }
    }

    const handleSubmit = () => {

        if(hobbiesSelected.value.length === 0) {
            error.value = true
            return
        }

        error.value = false
    
        isSubmitting.value = true
        setTimeout(() => {
            isSubmitting.value = false
        }, 4000);
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-dark rounded-2xl shadow-xl w-[85%] max-w-md md:w-4/5 md:max-w-xl mx-4 max-h-[90dvh] flex flex-col">
            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4 shrink-0">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-checks-icon lucide-list-checks"><path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/></svg>
                        Agregar hobbies
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click="$emit('closeAddHobbiesModal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="mt-2 px-6 py-2 flex-1 overflow-y-auto">
                <h4 class="text-slate-800 dark:text-gray-300 mb-4"> Selecciona tus pasatiempos favoritos </h4>
                <div v-if="error"
                    class="my-4">
                        <p class="text-sm text-red-500"> Selecciona al menos un pasatiempo </p>
                </div>
                <div class="mt-3 space-x-2">
                    <span 
                        v-for="hobby in hobbies?.data"
                        :key="hobby.id"
                        class="rounded-full px-4 py-1.5 hover:opacity-75 cursor-pointer inline-block mb-2"
                        :class="hobbiesSelected.includes(hobby.id) ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-dark-extralight dark:text-gray-300'"
                        @click="addHobby(hobby.id)"> 
                            {{ hobby?.name ?? 'unknown' }}
                    </span>
                </div>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4 bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-light shrink-0 sticky bottom-0">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    :disabled="isSubmitting"
                    @click="$emit('closeAddHobbiesModal')"> 
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
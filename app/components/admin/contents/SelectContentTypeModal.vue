<script setup lang="ts">

    defineEmits<{
        (e: 'closeSelectContentTypeModal'): void
    }>()

    const isSubmitting = ref<boolean>(false)

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-dark rounded-2xl shadow-xl w-[85%] max-w-md md:w-4/5 md:max-w-xl mx-4 max-h-[90dvh] flex flex-col">

            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4 shrink-0">
                <h2 class="text-xl font-extrabold text-slate-800 dark:text-white flex items-center gap-2"> 
                        ¿Que quieres publicar?
                </h2>
                <button
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click="$emit('closeSelectContentTypeModal')"
                    :disabled="isSubmitting">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <!-- Beginning Select content type -->
            <div class="mt-2 px-6 py-2 flex-1 overflow-y-auto space-y-4">
                <div class="bg-gray-100 dark:bg-dark-light rounded-4xl px-4 py-2.5 shadow dark:shadow-none cursor-pointer hover:opacity-75">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-between items-center gap-x-4">
                            <div class="bg-amber-100 text-amber-500 rounded-2xl p-2 w-12 h-12">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
                            </div>
                            <div>
                                <h4 class="text-lg md:text-xl dark:text-white font-extrabold"> Noticias </h4>
                                <span class="dark:text-gray-400 text-sm md:text-base"> Novedades del mundo deportivo </span>
                            </div>
                        </div>
                        <div class="dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 dark:bg-dark-light rounded-4xl px-4 py-2.5 shadow dark:shadow-none cursor-pointer hover:opacity-75">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-between items-center gap-x-4">
                            <div class="bg-purple-100 text-purple-500 rounded-2xl p-2 w-12 h-12">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-fold-icon lucide-calendar-fold"><path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M15 22v-5a1 1 0 0 1 1-1h5"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/></svg>
                            </div>
                            <div>
                                <h4 class="text-lg md:text-xl dark:text-white font-extrabold"> Eventos </h4>
                                <span class="dark:text-gray-400 text-sm md:text-base"> Maratones, competencias </span>
                            </div>
                        </div>
                        <div class="dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 dark:bg-dark-light rounded-4xl px-4 py-2.5 shadow dark:shadow-none cursor-pointer hover:opacity-75">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-between items-center gap-x-4">
                            <div class="bg-pink-100 text-pink-500 rounded-2xl p-2 w-12 h-12">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                            </div>
                            <div>
                                <h4 class="text-lg md:text-xl dark:text-white font-extrabold"> Tips </h4>
                                <span class="dark:text-gray-400 text-sm md:text-base"> Consejos para mejorar </span>
                            </div>
                        </div>
                        <div class="dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 dark:bg-dark-light rounded-4xl px-4 py-2.5 shadow dark:shadow-none cursor-pointer hover:opacity-75">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-between items-center gap-x-4">
                            <div class="bg-lime-100 text-lime-500 rounded-2xl p-2 w-12 h-12">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-crossed-icon lucide-utensils-crossed"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>
                            </div>
                            <div>
                                <h4 class="text-lg md:text-xl dark:text-white font-extrabold"> Nutrición </h4>
                                <span class="dark:text-gray-400 text-sm md:text-base"> Salud alimenticia </span>
                            </div>
                        </div>
                        <div class="dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Select content type -->

            <div class="flex justify-end items-center gap-x-4 px-6 py-4 bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-light shrink-0 sticky bottom-0 mt-4">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                    @click="$emit('closeSelectContentTypeModal')"
                    :disabled="isSubmitting"> 
                        Cancelar 
                </button>
                <button
                    class="text-white px-4 py-2 rounded-lg hover:opacity-75"
                    :class="isSubmitting ? 'bg-blue-300 cursor-progress' : 'bg-blue-500 cursor-pointer'"
                    :disabled="isSubmitting"> 
                        {{ !isSubmitting ? 'Guardar' : 'Guardando' }} 
                </button>
            </div>

        </div>
    </div>
</template>
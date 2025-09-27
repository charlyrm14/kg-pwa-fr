<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';

    const contentTheme = ref<boolean>(false)
</script>

<template>
    <section>
        <div>
            <SectionTitle title="Notificaciones"/>
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 shadow">
                <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft">
                    <p class="dark:text-white font-light mb-2"> 
                        Contenido <span class="block text-xs dark:text-gray-400"> Permitir notificaciones de noticias, eventos, etc </span>
                    </p>
                    <div>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-300 peer-checked:bg-lime-500 rounded-full relative transition-colors duration-300">
                                <div class="absolute left-1 top-1 w-7 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft mt-3">
                    <p class="dark:text-white font-light mb-2"> 
                        Logros <span class="block text-xs dark:text-gray-400"> Permitir notificaciones cuando obtienes logros </span>
                    </p>
                    <div>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-300 peer-checked:bg-lime-500 rounded-full relative transition-colors duration-300">
                                <div class="absolute left-1 top-1 w-7 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-3">
                    <p class="dark:text-white font-light mb-2"> 
                        Pagos <span class="block text-xs dark:text-gray-400"> Permitir notificaciones de próximos pagos </span>
                    </p>
                    <div>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-300 peer-checked:bg-lime-500 rounded-full relative transition-colors duration-300">
                                <div class="absolute left-1 top-1 w-7 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-6">
        <div>
            <SectionTitle title="Pantalla"/>
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 shadow">
                <div class="flex justify-between items-center"
                    :class="contentTheme ? 'border-b border-gray-200 dark:border-dark-soft' : ''">
                    <p class="dark:text-white font-light mb-2"> 
                        Tema <span class="block text-xs dark:text-gray-400"> Ajusta el aspecto de la app </span>
                    </p>
                    <button 
                        @click="contentTheme = !contentTheme"
                        class="dark:text-white cursor-pointer hover:opacity-75 mb-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                :class="!contentTheme ? 'lucide lucide-chevron-down-icon lucide-chevron-down' : 'lucide lucide-chevron-up-icon lucide-chevron-up'">
                                    <path :d="!contentTheme ? 'm6 9 6 6 6-6' : 'm18 15-6-6-6 6'"/>
                            </svg>
                    </button>
                </div>
                <div v-if="contentTheme">
                    <div class="flex justify-start items-center gap-x-4 mt-3">
                        <div class="bg-white border-2 border-blue-500 dark:border-none rounded-lg px-4 py-2 cursor-pointer hover:opacity-75">
                            <div class="flex justify-between items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                                <span> Modo claro </span>
                            </div>
                        </div>
                        <div class="bg-dark-soft rounded-lg px-4 py-2 cursor-pointer hover:opacity-75">
                            <div class="flex justify-between items-center gap-x-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
                                <span> Modo obscuro </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

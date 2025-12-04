<script setup lang="ts">
    import ChangeTheme from '~/components/user/settings/ChangeTheme.vue';
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';
    
</script>

<template>
    <section>

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
                <ChangeTheme/>
            </div>
        </section>
        
    </section>
</template>

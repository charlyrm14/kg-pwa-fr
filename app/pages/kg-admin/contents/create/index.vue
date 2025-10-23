<script setup lang="ts">
    
    import Breadcrumb from '~/components/common/Breadcrumb.vue';

    definePageMeta({
        layout: 'admin'
    })

</script>

<template>

    <section class="md:px-5">
        <Breadcrumb
            heading="Creación contenido | Evento"
            primary-section="Contenidos"
            primary-link="/kg-admin/contents"
            secondary-section="Crear"/>
    </section>

    <section class="md:px-5 mt-7">
        <div class="flex flex-col gap-6 md:flex-row">
            <main class="md:basis-[70%]">
                <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg">
                    <div class="p-5">
                        <h2 class="text-gray-500 dark:text-gray-300 text-2xl"> Agrega un título </h2>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ej: Mi evento"
                            class="border-b border-gray-200 dark:border-dark-extralight text-gray-600 dark:text-gray-300 md:text-4xl w-full mt-2 focus:outline-none px-2 py-6">
                    </div>
                    <div class="p-5">
                        <h2 class="text-gray-500 dark:text-gray-300 text-2xl"> Agrega un contenido </h2>
                        <div class="border border-gray-200 dark:border-dark-extralight mt-6 rounded-lg h-60">
                            <div class="flex justify-start items-center gap-x-3 border-b border-gray-200 dark:border-dark-extralight p-4">
                                <button 
                                    class="text-gray-700 dark:text-gray-300 cursor-pointer hover:opacity-75"> 
                                        Normal 
                                </button>
                                <button 
                                    class="text-gray-700 dark:text-gray-300 font-bold cursor-pointer hover:opacity-75"> 
                                        B 
                                </button>
                                <button 
                                    class="text-gray-700 dark:text-gray-300 italic cursor-pointer hover:opacity-75"> 
                                        I 
                                </button>
                                <button 
                                    class="text-gray-700 dark:text-gray-300 underline cursor-pointer hover:opacity-75"> 
                                        U 
                                </button>
                            </div>
                            <div class="p-0.5 cursor-text">
                                <textarea 
                                    name="content" 
                                    id="content"
                                    class="w-full bg-gray-50 dark:bg-dark-light text-gray-600 dark:text-gray-300 focus:outline-none h-43 p-1.5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <aside class="md:basis-[30%]">
                <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg">
                    <div class="p-5 border-b border-gray-200 dark:border-dark-extralight">
                        <h4 class="dark:text-gray-300 text-lg"> Estado del contenido </h4>
                    </div>
                    <div class="p-5 space-y-6">
                        <div class="flex justify-between items-center">
                            <p class="dark:text-white font-bold">
                                Publicar <span class="block text-sm dark:text-gray-400 font-light"> Contenido visible para todos los usuarios </span>
                            </p>
                            <button class="bg-blue-500 text-white border border-blue-500 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                                Guardar
                            </button>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="dark:text-white font-bold">
                                Borrador <span class="block text-sm dark:text-gray-400 font-light"> Contenido visible para todos los usuarios </span>
                            </p>
                            <button class="bg-gray-200 dark:bg-dark-extralight text-gray-600 dark:text-gray-400 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg mt-6">
                    <div class="p-5 border-b border-gray-200 dark:border-dark-extralight">
                        <h4 class="dark:text-gray-300 text-lg"> Horario evento </h4>
                    </div>
                    <div class="p-5 space-y-6">
                        <div>
                            <label for="start_date" class="text-gray-500 dark:text-gray-300"> Fecha inicio </label>
                            <input 
                                type="date"
                                name="start_date"
                                class="w-full border dark:border-dark-extralight text-gray-600 dark:text-gray-300 rounded-lg px-4 py-2 focus:outline-none mt-2">
                        </div>
                        <div>
                            <label for="start_date" class="text-gray-500 dark:text-gray-300"> Fecha fin </label>
                            <input 
                                type="date"
                                name="end_date"
                                class="w-full border dark:border-dark-extralight text-gray-600 dark:text-gray-300 rounded-lg px-4 py-2 focus:outline-none mt-2">
                        </div>
                        <div>
                            <label for="start_date" class="text-gray-500 dark:text-gray-300"> Ubicación </label>
                            <input 
                                type="text"
                                name="start_date"
                                placeholder="Ej:  Universidad No. 200, San Javier, 76020"
                                class="w-full border dark:border-dark-extralight text-gray-600 dark:text-gray-300 rounded-lg px-4 py-2 focus:outline-none mt-2">
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </section>
</template>

<script setup lang="ts">
    import Breadcrumb from '~/components/common/Breadcrumb.vue';

    definePageMeta({
        layout: 'admin'
    })

    const publishContent = ref<boolean>(true)
    const eventContent = ref<boolean>(true)
    const imageContent = ref<boolean>(true) 

</script>

<template>
    <section>
        
        <section class="md:px-5">
            <Breadcrumb
                heading="Creación contenido - Evento"
                primary-section="Contenidos"
                primary-link="/kg-admin/contents"
                secondary-section="Crear Evento"/>
        </section>

        <section class="md:px-5 mt-7">
            <div class="flex flex-col md:flex-row">
                <main class="md:basis-[70%]">
                    <div class="bg-white dark:bg-dark p-4 border border-gray-200 dark:border-dark-light">
                        <div class="p-2">
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Agrega un título"
                                class="text-gray-500 dark:text-gray-300 text-xl md:text-4xl w-full mt-2 focus:outline-none px-2 py-6 font-bold">
                        </div>
                        <div class="p-2">
                            <div class="border-t border-gray-300 dark:border-dark-soft">
                                <textarea 
                                    name="content" 
                                    id="content"
                                    class="w-full h-120 mt-3 text-gray-500 dark:text-gray-300 font-bold border-b border-gray-300 dark:border-dark-soft p-4 focus:outline-none"
                                    placeholder="Agrega un contenido"></textarea>
                            </div>
                        </div>
                    </div>
                </main>
                <aside class="md:basis-[30%] space-y-4">
                    <div class="bg-white dark:bg-dark border border-gray-200 dark:border-dark-light flex flex-col-reverse md:flex-col">
                        <div class="flex justify-between items-center gap-x-4 border-b border-gray-200 dark:border-dark-light p-4">
                            <NuxtLink to="/kg-admin/contents" class="border border-gray-300 dark:border-dark-light rounded-xl px-4 py-2 transition-colors cursor-pointer hover:opacity-75 w-full text-gray-400 dark:text-gray-500 font-bold hover:text-red-500 hover:border-red-500 text-center"> 
                                Cancelar 
                            </NuxtLink>
                            <button class="bg-blue-500 text-white font-bold rounded-xl px-4 py-2 transition-colors cursor-pointer hover:opacity-75 w-full"> 
                                Guardar 
                            </button>
                        </div>
                        <div class="border-b border-gray-200 dark:border-dark-light p-4">
                            <div class="flex justify-between items-center">
                                <h4 class="text-gray-500 dark:text-white font-bold text-xl inline-flex items-center gap-x-3"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                                        Publicar 
                                </h4>
                                <button class="text-gray-500 dark:text-white cursor-pointer hover:opacity-75" @click="publishContent = !publishContent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon " :class="publishContent ? 'lucide-chevron-up' : 'lucide-chevron-down'"><path :d="publishContent ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'"/></svg>
                                </button>
                            </div>
                            <div v-if="publishContent" class="mt-3">
                                <label for="content_status_id" class="text-gray-500 dark:text-white font-bold"> Estatus </label>
                                <select 
                                    name="content_status_id" 
                                    id="content_status_id" 
                                    class="w-full mt-3 border border-gray-300 dark:border-dark-light text-gray-500 dark:text-white p-4 rounded-lg focus:outline-none font-bold">
                                        <option value="PUBLISHED"> PUBLISHED </option>
                                        <option value="DRAFT"> DRAFT </option>
                                        <option value="PENDING REVIEW"> PENDING REVIEW </option>
                                        <option value="REJECTED"> REJECTED </option>
                                        <option value="SCHEDULED"> SCHEDULED </option>
                                        <option value="UNPUBLISHED"> UNPUBLISHED </option>
                                        <option value="DELETED"> DELETED </option>
                                </select>
                            </div>
                        </div>
                        <div class="border-b border-gray-200 dark:border-dark-light p-4">
                            <div class="flex justify-between items-center">
                                <h4 class="text-gray-500 dark:text-white font-bold text-xl inline-flex items-center gap-x-3"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-fold-icon lucide-calendar-fold"><path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M15 22v-5a1 1 0 0 1 1-1h5"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/></svg>
                                        Información de evento 
                                </h4>
                                <button class="text-gray-500 dark:text-white cursor-pointer hover:opacity-75" @click="eventContent = !eventContent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon " :class="eventContent ? 'lucide-chevron-up' : 'lucide-chevron-down'"><path :d="eventContent ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'"/></svg>
                                </button>
                            </div>
                            <div v-if="eventContent">
                                <div class="mt-3">
                                    <label for="start_date" class="text-gray-500 dark:text-white"> Fecha de inicio de evento </label>
                                    <input 
                                        type="date"
                                        id="start_date"
                                        name="start_date"
                                        class="w-full mt-3 border border-gray-300 dark:border-dark-light text-gray-500 dark:text-white p-4 rounded-lg focus:outline-none font-bold">
                                </div>
                                <div class="mt-3">
                                    <label for="end_date" class="text-gray-500 dark:text-white"> Fecha fin de evento </label>
                                    <input 
                                        type="date"
                                        id="end_date"
                                        name="end_date"
                                        class="w-full mt-3 border border-gray-300 dark:border-dark-light text-gray-500 dark:text-white p-4 rounded-lg focus:outline-none font-bold">
                                </div>
                                <div class="mt-3">
                                    <label for="location" class="text-gray-500 dark:text-white"> Ubicación </label>
                                    <input 
                                        type="text"
                                        id="location"
                                        name="location"
                                        class="w-full mt-3 border border-gray-300 dark:border-dark-light text-gray-500 dark:text-white p-4 rounded-lg focus:outline-none font-bold"
                                        placeholder="Ubicación del evento">
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-gray-200 dark:border-dark-light p-4">
                            <div class="flex justify-between items-center">
                                <h4 class="text-gray-500 dark:text-white font-bold text-xl inline-flex items-center gap-x-3"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-plus-icon lucide-image-plus"><path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>
                                        Imagen destacada 
                                </h4>
                                <button class="text-gray-500 dark:text-white cursor-pointer hover:opacity-75" @click="imageContent = !imageContent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon " :class="imageContent ? 'lucide-chevron-up' : 'lucide-chevron-down'"><path :d="imageContent ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'"/></svg>
                                </button>
                            </div>
                            <div v-if="imageContent">
                                <div class="my-4 bg-gray-100 dark:bg-dark-light border border-dashed border-gray-300 dark:border-dark-soft rounded-lg px-4 py-6 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-extralight">
                                    <div class="flex justify-center items-center text-gray-500 dark:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-plus-icon lucide-image-plus"><path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>
                                    </div>
                                    <div class="flex justify-center items-center dark:text-white mt-3">
                                        <p class="text-gray-500 dark:text-white"> Selecciona una imagen </p>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <button class="bg-gray-100 dark:bg-dark-extralight text-red-500 border border-gray-200 dark:border-none px-4 py-1 rounded-lg cursor-pointer hover:opacity-75 hover:border hover:border-red-500"> Descartar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>

    </section>
</template>
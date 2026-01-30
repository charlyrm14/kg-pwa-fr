<script setup lang="ts">
    import UploadFileIcon from '~/assets/media/upload.png'
</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-dark rounded-2xl shadow-xl w-[85%] max-w-md md:w-4/5 md:max-w-xl mx-4 max-h-[90vh] overflow-y-auto">

            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                        Cargar archivos
                </h2>
                <button 
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div class="my-2 px-6 py-4">
                <div class="border-2 border-dashed border-gray-300 dark:border-dark-extralight rounded-xl p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-light">
                    <div class="flex flex-col justify-center items-center">
                        <img :src="UploadFileIcon" alt="Upload file" class="w-25">
                        <p>
                            <span class="text-blue-500"> Da click para seleccionar o <span class="font-bold"> arrastra y suelta </span> tus archivos </span>
                        </p>
                        <span class="text-gray-600 dark:text-gray-500 text-sm"> (Peso máximo por archivo 5MB) </span>
                    </div>
                </div>
            </div>

            <div class="my-2 px-6 py-4 space-y-3">
                <h2 class="dark:text-gray-400"> Se estan cargando 2 archivos ... </h2>
                <div class="border dark:border-dark-light p-3 rounded-xl">
                    <div class="flex justify-between items-start gap-x-4">
                        <div class="flex justify-between items-start gap-x-2">
                            <div class="dark:text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                            </div>
                            <div>
                                <p class="dark:text-gray-300 text-sm"> 
                                    Profile-image.png <span class="block text-xs dark:text-gray-500"> 3MB </span>
                                </p>
                            </div>
                        </div>
                        <button class="dark:text-gray-400 cursor-pointer hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                    <div class="w-full h-1.5 rounded-4xl bg-gray-200 dark:bg-dark-extralight overflow-hidden mt-3">
                        <div class="h-full rounded-full bg-blue-500" style="width: 40%"></div>
                    </div>
                </div>
                <div class="border dark:border-dark-light p-3 rounded-xl">
                    <div class="flex justify-between items-start gap-x-4">
                        <div class="flex justify-between items-start gap-x-2">
                            <div class="dark:text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                            </div>
                            <div>
                                <p class="dark:text-gray-300 text-sm"> 
                                    content-cover.png <span class="block text-xs dark:text-gray-500"> 3MB </span>
                                </p>
                            </div>
                        </div>
                        <button class="dark:text-gray-400 cursor-pointer hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                    </div>
                    <div class="w-full h-1.5 rounded-4xl bg-gray-200 dark:bg-dark-extralight overflow-hidden mt-3">
                        <div class="h-full rounded-full bg-green-500" style="width: 100%"></div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-x-4 px-6 py-4 bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-light shrink-0 sticky bottom-0">
                <button
                    class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-lg px-4 py-2 cursor-pointer"> 
                        Cancelar 
                </button>
                <button class="text-white px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer bg-blue-500"> 
                        Guardar
                </button>
            </div>

        </div>
    </div>
</template>
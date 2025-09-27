<script setup lang="ts">

    defineEmits(['closeShareModal'])

</script>

<template>
<div class="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-light rounded-t-2xl ring-1 ring-gray-300 dark:ring-dark-soft p-2 shadow-lg transform transition-transform duration-300 z-[9999] translate-y-0">
        <div class="w-120 md:w-full h-65 md:h-70 mx-auto mb-4 p-4 md:p-8 ">
            
            <div class="flex justify-between items-center">
                <h4 class="dark:text-white text-xl"> Enviar a </h4>
                <button
                    @click="$emit('closeShareModal')"
                    class="dark:text-white cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                </button>
            </div>

            <div class="mt-5 flex gap-x-4">
                <div class="flex flex-col items-center">
                    <button class="bg-green-500 p-3 rounded-full text-white cursor-pointer hover:opacity-75 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </button>
                    <span class="block mt-2 dark:text-white font-extralight"> WhatsApp </span>
                </div>
                <div class="flex flex-col items-center">
                    <button class="bg-blue-500 p-3 rounded-full text-white cursor-pointer hover:opacity-75 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </button>
                    <span class="block mt-2 dark:text-white font-extralight"> Email </span>
                </div>
            </div>

            <div class="mt-10">
                <div class="relative">
                    <input 
                        type="text"
                        class="w-full bg-gray-200 p-4 rounded-lg dark:bg-dark-soft dark:text-slate-200 cursor-pointer"
                        placeholder="http://localhost:3000/contents/news/13bd3802-2d17"
                        disabled>
                    <div class="absolute top-1 right-1 cursor-pointer hover:opacity-75 bg-gray-300 dark:bg-dark-extralight p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 dark:text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<template>
    <section>
        <div class="bg-white dark:bg-dark-extralight p-3 rounded-lg">
            <div class="flex justify-between items-start">
                <div class="flex items-start gap-x-4">
                    <div class="bg-pink-500 p-1 rounded-lg text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
                    </div>
                    <p class="dark:text-white text-xs font-light flex flex-col gap-1"> 
                        Logro <span class="block font-bold"> Nadaste 5 km a lo largo de esta semana y demostraste tu resistencia en el agua. </span>
                    </p>
                </div>
                <span class="font-light text-gray-400 text-lg cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </span>
            </div>
        </div>
        <div class="bg-white dark:bg-dark-extralight p-3 rounded-lg my-4">
            <div class="flex justify-between items-start">
                <div class="flex items-start gap-x-4">
                    <div class="bg-pink-500 p-1 rounded-lg text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
                    </div>
                    <p class="dark:text-white text-xs font-light flex flex-col gap-1"> 
                        Pago <span class="block font-bold"> Se acerca tu pago de mensualidad, que no se te olvide pagar a tiempo. </span>
                    </p>
                </div>
                <span class="font-light text-gray-400 text-lg cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </span>
            </div>
        </div>
    </section>

    <section class="mt-18">
        <button class="w-full bg-blue-500 text-white rounded-lg px-4 py-3 cursor-pointer hover:opacity-75">
            Ver notificaciones anteriores
        </button>
    </section>
</template>

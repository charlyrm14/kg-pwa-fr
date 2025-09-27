<script setup lang="ts">
    import SectionTitle from '~/components/user/shared/SectionTitle.vue';

    const contentTab = ref<number>(1)
</script>

<template>
    <section>
        <div class="relative w-full">
            <div class="w-full h-48 md:h-72 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <img 
                    src="https://nadaconexceso.com/wp-content/uploads/2021/04/Nataci%C3%B3n-Qu%C3%A9-es-y-sus-caracter%C3%ADsticas-Nada-con-exceso.jpg" 
                    alt="Cover" 
                    class="w-full h-full object-cover brightness-40"/>
            </div>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div class="p-1 rounded-full bg-white dark:bg-dark-soft border-4 border-white dark:border-dark-soft shadow-lg">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAM8Jck2fkmmr1OMvbM0JQaG0yaaJaNFZmaKt2n4YWYvfsHvQhvpr0gVA3cj87723MyU&usqp=CAU" 
                        alt="Profile"
                        class="w-30 h-30 md:w-40 md:h-40 rounded-full object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-21 md:mt-25">
        <h1 class="text-center text-2xl dark:text-white font-extrabold"> Carlos R. </h1>
    </section>

    <section class="mt-6">
        <nav class="flex justify-start items-center gap-x-6">
            <button
                @click="contentTab = 1" 
                class="cursor-pointer hover:opacity-75 text-lg"
                :class="contentTab === 1 ? 'border-b-4 border-blue-500 dark:text-white' : 'text-gray-400'"> 
                    Logros 
            </button>
            <button
                @click="contentTab = 2" 
                class="cursor-pointer hover:opacity-75 text-lg"
                :class="contentTab === 2 ? 'border-b-4 border-blue-500 dark:text-white' : 'text-gray-400'"> 
                    Perfil 
            </button>
            <button 
                @click="contentTab = 3"
                class="cursor-pointer hover:opacity-75 text-lg"
                :class="contentTab === 3 ? 'border-b-4 border-blue-500 dark:text-white' : 'text-gray-400'"> 
                    Información general
            </button>
            <button 
                @click="contentTab = 4"
                class="cursor-pointer hover:opacity-75 text-lg"
                :class="contentTab === 4 ? 'border-b-4 border-blue-500 dark:text-white' : 'text-gray-400'"> 
                    Compartir
            </button>
        </nav>
    </section>

    <section class="mt-6">
        <div v-if="contentTab === 1">
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-2 shadow hover:opacity-75">
                <div class="flex justify-between items-start">
                    <div class="flex items-center gap-x-4">
                        <div class="bg-purple-200 p-1 rounded-lg text-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                        </div>
                        <p class="dark:text-white text-xs font-light gap-1"> 
                            Desafío <span class="block text-sm md:text-base"> Nada un total de 5km  </span>
                        </p>
                    </div>
                    <div>
                        <span class="text-xs text-gray-400"> 20 Sep, 2025 </span>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-2 shadow hover:opacity-75 mt-4">
                <div class="flex justify-between items-start">
                    <div class="flex items-center gap-x-4">
                        <div class="bg-purple-200 p-1 rounded-lg text-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                        </div>
                        <p class="dark:text-white text-xs font-light gap-1"> 
                            Desafío <span class="block text-sm md:text-base"> Domina el nado de mariposa  </span>
                        </p>
                    </div>
                    <div>
                        <span class="text-xs text-gray-400"> 10 Jun, 2025 </span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="contentTab === 2">

            <SectionTitle title="Sobre mí"/>
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 shadow mb-4">
                <div class="flex justify-end items-center">
                    <button class="dark:text-gray-400 cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                    </button>
                </div>
                <p class="dark:text-white font-extralight mt-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit taciti, pulvinar congue aliquet rhoncus tempus interdum ut est, non morbi massa laoreet fringilla proin hendrerit. Donec nec inceptos a dictum et ante mattis fusce dictumst, purus aliquet suscipit aptent litora taciti dui orci dapibus, vel nunc erat cum maecenas laoreet tincidunt diam. Tellus sed purus convallis curae faucibus tempus congue imperdiet quisque, euismod neque consequat orci ullamcorper elementum eleifend vitae lectus, hendrerit ultricies habitasse a ut donec accumsan mauris.
                </p>
            </div>

            <SectionTitle title="Hobbies"/>
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 mt-4 shadow">
                <div class="flex justify-end items-center">
                    <button class="dark:text-gray-400 cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                    </button>
                </div>
                <div class="flex flex-wrap gap-2 mt-3">
                    <span class="bg-blue-500 text-white text-sm md:text-base hover:opacity-75 px-4 py-1 rounded-xl whitespace-nowrap"> Correr </span>
                    <span class="bg-blue-500 text-white text-sm md:text-base hover:opacity-75 px-4 py-1 rounded-xl whitespace-nowrap"> Jugar </span>
                    <span class="bg-blue-500 text-white text-sm md:text-base hover:opacity-75 px-4 py-1 rounded-xl whitespace-nowrap"> Pasear </span>
                    <span class="bg-blue-500 text-white text-sm md:text-base hover:opacity-75 px-4 py-1 rounded-xl whitespace-nowrap"> La playa </span>
                    <span class="bg-blue-500 text-white text-sm md:text-base hover:opacity-75 px-4 py-1 rounded-xl whitespace-nowrap"> Futbol </span>
                    <span class="bg-blue-500 text-white text-sm md:text-base hover:opacity-75 px-4 py-1 rounded-xl whitespace-nowrap"> Ver peliculas </span>
                    <span class="bg-blue-500 text-white text-sm md:text-base hover:opacity-75 px-4 py-1 rounded-xl whitespace-nowrap"> Ir al cine </span>
                    <span class="bg-blue-500 text-white text-sm md:text-base hover:opacity-75 px-4 py-1 rounded-xl whitespace-nowrap"> Escuchar música </span>
                </div>
            </div>
        </div>
        <div v-if="contentTab === 3">
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-lg p-4 shadow">
                <div class="flex justify-end items-center">
                    <button class="dark:text-gray-400 cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                    </button>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft">
                    <div class="flex justify-between items-center dark:text-white gap-x-4 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake-icon lucide-cake"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>
                        <p class="dark:text-white font-bold">
                            1 Diciembre, 1990 <span class="block text-sm font-light"> Fecha nacimiento </span>
                        </p>
                    </div>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-soft mt-3">
                    <div class="flex justify-between items-center dark:text-white gap-x-4 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                        <p class="dark:text-white font-bold">
                            (+52) 55 0101 0202 <span class="block text-sm font-light"> Telefóno </span>
                        </p>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-3">
                    <div class="flex justify-between items-center dark:text-white gap-x-4 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-venus-icon lucide-venus"><path d="M12 15v7"/><path d="M9 19h6"/><circle cx="12" cy="9" r="6"/></svg>
                        <p class="dark:text-white font-bold">
                            Hombre <span class="block text-sm font-light"> Genero </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="contentTab === 4">
            <div class="flex justify-center">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" 
                    alt="Qr profile"
                    class="rounded-lg">
            </div>
            <div class="mt-4 flex justify-center">
                <p class="dark:text-white"> Escanea QR </p>
            </div>
            <div class="mt-3">
                <SectionTitle title="Otros"/>
            </div>
            <div class="flex justify-start items-center gap-x-4 mt-2 bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none rounded-full p-3 shadow">
                <button
                    class="bg-gray-200 dark:bg-dark-soft text-gray-500 dark:text-white p-3 rounded-full cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                </button>
                <button
                    class="bg-gray-200 dark:bg-dark-soft text-gray-500 dark:text-white p-3 rounded-full cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </button>
                <button
                    class="bg-gray-200 dark:bg-dark-soft text-gray-500 dark:text-white p-3 rounded-full cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                </button>
            </div>
        </div>
    </section>
</template>
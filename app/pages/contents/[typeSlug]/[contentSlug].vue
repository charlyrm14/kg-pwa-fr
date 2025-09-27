<script setup lang="ts">
    import Alert from '~/components/common/Alert.vue'
    import ShareContent from '~/components/user/contents/ShareContent.vue'

    const route = useRoute()

    const contentTab = ref<number>(1)
    const favoriteAlert = ref<boolean>(false)
    const showShareModal = ref<boolean>(false)

    const closeFavoritesAlert = () => {
        favoriteAlert.value = false
    }

    const closeShareModal = () => {
        showShareModal.value = false
    }
    

</script>

<template>

    <Alert
        v-if="favoriteAlert"
        description="Agregado a favoritos"
        @closeFavoritesAlert="closeFavoritesAlert"/>

    <section>
        <NuxtLink
            :to="`/contents/${route.params.typeSlug}`"
            class="dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </NuxtLink>
    </section>

    <section class="mt-2">
        <div class="flex justify-center items-start py-2">
            <div class="relative w-full mx-auto  rounded-xl overflow-hidden">
                
                <div class="relative w-full h-76 lg:h-[30rem] overflow-hidden">
                    <img 
                        src="https://nadaconexceso.com/wp-content/uploads/2021/04/Nataci%C3%B3n-Qu%C3%A9-es-y-sus-caracter%C3%ADsticas-Nada-con-exceso.jpg" 
                        alt="Contenido principal" 
                        class="w-full h-full object-cover"/>
                </div>
                
                <div class="p-4 pt-8">
                    <div class="relative flex items-center justify-between h-10">
                        <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-[80%] md:-translate-y-[60%] mb-2">
                            <div class="w-20 h-20 md:w-25 md:h-25 rounded-full border-4 border-white dark:border-dark-soft overflow-hidden">
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAM8Jck2fkmmr1OMvbM0JQaG0yaaJaNFZmaKt2n4YWYvfsHvQhvpr0gVA3cj87723MyU&usqp=CAU" 
                                    alt="Avatar" 
                                    class="w-full h-full object-cover"/>
                            </div>
                        </div>
                        
                        <div class="flex justify-between w-full px-4 -translate-y-2">
                            <button 
                                @click="favoriteAlert = !favoriteAlert"
                                class="dark:text-white hover:text-red-500 transition-colors cursor-pointer hover:opacity-75">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="28" 
                                        height="28" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        stroke-width="2" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        class="lucide lucide-heart-icon lucide-heart"
                                        :class="favoriteAlert ? 'text-red-500' : ''">
                                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
                                    </svg>
                            </button>
                            
                            <button 
                                @click="showShareModal = !showShareModal"
                                class="dark:text-white hover:text-blue-400 transition-colors cursor-pointer hover:opacity-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section>
        <div>
            <h1 class="dark:text-white font-bold text-2xl"> Mi noticia de un contenido </h1>
            <p class="inline-flex items-center gap-2 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1"><path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                    <span class="block text-sm font-light"> Publicado el 25 Sept, 2025 </span>
            </p>
        </div>
    </section>

    <section class="mt-6">
        <div class="flex justify-start items-center gap-x-6 bg-white dark:bg-dark-extralight px-4 py-2 rounded-lg shadow">
            <button
                @click="contentTab = 1" 
                class="cursor-pointer hover:opacity-75 text-lg"
                :class="contentTab === 1 ? 'border-b-4 border-blue-500 dark:text-white' : 'text-gray-400'"> 
                    Información 
            </button>
            <button
                v-if="route.params.typeSlug === 'events'"
                @click="contentTab = 2" 
                class="cursor-pointer hover:opacity-75 text-lg"
                :class="contentTab === 2 ? 'border-b-4 border-blue-500 dark:text-white' : 'text-gray-400'"> 
                    Detalles del evento 
            </button>
        </div>
    </section>

    <section v-if="contentTab === 1" class="my-6">
        <div class="bg-white dark:bg-dark-extralight rounded-lg p-3 shadow border border-gray-200 dark:border-none">
            <p class="dark:text-white font-light">
                Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit eget congue, vel sed ultricies scelerisque posuere penatibus cras dis venenatis conubia, placerat dictumst tincidunt per habitant blandit lobortis justo non. Pellentesque pharetra posuere aliquam ac hendrerit in maecenas fusce commodo viverra, egestas condimentum erat quisque cras volutpat eget fames. Leo class aliquet ac habitasse curae dui cubilia sodales hendrerit, volutpat sapien montes inceptos nisi a pellentesque risus curabitur, tempus nascetur justo dictum consequat porttitor lacinia tristique.
            </p>
            <p class="dark:text-white font-light my-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit eget congue, vel sed ultricies scelerisque posuere penatibus cras dis venenatis conubia, placerat dictumst tincidunt per habitant blandit lobortis justo non. Pellentesque pharetra posuere aliquam ac hendrerit in maecenas fusce commodo viverra, egestas condimentum erat quisque cras volutpat eget fames. Leo class aliquet ac habitasse curae dui cubilia sodales hendrerit, volutpat sapien montes inceptos nisi a pellentesque risus curabitur, tempus nascetur justo dictum consequat porttitor lacinia tristique.
            </p>
            <p class="dark:text-white font-light my-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit eget congue, vel sed ultricies scelerisque posuere penatibus cras dis venenatis conubia, placerat dictumst tincidunt per habitant blandit lobortis justo non. Pellentesque pharetra posuere aliquam ac hendrerit in maecenas fusce commodo viverra, egestas condimentum erat quisque cras volutpat eget fames. Leo class aliquet ac habitasse curae dui cubilia sodales hendrerit, volutpat sapien montes inceptos nisi a pellentesque risus curabitur, tempus nascetur justo dictum consequat porttitor lacinia tristique.
            </p>
        </div>        
    </section>

    <section v-else class="my-6">
        <div class="bg-white dark:bg-dark-extralight rounded-lg p-3 shadow border border-gray-200 dark:border-none">
            <div>
                <p class="text-gray-600 dark:text-gray-400 font-light inline-flex gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar1-icon lucide-calendar-1"><path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                        ¿Cúando?
                </p>
                <p class="dark:text-white text-base md:text-lg gap-1"> 
                    27 de Septiembre 2025
                </p>
            </div>
            <div class="mt-4">
                <p class="text-gray-600 dark:text-gray-400 font-light inline-flex gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                        ¿A Qué hora?
                </p>
                <p class="dark:text-white text-base md:text-lg gap-1"> 
                    09:00 a 12:00
                </p>
            </div>
            <div class="mt-4">
                <p class="text-gray-600 dark:text-gray-400 font-light inline-flex gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                        ¿Dónde?
                </p>
                <p class="dark:text-white text-base md:text-lg gap-1"> 
                    José María Pino Suárez 30, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06060 Ciudad de México, CDMX
                </p>
            </div>
        </div>
    </section>

    <ShareContent
        v-if="showShareModal"
        @closeShareModal="closeShareModal"/>

</template>

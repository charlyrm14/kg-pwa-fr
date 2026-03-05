<script setup lang="ts">
    import Avatar from '~/assets/media/training.webp'
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import { useModalManager, useAlert  } from '#imports';
    import { useUserStore } from '~/stores/users';
    import UserCurrentLevel from '~/components/admin/users/UserCurrentLevel.vue';
    import EditUserProgress from '~/components/admin/users/EditUserProgress.vue';
    import EditSkillProgress from '~/components/admin/users/EditSkillProgress.vue';
    import Alert from '~/components/common/Alert.vue';

    definePageMeta({
        layout: 'admin'
    })

    const route = useRoute()
    const uuidParam = route.params.uuid

    const { open, close, isOpen, modalPayload } = useModalManager()
    const { alert, closeAlert } = useAlert()

    const userStore = useUserStore()

    const tab = ref<number>(2)

    const { data: user } = await useAsyncData('user-edit', async() => {
        await userStore?.fetchUserInfo(uuidParam as string)
        return userStore?.userInfo
    })

</script>

<template>
    <section class="md:px-5">

        <Alert 
            v-if="alert.status" 
            :title="alert.title" 
            :description="alert.description" 
            :type="alert.type" 
            @closeAlert="closeAlert"/>

        <section>
            <Breadcrumb
                heading="Edición usuario"
                primary-section="Usuarios"
                primary-link="/kg-admin/users"
                secondary-section="Editar"/>
        </section>
        
        <section class="mt-7">
            <!-- Beginning Header User -->
            <section>
                <div class="w-full bg-white dark:bg-dark-light rounded-2xl p-4 flex items-center gap-4 shadow dark:shadow-none">

                    <!-- Avatar -->
                    <div class="basis-[20%] sm:basis-[12%] lg:basis-[8%] flex justify-center">
                        <img
                            :src="Avatar"
                            alt="Avatar"
                            class="w-16 h-16 md:w-22 md:h-22 rounded-full object-cover border-2 border-blue-500"/>
                    </div>

                    <!-- Información del alumno -->
                    <div class="flex-1 flex flex-col justify-center">
                        <h1 class="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">
                            Carlos Ramos
                        </h1>
                        <p class="text-xs md:text-lg text-gray-400 mt-1 font-semibold">
                            Nivel 3 • Programa Niños
                        </p>
                        <div class="mt-3 flex items-center gap-3">
                            <div class="w-full bg-gray-200 dark:bg-dark-extraligh h-2 md:h-3 rounded-full overflow-hidden">
                                <div class="bg-blue-500 h-full rounded-full" style="width:60%"></div>   
                            </div>
                            <span class="text-xs md:text-base text-blue-500 font-extrabold"> 60% </span>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Header User -->
        </section>

        <section class="my-3">
            <!-- Beginning User Tabs -->
            <div class="w-full border-b border-gray-300 dark:border-dark-soft overflow-hidden">
                <div class="flex items-center gap-6 px-4">
                    <button 
                        class="py-3 text-base md:text-lg cursor-pointer hover:opacity-75"
                        :class="tab === 1 ? 'border-b-4 border-blue-500 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-400 border-b-2 border-transparent transition-all duration-200 font-semibold'"
                        @click="tab = 1">
                            Clases
                    </button>
                    <button 
                        class="py-3 text-base md:text-lg cursor-pointer hover:opacity-75"
                        :class="tab === 2 ? 'border-b-4 border-blue-500 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-400 border-b-2 border-transparent transition-all duration-200 font-semibold'"
                        @click="tab = 2">
                            Progreso
                    </button>
                    <button 
                        class="py-3 text-base md:text-lg cursor-pointer hover:opacity-75"
                        :class="tab === 3 ? 'border-b-4 border-blue-500 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-400 border-b-2 border-transparent transition-all duration-200 font-semibold'"
                        @click="tab = 3">
                            Ajustes
                    </button>
                </div>
            </div>
            <!-- End User Tabs -->
        </section>

        <section v-if="tab === 1" class="my-3">
            <!-- Beginning User Schedule -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-3">
                    <div class="bg-white dark:bg-dark-light rounded-2xl p-4 shadow dark:shadow-none">
                        <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                            <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg"> Horario semanal </h4>
                            <button class="bg-purple-500 text-white rounded-full px-3 py-0.5 cursor-pointer hover:opacity-75 mb-2"> 
                                Editar 
                            </button>
                        </div>
                        <div class="flex overflow-x-auto justify-center md:items-center gap-x-4 mt-4">
                            <div class="px-3 py-3.5 rounded-4xl overflow-hidden flex-shrink-0 bg-blue-500">
                                <h2 class="text-white text-xs md:text-base uppercase text-center flex flex-col">
                                    L <span class="text-2xl font-bold"> 02 </span>
                                </h2>
                            </div>
                            <div class="px-3 py-3.5 rounded-4xl overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-dark-soft">
                                <h2 class="text-gray-500 dark:text-white text-xs md:text-base uppercase text-center flex flex-col">
                                    M <span class="text-2xl font-bold"> 03 </span>
                                </h2>
                            </div>
                            <div class="px-3 py-3.5 rounded-4xl overflow-hidden flex-shrink-0 bg-blue-500">
                                <h2 class="text-white text-xs md:text-base uppercase text-center flex flex-col">
                                    M <span class="text-2xl font-bold"> 04 </span>
                                </h2>
                            </div>
                            <div class="px-3 py-3.5 rounded-4xl overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-dark-soft">
                                <h2 class="text-gray-500 dark:text-white text-xs md:text-base uppercase text-center flex flex-col">
                                    J <span class="text-2xl font-bold"> 05 </span>
                                </h2>
                            </div>
                            <div class="px-3 py-3.5 rounded-4xl overflow-hidden flex-shrink-0 bg-blue-500">
                                <h2 class="text-white text-xs md:text-base uppercase text-center flex flex-col">
                                    V <span class="text-2xl font-bold"> 06 </span>
                                </h2>
                            </div>
                            <div class="px-3 py-3.5 rounded-4xl overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-dark-soft">
                                <h2 class="text-gray-500 dark:text-white text-xs md:text-base uppercase text-center flex flex-col">
                                    S <span class="text-2xl font-bold"> 07 </span>
                                </h2>
                            </div>
                            <div class="px-3 py-3.5 rounded-4xl overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-dark-soft">
                                <h2 class="text-gray-500 dark:text-white text-xs md:text-base uppercase text-center flex flex-col">
                                    D <span class="text-2xl font-bold"> 08 </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-dark-light rounded-2xl p-4 space-y-3 shadow dark:shadow-none">
                        <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight">
                            <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg"> Historial asistencias </h4>
                            <span class="text-blue-500 font-bold text-sm md:text-lg"> Marzo 2026 </span>
                        </div>
                        <div class="flex justify-between items-center border-b border-gray-100 dark:border-dark-extralight my-1">
                            <p class="text-gray-500 dark:text-white text-base md:text-lg font-bold mb-2"> Lunes 02 </p>
                            <span class="bg-gray-200 dark:bg-dark-soft text-white px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-x-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
                                    Asistió 
                            </span>
                        </div>
                        <div class="flex justify-between items-center border-b border-gray-100 dark:border-dark-extralight my-1">
                            <p class="text-gray-500 dark:text-white text-base md:text-lg font-bold mb-2"> Martes 03 </p>
                            <span class="bg-gray-200 dark:bg-dark-soft text-white px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-x-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle text-red-500"><circle cx="12" cy="12" r="10"/></svg>
                                    No Asistió 
                            </span>
                        </div>
                        <div class="flex justify-between items-center border-b border-gray-100 dark:border-dark-extralight my-1">
                            <p class="text-gray-500 dark:text-white text-base md:text-lg font-bold mb-2"> Miércoles 04 </p>
                            <span class="bg-gray-200 dark:bg-dark-soft text-white px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-x-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
                                    Asistió 
                            </span>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-dark-light rounded-2xl p-4">
                    <div class="flex justify-between items-center border-b border-gray-200 dark:border-dark-extralight">
                        <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg"> Historial por mes </h4>
                        <span class="text-blue-500 font-bold text-sm md:text-lg"> 2026 </span>
                    </div>
                    <div class="space-y-2 mt-3">
                        <div class="flex justify-between items-center  bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-xl">
                            <p class="text-gray-500 dark:text-white text-base md:text-xl font-bold mb-2"> 
                                Marzo
                            </p>
                            <button class="bg-gray-300 dark:bg-dark-soft text-blue-500 rounded-full p-1.5 cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                            </button>
                        </div>
                        <div class="flex justify-between items-center  bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-xl">
                            <p class="text-gray-500 dark:text-white text-base md:text-xl font-bold mb-2"> 
                                Febrero
                            </p>
                            <button class="bg-gray-300 dark:bg-dark-soft text-blue-500 rounded-full p-1.5 cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                            </button>
                        </div>
                        <div class="flex justify-between items-center  bg-gray-100 dark:bg-dark-extralight px-4 py-2 rounded-xl">
                            <p class="text-gray-500 dark:text-white text-base md:text-xl font-bold mb-2"> 
                                Enero
                            </p>
                            <button class="bg-gray-300 dark:bg-dark-soft text-blue-500 rounded-full p-1.5 cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End User Schedule -->
        </section>

        <section v-if="tab === 2" class="my-3">
            <!-- Beginning User Progress -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <UserCurrentLevel/>
                    <div class="space-y-3">
                        <EditUserProgress/>
                        <EditSkillProgress/>
                    </div>
                </div>
            <!-- Beginning User Progress -->
        </section>

        <section v-if="tab === 3" class="my-3">
            <!-- Beginning User Settings -->
            <div>
                <div class="bg-white dark:bg-dark-light rounded-2xl p-4">
                    <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                        <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg mb-2"> Información de usuario </h4>
                        <button class="text-sm md:text-base bg-blue-500 text-white font-semibold rounded-full px-4 py-1 cursor-pointer hover:opacity-75 mb-2"> Editar </button>
                    </div>
                    <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                        <span class="text-gray-500 font-semibold text-sm md:text-base"> Nombre </span>
                        <p class="text-sm md:text-lg text-black dark:text-white font-bold"> Carlos I. </p>
                    </div>
                    <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                        <span class="text-gray-500 font-semibold text-sm md:text-base"> Apellido paterno </span>
                        <p class="text-sm md:text-lg text-black dark:text-white font-bold"> Ramos </p>
                    </div>
                    <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                        <span class="text-gray-500 font-semibold text-sm md:text-base"> Apellido materno </span>
                        <p class="text-sm md:text-lg text-black dark:text-white font-bold"> Morales </p>
                    </div>
                    <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                        <span class="text-gray-500 font-semibold text-sm md:text-base"> Correo electrónico </span>
                        <p class="text-sm md:text-lg text-black dark:text-white font-bold"> c.iramosm90@gmail.com </p>
                    </div>
                    <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                        <span class="text-gray-500 font-semibold text-sm md:text-base"> Código de estudiante </span>
                        <p class="text-sm md:text-lg text-black dark:text-white font-bold"> STU-20260226-5065 </p>
                    </div>
                    <div class="mt-3 flex justify-between items-center gap-x-4 border-b border-dashed border-gray-200 dark:border-dark-extralight">
                        <span class="text-gray-500 font-semibold text-sm md:text-base"> Rol </span>
                        <p class="text-sm md:text-lg text-black dark:text-white font-bold"> Alumno </p>
                    </div>
                    <div class="mt-3 flex justify-between items-center gap-x-4">
                        <span class="text-gray-500 font-semibold text-sm md:text-base inline-flex justify-between items-center gap-x-2"> 
                            Fecha de nacimiento
                        </span>
                        <p class="text-sm md:text-lg text-black dark:text-white font-bold"> 2010-01-01 </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="bg-white dark:bg-dark-light rounded-2xl p-4 mt-3">
                    <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                        <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg mb-2"> Eliminar usuario </h4>
                    </div>
                    <div class="bg-gray-200 dark:bg-dark-extralight rounded-xl p-4 mt-4">
                        <p class="text-gray-600 dark:text-gray-300 font-bold inline-flex items-center gap-x-4"> 
                            <input 
                                type="checkbox" 
                                name="confirm_delete" 
                                id="confirm_delete"
                                class="bg-indigo-500">
                                    Confirmar desactivación de cuenta 
                        </p>
                    </div>
                    <div class="flex justify-end items-center my-4">
                        <button class="bg-red-500 text-white font-semibold px-4 py-2 rounded-full cursor-pointer hover:opacity-75">
                            Si, eliminar usuario
                        </button>
                    </div>
                </div>
            </div>
            <!-- End User Settings -->
        </section>
    </section>
</template>

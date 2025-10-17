<script setup lang="ts">
    
    import AddUserPayment from '~/components/admin/users/AddUserPayment.vue';
    import AttendanceUser from '~/components/admin/users/AttendanceUser.vue';
    import PaymentUser from '~/components/admin/users/PaymentUser.vue';
    import ScheduleUser from '~/components/admin/users/ScheduleUser.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import { useModalManager } from '#imports';
    import EditUserSchedule from '~/components/admin/users/EditUserSchedule.vue';
    import DeleteUser from '~/components/admin/users/DeleteUser.vue';
    import ProgressUser from '~/components/admin/users/ProgressUser.vue';
    
    definePageMeta({
        layout: 'admin'
    })

    const tab = ref<number>(1)
    const { open, close, isOpen } = useModalManager()

</script>

<template>

    <section class="md:px-5">
        <Breadcrumb
            heading="Edición usuario"
            primary-section="Usuarios"
            primary-link="/kg-admin/users"
            secondary-section="Editar"/>
    </section>

    <section class="md:px-5 mt-7">
        <div class="flex flex-col gap-6 md:flex-row">
            <aside class="md:basis-[20%]">
                <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg">
                    <div class="p-5">
                        <div class="flex justify-center items-center">
                            <div class="rounded-full bg-gray-200 dark:bg-dark-extralight p-4 dark:text-white cursor-pointer hover:opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                        </div>
                        <div class="flex justify-center items-center mt-2">
                            <p class="dark:text-white text-lg"> Jhon W <span class="block text-center text-base dark:text-gray-400"> Smith </span> </p>
                        </div>
                        <div class="mt-4 flex justify-center items-center">
                            <span class="bg-lime-400 text-white px-4 py-0.5 rounded-xl text-sm"> Estudiante </span>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="border-b border-gray-200 dark:border-dark-soft flex justify-between items-center">
                            <h4 class="dark:text-gray-400 mb-2"> Información </h4>
                            <button class="bg-blue-500 px-2 py-0.5 mb-2 text-sm text-white rounded cursor-pointer hover:opacity-75">
                                Editar
                            </button>
                        </div>
                    </div>
                    <div class="px-5 pb-4 space-y-3">
                        <div>
                            <p class="dark:text-white"> Nombre <span class="block text-gray-600 dark:text-gray-400"> Carlos I. </span> </p>
                        </div>
                        <div class="my-2">
                            <p class="dark:text-white"> Apellido paterno <span class="block text-gray-600 dark:text-gray-400"> Ramos </span> </p>
                        </div>
                        <div class="my-2">
                            <p class="dark:text-white"> Apellido materno <span class="block text-gray-600 dark:text-gray-400"> Morales </span> </p>
                        </div>
                        <div class="my-2">
                            <p class="dark:text-white"> Correo electrónico <span class="block text-gray-600 dark:text-gray-400"> correo@correo.com </span> </p>
                        </div>
                    </div>
                    <div class="px-5 pb-4">
                        <div class="flex justify-end items-center">
                            <button 
                                @click="open('DeleteUser')"
                                class="dark:bg-dark-extralight px-3 py-0.5 rounded dark:text-gray-500 hover:text-red-400 cursor-pointer inline-flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                    Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
            <main class="md:basis-[80%]">
                <div>
                    <nav class="flex justify-start items-start gap-x-6">
                        <button
                            @click="tab = 1"
                            class="cursor-pointer hover:opacity-75 text-lg"
                            :class="tab === 1 ? 'border-b-3 border-blue-500 dark:text-white pb-2': 'text-gray-400'"> 
                                Clases 
                        </button>
                        <button 
                            @click="tab = 2"
                            class="cursor-pointer hover:opacity-75 text-lg text-gray-400"
                            :class="tab === 2 ? 'border-b-3 border-blue-500 dark:text-white pb-2': 'text-gray-400'"> 
                                Pagos
                        </button>
                        <button 
                            @click="tab = 3"
                            class="cursor-pointer hover:opacity-75 text-lg text-gray-400"
                            :class="tab === 3 ? 'border-b-3 border-blue-500 dark:text-white pb-2': 'text-gray-400'"> 
                                Progreso
                        </button>
                    </nav>
                </div>
                <div v-if="tab === 1">
                    <ScheduleUser/>
                    <AttendanceUser/>
                </div>
                <div v-if="tab === 2">
                    <PaymentUser/>
                </div>
                <div v-if="tab === 3">
                    <ProgressUser/>
                </div>
            </main>
        </div>
    </section>

    <EditUserSchedule
        v-if="isOpen('EditUserSchedule')"
        @closeEditUserScheduleModal="close"/>
    
    <DeleteUser
        v-if="isOpen('DeleteUser')"
        @closeDeleteUserModal="close"/>

    <AddUserPayment
        v-if="isOpen('AddUserPayment')"
        @closeAddPaymentUserModal="close"/>

</template>

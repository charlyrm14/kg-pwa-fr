<script setup lang="ts">
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import { useModalManager, useAlert  } from '#imports';
    import { useUserStore } from '~/stores/users';
    import UserCurrentLevel from '~/components/admin/users/UserCurrentLevel.vue';
    import EditUserProgress from '~/components/admin/users/EditUserProgress.vue';
    import EditSkillProgress from '~/components/admin/users/EditSkillProgress.vue';
    import Alert from '~/components/common/Alert.vue';
    import UserGeneralProgress from '~/components/admin/users/UserGeneralProgress.vue';
    import UserDetailInfo from '~/components/admin/users/UserDetailInfo.vue';
    import UserDelete from '~/components/admin/users/UserDelete.vue';
    import UserWeeklySchedule from '~/components/admin/users/UserWeeklySchedule.vue'
    import UserAssignSchedule from '~/components/admin/users/UserAssignSchedule.vue';
    import UserAttendanceCurrentMonth from '~/components/admin/users/UserAttendanceCurrentMonth.vue';
    import UserAttendanceReport from '~/components/admin/users/UserAttendanceReport.vue';
    import ConfirmUserDelete from '~/components/admin/users/ConfirmUserDelete.vue';

    definePageMeta({
        layout: 'admin',
        middleware: ['auth']
    })

    const route = useRoute()
    const uuidParam = route.params.uuid

    const { close, isOpen, modalPayload } = useModalManager()
    const { alert, closeAlert } = useAlert()

    const userStore = useUserStore()

    const tab = ref<number>(1)

    const { data: user, refresh, error } = await useAsyncData(
        `user-edit-${uuidParam}`,
        () => userStore.fetchUserInfo(uuidParam as string)
    )
    
    const refreshData = async() => await refresh()

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
            <UserGeneralProgress v-if="user" :user="user"/>
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
                    <UserWeeklySchedule 
                        v-if="user"
                        :user-uuid="user?.uuid" 
                        :schedules="user?.schedules"/>
                    <UserAttendanceCurrentMonth
                        v-if="user"
                        :attendances="user?.attendances"/>
                </div>
                <UserAttendanceReport/>
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
            <UserDetailInfo 
                v-if="user" 
                :user="user"
                @refreshUserData="refreshData"/>
            <UserDelete 
                v-if="user" 
                :user="user"/>
            <!-- End User Settings -->
        </section>

        <!-- Beginning User Assign Schedule -->
        <UserAssignSchedule 
            v-if="isOpen('UserAssignScheduleModal')"
            :user-uuid="modalPayload?.userUuid"
            :schedules="modalPayload?.schedules"
            @refreshUserData="refreshData"
            @closeUserAssignScheduleModal="close"/>
        <!-- End User Assign Schedule -->

        <!-- Beginning Confirm User Delete -->
        <ConfirmUserDelete
            v-if="isOpen('ConfirmUserDeleteModal')"
            :user="modalPayload?.user"
            @closeUserConfirmDelete="close"/>
        <!-- Beginning Confirm User Delete -->

    </section>
</template>

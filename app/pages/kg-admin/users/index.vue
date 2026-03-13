<script setup lang="ts">
    import UserHeader from '~/components/admin/users/UserHeader.vue';
    import CreateUser from '~/components/admin/users/CreateUser.vue';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import DeleteUser from '~/components/admin/users/ConfirmUserDelete.vue';
    import UserTable from '~/components/admin/users/UserTable.vue';
    import UserPagination from '~/components/admin/users/UserPagination.vue';
    import { useUserStore } from '~/stores/users';
    import Alert from '~/components/common/Alert.vue';
    import { useAlert, useModalManager,  } from '#imports';
    
    definePageMeta({
        layout: 'admin',
        middleware: ['auth']
    });

    const { modalPayload, close, isOpen } = useModalManager()
    const { alert } = useAlert()
    const userStore = useUserStore()

    const { refresh } = await useAsyncData('users', async() => {
        await userStore?.fetchUsers()
        return userStore?.users ?? { data: [] }
    }) 

    const users = computed(() => userStore?.filteredUsers)

    const refreshData = async() => {
        await refresh()
    } 

</script>

<template>
    <section class="md:px-5">

        <Alert v-if="alert.status" :title="alert.title" :description="alert.description" :type="alert.type"/>

        <section>
            <Breadcrumb
                heading="Lista usuarios"
                primary-section="Usuarios"
                primary-link="/kg-admin/users"
                secondary-section="Lista"/>
        </section>

        <section class="mt-6">
            <div class="bg-white shadow-lg rounded-lg px-4 pt-4 pb-6 dark:bg-dark-light">
                
                <!-- Beginning User Header -->
                <UserHeader/>
                <!-- End User Header -->

                <!-- Beginning User Table -->
                <section v-if="users?.data">
                    <UserTable
                        :users="users?.data"/>
                </section>
                <!-- End User Table -->
                
                <!-- Beginning User Pagination -->
                <UserPagination/>
                <!-- End User Pagination -->
                
            </div>
        </section>

        <CreateUser 
            v-if="isOpen('CreateUserModal')"
            @refreshUsers="refreshData"
            @closeCreateUserModal="close"/>

        <DeleteUser
            v-if="isOpen('DeleteUserModal')"
            :user="modalPayload?.user"
            @closeDeleteUserModal="close"/>

    </section>
</template>
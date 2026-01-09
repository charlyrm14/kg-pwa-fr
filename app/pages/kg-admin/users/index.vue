<script setup lang="ts">
    import UserHeader from '~/components/admin/users/UserHeader.vue';
    import CreateUser from '~/components/admin/users/CreateUser.vue';
    import { useModalManager } from '#imports';
    import Breadcrumb from '~/components/common/Breadcrumb.vue';
    import DeleteUser from '~/components/admin/users/DeleteUser.vue';
    import UserTable from '~/components/admin/users/UserTable.vue';
    import UserPagination from '~/components/admin/users/UserPagination.vue';
    import { useUserStore } from '~/stores/users';
    import type { User } from '#imports';
    
    definePageMeta({
        layout: 'admin'
    });

    const { close, isOpen } = useModalManager()
    const userStore = useUserStore()

    await useAsyncData('users', async() => {
        await userStore?.fetchUsers()
        return userStore?.users ?? { data: [] }
    }) 

</script>

<template>
    <section>

        <section class="md:px-5">
            <Breadcrumb
                heading="Lista usuarios"
                primary-section="Usuarios"
                primary-link="/kg-admin/users"
                secondary-section="Lista"/>
        </section>

        <section class="mt-6 md:px-5">
            <div class="bg-white shadow-lg rounded-lg px-6 pt-10 pb-6 dark:bg-dark-light">
                
                <!-- Beginning User Header -->
                <UserHeader/>
                <!-- End User Header -->

                <!-- Beginning User Table -->
                <section v-if="userStore?.users?.data">
                    <UserTable
                        :users="userStore?.users?.data"/>
                </section>
                <!-- End User Table -->
                
                <!-- Beginning User Pagination -->
                <UserPagination/>
                <!-- End User Pagination -->
                
            </div>
        </section>

        <CreateUser 
            v-if="isOpen('CreateUserModal')"
            @closeCreateUserModal="close"/>

        <DeleteUser
            v-if="isOpen('DeleteUserModal')"
            @closeDeleteUserModal="close"/>

    </section>
</template>
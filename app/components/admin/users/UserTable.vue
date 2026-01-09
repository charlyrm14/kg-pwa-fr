<script setup lang="ts">
    import type { User } from '~~/shared/types/User';
    import UserRow from './UserRow.vue';

    defineProps<{
        users: User[]
    }>()

</script>

<template>
    <div class="w-full overflow-x-auto p-4 mt-8">
        <div class="min-w-[640px]">

            <div class="flex border-b border-gray-200 dark:border-dark-soft pb-3 mb-2 font-semibold text-sm uppercase text-gray-500 dark:text-gray-400">
                <div class="w-1/5 flex-shrink-0 px-2"> Nombre </div>
                <div class="w-1/5 flex-shrink-0 px-2"> Correo </div>
                <div class="w-1/5 flex-shrink-0 px-2"> Fecha creación </div>
                <div class="w-1/5 flex-shrink-0 px-2"> Rol </div>
                <div class="w-1/5 flex-shrink-0 px-2"> Acciones </div>
            </div>
            
            <!-- Beginning User Row -->
            <UserRow
                v-for="user in users"
                :key="user.uuid"
                :user="user"/>
            <!-- End User Row -->

        </div>
    </div>
</template>
<script setup lang="ts">
    import type { User } from '~~/shared/types/User';
    import UserRow from './UserRow.vue';

    defineProps<{
        users: User[]
    }>()

</script>

<template>
    <div class="py-4">
        <div
            v-if="users?.length">
            <!-- Beginning User Row -->
            <UserRow
                v-for="user in users"
                :key="user.uuid"
                :user="user"/>
            <!-- End User Row -->
        </div>
        <div
            v-else>
                <h2 class="dark:text-gray-400 text-center font-bold text-lg">
                    No hay contenido disponible
                </h2>
        </div>
    </div>
</template>
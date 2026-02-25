<script setup lang="ts">
    import { colorRoleDonut, type UserComposition } from '#imports';

    const props = defineProps<{
        users: UserComposition
    }>()

    const circumference = 2 * Math.PI * 40

    const segments = computed(() => {
        let accumulated = 0

        return props?.users?.detail?.map(role => {
            const value = (Number(role.percentage) / 100) * circumference

            const segment = {
                ...role,
                dashArray: `${value} ${circumference}`,
                dashOffset: -accumulated
            }

            accumulated += value

            return segment
        })
    })

</script>

<template>
    <div class="bg-white dark:bg-dark-light shadow-lg rounded-lg p-5">
        <div class="flex justify-between items-center">
            <h4 class="text-gray-500 dark:text-gray-300 text-lg">
                Usuarios
            </h4>
        </div>
        <div class="mt-3">
            <div
                v-for="user in users?.detail"
                :key="user.id"
                class="flex justify-between items-center gap-x-4 border-b border-dashed border-gray-300 dark:border-dark-soft space-y-2">
                    <div class="flex justify-start items-center gap-x-4">
                        <span class="p-1 w-4 h-4 rounded-full" :class="bgRoleColorBySlug(user?.slug)"></span>
                        <span class="text-gray-600 dark:text-gray-300"> {{ user?.name }} </span>
                    </div>
                    <span class="text-lg font-extrabold dark:text-gray-200"> {{ user?.percentage }}% </span>
            </div>
        </div>
        <div>
            <div class="flex flex-col items-center justify-center p-1">
                <div class="relative size-40">
                    <svg v-if="segments" class="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke-width="14"
                            class="stroke-slate-200"/>

                            <circle
                                v-for="segment in segments"
                                :key="segment.id"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-width="14"
                                :stroke-dasharray="segment.dashArray"
                                :stroke-dashoffset="segment.dashOffset"
                                stroke-linecap="round"
                                class="transition-all duration-500"
                                :class="colorRoleDonut(segment.slug)"
                            />
                    </svg>

                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                        <span class="text-4xl text-black dark:text-white font-extrabold"> 100% </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <span class="text-gray-600 dark:text-gray-400 font-semibold"> Total: {{ users?.total ?? 0 }} usuarios </span>
        </div>
    </div>
</template>
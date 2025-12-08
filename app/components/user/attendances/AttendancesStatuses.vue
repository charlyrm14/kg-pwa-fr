<script setup lang="ts">
    import { attendancesColors } from '#imports';

</script>

<template>
    <div class="my-2 flex overflow-x-auto gap-x-4">
        <div v-for="color in attendancesColors()" class="flex justify-between items-start my-1 gap-x-3 overflow-hidden flex-shrink-0">
            <div class="p-1 rounded-full bg-gray-300 dark:bg-dark-extralight mb-2">
                <div class="p-2 rounded-full" :class="color?.color"></div>
            </div>
            <span class="text-sm dark:text-gray-300"> {{ color?.status }} </span>
        </div>
    </div>
</template>
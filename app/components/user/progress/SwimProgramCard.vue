<script setup lang="ts">
    import { iconSwimProgram, type Program } from '#imports'

    defineProps<{
        program: Program
        selectedId?: number
    }>()

    const emit = defineEmits<{
        (e: 'selectProgram', value: number): void
    }>()

    const selectProgram = (programId: number) => {
        emit('selectProgram', programId)
    }

</script>

<template>
    <div class="flex gap-x-4">
        <div 
            class="bg-white dark:bg-dark-extralight rounded-4xl p-2 cursor-pointer shrink-0 w-30 shadow-lg dark:shadow-none"
            :class="program?.id === selectedId ? 'border-3 border-blue-500' : ' opacity-80'"
            @click="selectProgram(program?.id)">
                <img 
                    :src="iconSwimProgram(program?.id)" 
                    :alt="program?.name" 
                    class="w-18 h-18 m-auto drop-shadow-lg drop-shadow-gray-600 dark:drop-shadow-gray-400">
                <div class="flex justify-center mt-2">
                    <span class="text-black dark:text-white font-bold text-center"> 
                        {{ program?.name ?? 'Unknown' }} 
                            <span class="block text-xs font-normal"> {{ program?.min_age }} - {{ program?.max_age }} años </span>
                    </span>
                </div>
        </div>
    </div>
</template>
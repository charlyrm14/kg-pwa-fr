<script setup lang="ts">
    import { 
        useSwimProgram, 
        useStudentProgram, 
        type Program,
        type AssignStudentProgramPayload 
    } from '#imports';
    import AssignPorgressUserSkeleton from '../skeleton/users/AssignPorgressUserSkeleton.vue';

    const { fetchSwimProgram } = useSwimProgram()
    const { 
        studentProgram, 
        loading,
        assignUserProgress 
    } = useStudentProgram()

    const programs = ref<Program[] | null>(null)
    const programSelected = ref<number>(1)
    const categorySelected = ref<number>(0)
    const errorValidation = ref<boolean>(false)
    const isSubmitting = ref<boolean>(false)
    
    onMounted(async() => {
        try {
            const response = await fetchSwimProgram()
            programs.value = response.data
        } catch (error) {
            console.error(error)
        }
    })

    const categories = computed(() => {
        if(!programs.value ) return null

        return {
            ...programs.value.find(
                program => program.id === programSelected.value
            )
        }
    })

    const handleSubmit = async() => {
        if(categorySelected.value === 0) {
            errorValidation.value = true
            return
        }

        errorValidation.value = false
        isSubmitting.value = true

        try {

            const payload: AssignStudentProgramPayload = {
                user_uuid: null,
                swim_program_id: programSelected.value,
                swim_category_id: categorySelected.value
            }
            
            await assignUserProgress(payload)

        } catch (error) {
            console.error(error)
        } finally {
            programSelected.value = 1
            categorySelected.value = 0
            isSubmitting.value = false
        }
    }

</script>

<template>
    <Transition name="fade" mode="out-in">
        <AssignPorgressUserSkeleton v-if="loading" key="loading"/>
        <div
            v-else-if="!studentProgram"
            class="bg-white dark:bg-dark-light rounded-2xl p-4">
                <div class="flex justify-between items-start border-b border-gray-200 dark:border-dark-extralight">
                    <h4 class="text-gray-500 dark:text-gray-400 font-bold text-sm md:text-lg mb-2"> Asignar progreso </h4>
                </div>
                <div class="mt-3 space-y-3">
                    <div>
                        <label for="swim_program_id" class="dark:text-gray-400 font-semibold text-lg"> Nivel </label>
                        <select 
                            name="swim_program_id" 
                            id="swim_program_id"
                            v-model="programSelected"
                            class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-white border border-gray-200 dark:border-dark-soft rounded-4xl px-4 py-2 focus:outline-none">
                                <option
                                    v-for="program in programs"
                                    :key="program.id"
                                    :value="program.id"> {{ program?.name }} </option>
                        </select>
                    </div>
                    <div>
                        <label for="swim_program_id" class="dark:text-gray-400 font-semibold text-lg"> Categorías </label>
                        <select 
                            name="swim_category_id" 
                            id="swim_category_id"
                            v-model="categorySelected"
                            class="w-full bg-gray-100 dark:bg-dark-extralight dark:text-white border border-gray-200 dark:border-dark-soft rounded-4xl px-4 py-2 focus:outline-none">
                                <option :value="0" selected> -- Selecciona una categoría -- </option>
                                <option
                                    v-for="category in categories?.categories"
                                    :key="category.id"
                                    :value="category.id"> {{ category.name }} </option>
                        </select>
                        <span v-if="errorValidation" class="text-red-500 mt-1 text-sm px-2 font-bold">
                            Debes seleccionar una categoria
                        </span>
                    </div>
                </div>
                <div class="flex justify-end mt-8">
                    <button 
                        :disabled="isSubmitting"
                        class=" text-white font-bold rounded-full px-4 py-2 cursor-pointer hover:opacity-75"
                        :class="isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 cursor-pointer'"
                        @click.prevent="handleSubmit()">
                            {{ isSubmitting ? 'Asignando progreso' : 'Asignar progreso' }}
                    </button>
                </div>
        </div>
    </Transition>
</template>

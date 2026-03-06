<script setup lang="ts">
    import { getDaysOfWeek, useSchedule, type Schedule } from '#imports';
    import { useForm } from 'vee-validate';
    import { newAssignUserSchedule } from '~/validations/schedules/assign-schedule';
    import type { AssignUserSchedulePayload } from '~~/shared/types/Schedule';
    import { useUserStore } from '~/stores/users';

    const props = defineProps<{
        userUuid: string
        schedules?: Schedule[] | null
    }>()

    const emit = defineEmits<{
        (e: 'refreshUserData'): void,
        (e: 'closeUserAssignScheduleModal'): void
    }>()

    const isSubmitting = ref<boolean>(false)
    const selectedDays = ref<number[]>([])
    const errorSelectedDays = ref<boolean>(false)
    const isEditMode = computed(() => !!props.schedules?.length)

    const { assignUserSchedule } = useSchedule()
    const userStore = useUserStore()

    onMounted(() => {
        if(props?.schedules?.length) {
            selectedDays.value = props?.schedules.map(d => d.day_id)
        }
    })

    const { defineField,  handleSubmit,  errors, resetForm } = useForm<AssignUserSchedulePayload>({
        initialValues: {
            entry_time: props.schedules?.[0]?.entry_time ?? '',
            departure_time: props.schedules?.[0]?.departure_time ?? ''
        },       
        validateOnMount: false,
        validationSchema: newAssignUserSchedule
    })

    const [ entry_time, entry_timeAttrs ] = defineField('entry_time')
    const [ departure_time, departure_timeAttrs ] = defineField('departure_time')

    const toggleDay = (id: number) => {

        errorSelectedDays.value = false

        if(selectedDays.value.includes(id)){
            selectedDays.value = selectedDays.value.filter(d => d !== id)
        } else{
            selectedDays.value.push(id)
        }
    }

    const onSubmit = handleSubmit(async values => {
        
        if(!selectedDays.value.length) {
            errorSelectedDays.value = true
            return
        }

        errorSelectedDays.value = false

        const payload: AssignUserSchedulePayload = {
            ...values,
            days: selectedDays.value
        }

        try {

            await assignUserSchedule(props?.userUuid, payload)
            emit('refreshUserData')
            emit('closeUserAssignScheduleModal')

        } catch (error) {
            console.error(error)
        } finally {
            errorSelectedDays.value = false
            resetForm(); 
        }
    })

</script>

<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div class="bg-white dark:bg-dark rounded-2xl w-[95vw] h-[95vh] md:w-[40vw] md:h-auto max-w-[1200px] flex flex-col overflow-hidden">
        
            <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-dark-light px-6 py-4">
                <h2 class="text-xl font-extrabold text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check2-icon lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>
                        {{ isEditMode ? 'Editar horario' : 'Asignar horario' }}
                </h2>
                <button
                    :disabled="isSubmitting"
                    class="text-gray-400 dark:text-gray-500 hover:text-red-500 transition"
                    :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'"
                    @click.prevent="$emit('closeUserAssignScheduleModal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <form @submit.prevent="onSubmit">
                <div class="px-6 py-4 space-y-3">
                    <div>
                        <span class="dark:text-gray-200 font-semibold"> Selecciona uno o más días de clase </span>
                        <div class="flex gap-x-3 mt-2 overflow-y-hidden">
                            <button 
                                type="button"
                                class="w-15 h-15 rounded-full font-bold transition-all duration-200 cursor-pointer hover:opacity-75 shrink-0"
                                v-for="day in getDaysOfWeek()"
                                :key="day.id"
                                @click="toggleDay(day.id)"
                                :class="selectedDays.includes(day.id)
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-black dark:bg-dark-light dark:text-gray-300'">
                                    {{ day.shortName }}
                            </button>
                        </div>
                        <span v-if="errorSelectedDays" class="text-red-500 text-sm px-2 font-bold mt-2">
                            Debes seleccionar al menos un día de clase
                        </span>
                    </div>
                    <div class="grid grid-cols-1 gap-4">
                        <div class="mt-3">
                            <label for="entry_time" class="dark:text-gray-200 font-semibold"> Hora de entrada </label>
                            <input 
                                type="time"
                                name="entry_time"
                                id="entry_time"
                                v-model="entry_time"
                                class="w-full bg-gray-200 dark:bg-dark-light dark:text-gray-200 px-4 py-2.5 focus:outline-none rounded-xl mt-2 dark:[color-scheme:dark]">
                            <span v-if="errors.entry_time" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.entry_time  }}
                            </span>
                        </div>
                        <div class="">
                            <label for="departure_time" class="dark:text-gray-200 font-semibold"> Hora de salida </label>
                            <input 
                                type="time"
                                name="departure_time"
                                id="departure_time"
                                v-model="departure_time"
                                class="w-full bg-gray-200 dark:bg-dark-light dark:text-gray-200 px-4 py-2.5 focus:outline-none rounded-xl mt-2 dark:[color-scheme:dark]">
                            <span v-if="errors.departure_time" class="text-red-500 text-sm px-2 font-bold"> 
                                {{ errors.departure_time  }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-x-4 px-6 py-4 bg-white dark:bg-dark shrink-0 sticky bottom-0 mt-4">
                    <button
                        type="button"
                        class="bg-gray-100 dark:bg-dark-extralight text-gray-400 dark:text-gray-500 rounded-4xl px-4 py-2"
                        :class="isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red-500'"
                        :disabled="isSubmitting"
                        @click.prevent="$emit('closeUserAssignScheduleModal')"> 
                            Cancelar 
                    </button>
                    <button
                        class="text-white px-4 py-2 rounded-4xl hover:opacity-75 font-extrabold"
                        :class="!isSubmitting ? 'bg-blue-500 cursor-pointer' : 'bg-blue-300'"
                        :disabled="isSubmitting"
                        type="submit"> 
                            {{ isEditMode ? 'Actualizar horario' : 'Guardar horario' }}
                    </button>
                </div>
            </form>

        </div>
    </div>
</template>
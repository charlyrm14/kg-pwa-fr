<script setup lang="ts">
    import { 
        type UserInfo, 
        type UpdateUserPayload 
    } from '#imports';
    import { useForm } from 'vee-validate';
    import { updateUserSchema } from '~/validations/users/update-user-schema';
    import { useUserStore } from '~/stores/users';

    const props = defineProps<{
        user: UserInfo
    }>()

    const emit = defineEmits<{
        (e: 'refreshUserData'): void
    }>()

    const userStore = useUserStore()

    const { defineField, handleSubmit, errors  } = useForm<UpdateUserPayload>({
        initialValues: {
            name: props?.user ? props?.user?.name : '',
            last_name: props?.user ? props?.user?.last_name : '',
            mother_last_name: props?.user ? props?.user?.mother_last_name : '',
            role_id: props?.user ? props?.user?.role_id : 0,
            birthdate: props?.user?.profile?.birthdate ?? ''
        },
        validationSchema: updateUserSchema
    })

    const [name, nameAttrs] = defineField('name')
    const [last_name, last_nameAttrs] = defineField('last_name')
    const [mother_last_name, mother_last_nameAttrs] = defineField('mother_last_name')
    const [role_id, role_idAttrs] = defineField('role_id')
    const [birthdate, birthdateAttrs] = defineField('birthdate')

    const onSubmit = handleSubmit(async values  => {
        if(!props?.user) return

        try {
            const { uuid } = props.user
            const payload: UpdateUserPayload = { ...values }

            await userStore?.update(uuid, payload)
            emit('refreshUserData')
            
        } catch (error) {
            console.error(error)
        } 
    })

</script>

<template>
    <form @submit.prevent="onSubmit">
        <div class="space-y-3">
            <div class="border-b border-dashed border-gray-300 dark:border-dark-soft">
                <div class="flex flex-col items-start md:flex-row md:justify-between md:items-center my-3">
                    <label for="name" class="dark:text-gray-400 md:text-lg font-semibold"> Nombre </label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        v-model="name"
                        v-bind="nameAttrs"
                        class="w-full rounded-xl bg-gray-200 dark:bg-dark-extralight text-black  dark:text-white font-bold px-4 py-3 basis-[70%] focus:outline-none">
                </div>
                <span v-if="errors.name" class="text-red-500 text-xs md:text-sm px-2 font-bold md:flex md:justify-end mb-3"> 
                    {{ errors.name  }}
                </span>
            </div>
            <div class="border-b border-dashed border-gray-300 dark:border-dark-soft">
                <div class="flex flex-col items-start md:flex-row md:justify-between md:items-center my-3">
                    <label for="last_name" class="dark:text-gray-400 md:text-lg font-semibold"> Apellido paterno </label>
                    <input 
                        type="text"
                        name="last_name"
                        id="last_name"
                        v-model="last_name"
                        v-bind="last_nameAttrs"
                        class="w-full rounded-xl bg-gray-200 dark:bg-dark-extralight text-black dark:text-white font-bold px-4 py-3 basis-[70%] focus:outline-none">
                </div>
                <span v-if="errors.last_name" class="text-red-500 text-xs md:text-sm px-2 font-bold md:flex md:justify-end mb-2"> 
                    {{ errors.last_name  }}
                </span>
            </div>
            <div class="border-b border-dashed border-gray-300 dark:border-dark-soft">
                <div class="flex flex-col items-start md:flex-row md:justify-between md:items-center my-3">
                    <label for="mother_last_name" class="dark:text-gray-400 md:text-lg font-semibold"> Apellido materno </label>
                    <input 
                        type="text"
                        name="mother_last_name"
                        id="mother_last_name"
                        v-model="mother_last_name"
                        v-bind="mother_last_nameAttrs"
                        class="w-full rounded-xl bg-gray-200 dark:bg-dark-extralight text-black  dark:text-white font-bold px-4 py-3 basis-[70%] focus:outline-none">
                    
                </div>
                <span v-if="errors.mother_last_name" class="text-red-500 text-xs md:text-sm px-2 font-bold md:flex md:justify-end mb-2"> 
                    {{ errors.mother_last_name  }}
                </span>
            </div>
            <div class="border-b border-dashed border-gray-300 dark:border-dark-soft">
                <div class="flex flex-col items-start md:flex-row md:justify-between md:items-center my-3">
                    <label for="email" class="dark:text-gray-400 md:text-lg font-semibold"> Correo electrónico </label>
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        :value="user?.email"
                        disabled
                        class="w-full rounded-xl bg-gray-200 dark:bg-dark-extralight text-black  dark:text-gray-300 font-bold px-4 py-3 basis-[70%] focus:outline-none cursor-not-allowed">
                </div>
            </div>
            <div class="border-b border-dashed border-gray-300 dark:border-dark-soft">
                <div class="flex flex-col items-start md:flex-row md:justify-between md:items-center my-3">
                    <label for="role_id" class="dark:text-gray-400 md:text-lg font-semibold"> Rol </label>
                    <select 
                        name="role_id" 
                        id="role_id"
                        v-model="role_id"
                        v-bind="role_idAttrs"
                        class="w-full rounded-xl bg-gray-200 dark:bg-dark-extralight text-black  dark:text-white font-bold px-4 py-3 basis-[70%] focus:outline-none">
                            <option :value="0"> -- Selecciona -- </option>
                            <option :value="1"> Admin </option>
                            <option :value="2"> Profesor </option>
                            <option :value="3"> Estudiante </option>
                    </select>
                </div>
                <span v-if="errors.role_id" class="text-red-500 text-xs md:text-sm px-2 font-bold md:flex md:justify-end mb-2"> 
                    {{ errors.role_id  }}
                </span>
            </div>
            <div class="border-b border-dashed border-gray-300 dark:border-dark-soft">
                <div class="flex flex-col items-start md:flex-row md:justify-between md:items-center my-3">
                    <label for="birthdate" class="dark:text-gray-400 md:text-lg font-semibold"> Fecha de nacimiento </label>
                    <input 
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        v-model="birthdate"
                        v-bind="birthdateAttrs"
                        class="w-full rounded-xl bg-gray-200 dark:bg-dark-extralight text-black  dark:text-white font-bold px-4 py-3 basis-[70%] focus:outline-none dark:[color-scheme:dark]">
                </div>
                <span v-if="errors.birthdate" class="text-red-500 text-xs md:text-sm px-2 font-bold md:flex md:justify-end mb-2"> 
                    {{ errors.birthdate  }}
                </span>
            </div>
            <div class="flex justify-end items-center">
                <button 
                    type="submit"
                    class="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:opacity-75 font-bold">
                        Actualizar información
                </button>
            </div>
        </div>
    </form>
</template>

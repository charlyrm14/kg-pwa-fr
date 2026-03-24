import type { 
    User, 
    UserFilters, 
    UserInfo,
    UserDelete, 
    UserLookUpError,
    RoleType,
    CreateUserPayload,
    UpdateUserPayload
} from "~~/shared/types/User"
import { useAlert, type PaginationContent } from "#imports"
import { 
    createUserDataSource,
    deleteUserDataSource,
    fetchUserInfoDataSource, 
    fetchUsersDataSource, 
    updateUserDataSource
} from "~/data/users/users.datasource"

export const useUserStore = defineStore('users', () => {

    const { showAlert } = useAlert()

    const users = ref<PaginationContent<User> | null>(null)
    const userInfo = ref<UserInfo | null>(null) 
    const userLookUp = ref<User | null>(null)
    const roleType = ref<RoleType>(0)
    const errorsUserLookUp = reactive<UserLookUpError>({
        type: 'default',
        message: ''
    })
    
    /**
     * The function fetches users either from a mock API or a real API based on a condition and returns
     * the fetched users.
     * @param [page=1] - The `page` parameter in the `fetchUsers` function is used to specify the page
     * number of users to fetch. By default, it is set to 1, meaning that if no page number is provided
     * when calling the function, it will fetch the users from the first page. If a different
     * @returns The `fetchUsers` function is returning the `users.value` after fetching and setting the
     * user data.
     */
    const fetchUsers = async(page = 1, filters: UserFilters = {}) => {
        try {

            const response = await fetchUsersDataSource(filters)

            users.value = response.data
            return users.value

        } catch (error) {
            console.error(error)
        }
    }

    /**
     * The function fetchUserInfo asynchronously fetches user information using a provided UUID.
     * @param {string} uuid - The `uuid` parameter in the `fetchUserInfo` function is a string
     * representing a unique identifier for a user. This identifier is used to fetch user information
     * from a data source.
     * @returns The `userInfo.value` is being returned from the `fetchUserInfo` function.
     */
    const fetchUserInfo = async(uuid: string) => {
        try {

            const response = await fetchUserInfoDataSource(uuid)

            userInfo.value = response.data
            
            return userInfo.value
            
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * The function fetchUserLookUp asynchronously fetches user data based on specified filters and
     * updates the userLookUp value accordingly.
     * @param {UserFilters} filters - The `filters` parameter in the `fetchUserLookUp` function likely
     * contains criteria or conditions that will be used to filter the users when fetching them. These
     * filters could include things like user IDs, usernames, email addresses, or any other attributes
     * that can be used to narrow down the search for a
     */
    const fetchUserLookUp = async(filters: UserFilters) => {
        try {

            const response = await fetchUsers(1, filters) 
            
            userLookUp.value = response?.data?.[0] ?? null

            errorsUserLookUp.type = response?.data?.[0] ? 'found' : 'not-found'
            errorsUserLookUp.message = response?.data?.[0] ? 'Resultados de tu busqueda' : 'No se encontraron resultados'
            
        } catch (error) {
            console.error(error)
            userLookUp.value = null
        }
    }

    /**
     * The `create` function asynchronously creates a user using the provided payload and displays a
     * success or error alert message accordingly.
     * @param {CreateUserPayload} payload - The `payload` parameter in the `create` function is of type
     * `CreateUserPayload`. It likely contains the data needed to create a new user, such as the user's
     * name, email, password, etc. This payload is passed to the `createUserDataSource` function to
     * actually create the
     */
    const create = async(payload: CreateUserPayload) => {
        try {
            
            await createUserDataSource(payload)
            showAlert('Éxito', 'Usuario creado con éxito', 'success');

        } catch (error) {
            console.error(error)
            showAlert('Error', 'Hubo un error al crear el usuario', 'error');
        }
    }

    /**
     * The function `update` asynchronously updates a user's information and displays a success or
     * error alert message accordingly.
     * @param {string} uuid - The `uuid` parameter is a unique identifier for the user that you want to
     * update. It is typically a string that uniquely identifies a specific user in your system.
     * @param {UpdateUserPayload} payload - The `payload` parameter in the `update` function likely
     * contains the data that needs to be updated for a user. It could include fields such as name,
     * email, address, or any other information related to the user that needs to be updated in the
     * data source. This data is passed to the
     */
    const update = async(uuid: string, payload: UpdateUserPayload) => {
        try {

            await updateUserDataSource(uuid, payload)

            showAlert('Éxito', 'Usuario actualizado con éxito', 'success')
            
        } catch (error) {
            showAlert('Error', 'Hubo un error al actualizar la información', 'error')
            console.error(error)
            throw error
        }
    }

    /**
     * The function `deleteUser` asynchronously deletes a user by their UUID, either through a fetch
     * request to an API or by filtering the local data, and displays a success or error message
     * accordingly.
     * @param {User} user - The `user` parameter in the `deleteUser` function is an object of type
     * `User` that contains information about the user to be deleted. It likely includes properties
     * such as `uuid` which is used to identify the specific user to be deleted.
     */
    const deleteUser = async(user: UserDelete) => {
        try {

            const { uuid } = user

            await deleteUserDataSource(uuid)            
            await navigateTo('/kg-admin/users')

            setTimeout(() => {
                showAlert('Éxito', 'Usuario eliminado con éxito', 'success')
            }, 1000);
            
        } catch (error) {
            console.error(error)
            showAlert('Error', 'Error al eliminar usuario', 'error')
        }
    }

    /* The `filteredUsers` constant is using the `computed` function to create a reactive computed
    property based on the values of `users` and `roleType`. Here's a breakdown of what it's doing: */
    const filteredUsers = computed(() => {
        if(!users.value) return null

        if(roleType.value === 0) {
            return users.value
        }

        return {
            ...users.value,
            data: users.value.data.filter(
                role => role.role_id === roleType.value
            )
        }
    })

    return {
        users,
        userInfo,
        userLookUp,
        roleType,
        errorsUserLookUp,
        fetchUsers,
        fetchUserInfo,
        fetchUserLookUp,
        create,
        update,
        deleteUser,
        filteredUsers
    }
})

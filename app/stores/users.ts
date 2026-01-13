import type { ApiResponse } from "#imports"
import type { 
    User, 
    UserProfileData, 
    UserFilters, 
    UserInfo,
    UserDelete 
} from "~~/shared/types/User"
import { MOCK_USER_AUTH_PROFILE_DATA } from "~/utils/mocks/user-auth.mock"
import type { PaginationContent } from "#imports"
import { useAlert } from "#imports"
import { 
    fetchUserInfoDataSource, 
    fetchUsersDataSource 
} from "~/data/users/users.datasource"

export const useUserStore = defineStore('users', () => {

    const config = useRuntimeConfig()
    const IS_MOCK_API_MODE = config.public.mockApiMode
    const { showAlert } = useAlert()

    const users = ref<PaginationContent<User> | null>(null)
    const userInfo = ref<UserInfo | null>(null) 
    const userProfile = ref<UserProfileData | null>(null)
    
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
     * The function `fetchUserProfileData` retrieves user profile data either from a mock API or a real
     * API endpoint.
     * @returns The `fetchUserProfileData` function is returning the user profile data stored in the
     * `user.value` variable. This data is either fetched from a mock API if `IS_MOCK_API_MODE` is
     * true, or from a real API endpoint if `IS_MOCK_API_MODE` is false. The function returns the user
     * profile data after it has been fetched and stored in the `user.value` variable
     */
    const fetchUserProfileData = async() => {
        try {

            if(IS_MOCK_API_MODE) {

                userProfile.value = MOCK_USER_AUTH_PROFILE_DATA.data

            } else {

                const response = await $fetch<ApiResponse<UserProfileData>>(
                    `${config.public.apiBaseUrl}/profile`
                )

                userProfile.value = response.data
            }

            return userProfile.value

        } catch(error) {
            console.error('Error getting user profile data')
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

            if(!IS_MOCK_API_MODE) {

                await $fetch<User>(`${config.public.apiBaseUrl}/users/${uuid}`, {
                        method: 'DELETE'
                })
            } 

            if(users.value) {
                users.value.data = users.value.data.filter(usr => usr.uuid !== uuid)
            }

            showAlert('Éxito', 'Usuario eliminado con éxito', 'success')
            
        } catch (error) {
            console.error(error)
            showAlert('Error', 'Error al eliminar usuario', 'error')
        }
    }

    return {
        users,
        userInfo,
        userProfile,
        fetchUsers,
        fetchUserInfo,
        fetchUserProfileData,
        deleteUser
    }
})

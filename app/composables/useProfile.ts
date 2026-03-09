import type { UserProfilePayload } from "~~/shared/types/User"
import { useMedia } from "#imports"
import { 
    fetchUserProfileDataSource,
    updateProfileDataSource 
} from "~/data/profile/profile.datasource"
import { useAlert } from "#imports"

export function useProfile () {

    const { uploadMedia } = useMedia()
    const { showAlert } = useAlert()

    const fetchUserProfileData = async() => {
        return await fetchUserProfileDataSource()
    }

    const updateProfile = async(payload: UserProfilePayload) => {
        try {
            await updateProfileDataSource(payload)
            showAlert('Éxito', 'Datos actualizados con éxito', 'success')
        } catch (error) {
            showAlert('Error', 'Hubo un error al actualizar los datos', 'error')
            console.error(error)
            throw error
        }
    }

    const uploadAvatar = async(file: File) => {
        if(!file) return

        const uploaded = await uploadMedia([file])
        
        if (!uploaded || !uploaded.data[0]) return

        return await updateProfile({
            profile_image: [uploaded.data[0].id]
        })
    }

    return {
        fetchUserProfileData,
        updateProfile,
        uploadAvatar
    }
}
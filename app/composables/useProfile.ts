import type { UserProfilePayload } from "~~/shared/types/User"
import { useMedia } from "#imports"
import { 
    fetchUserProfileDataSource,
    updateProfileDataSource 
} from "~/data/profile/profile.datasource"

export function useProfile () {

    const { uploadMedia } = useMedia()

    const fetchUserProfileData = async() => {
        return await fetchUserProfileDataSource()
    }

    const updateProfile = async(payload: UserProfilePayload) => {
        return await updateProfileDataSource(payload)
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
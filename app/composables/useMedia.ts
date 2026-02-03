import { uploadMediaDataSource } from "~/data/media/media.datasource"

export function useMedia () {

    const uploadMedia = async(files: File[]) => {
        return await uploadMediaDataSource(files)
    }

    return {
        uploadMedia
    }
}
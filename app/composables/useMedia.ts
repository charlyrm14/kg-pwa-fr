import { 
    uploadMediaDataSource, 
    deleteMediaDataSource 
} from "~/data/media/media.datasource"


export function useMedia () {

    const uploadMedia = async(files: File[]) => {
        return await uploadMediaDataSource(files)
    }

    const deleteMedia = async(mediaId: number) => {
        return await deleteMediaDataSource(mediaId)
    }

    return {
        uploadMedia,
        deleteMedia
    }
}
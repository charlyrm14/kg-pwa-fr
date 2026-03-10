import { addHobbiesDataSource, fetchHobbiesDataSource } from "~/data/hobbies/hobbies.datasource";
import { useAlert } from "#imports";

export function useHobby () {

    const { showAlert } = useAlert()

    const fetchHobbies = async() => {
        try {
            return await fetchHobbiesDataSource()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    const addHobbies = async(hobbies: Array<number>) => {
        try {
            await addHobbiesDataSource(hobbies)
            showAlert('Éxito', 'Hobbies agregados con éxito', 'success')
        } catch (error) {
            showAlert('Error', 'Hubo un error al agregar tus hobbies', 'error')
            console.error(error)
        }
    }

    return {
        fetchHobbies,
        addHobbies
    }
}

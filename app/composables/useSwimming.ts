import { fetchSwimCategoriesDataSource } from "~/data/swimming/swimming.datasource";

export function useSwimming () {

    const fetchSwimCategories = async() => {
        try {
            return await fetchSwimCategoriesDataSource()
        } catch (error) {
            console.error(error)
        }
    }

    return {
        fetchSwimCategories
    }
}
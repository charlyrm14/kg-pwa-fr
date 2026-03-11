import { fetchHomeOverviewDataSource } from "~/data/home/home.datasource"

export function useHomeOverview () {

    const fetchHomeOverview = async() => {
        try {
            return await fetchHomeOverviewDataSource()
        } catch (error) {
            console.error(error)
        }
    }

    return {
        fetchHomeOverview
    }
}
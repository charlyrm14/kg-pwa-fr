import { fetchUserScheduleDataSource } from "~/data/schedule/schedule.datasource";

export function useSchedule () {

    const fetchUserSchedule = async() => {
        try {
            return await fetchUserScheduleDataSource()
        } catch (error) {
            console.error('Error to get user schedule')
        }
    }

    return {
        fetchUserSchedule
    }
}
import { fetchUsersBirthdayDataSource } from "~/data/birthdays/birthdays.datasource";

export function useUserBirthday() {

    const fetchUsersBirthday = async() => {
        try {
            return await fetchUsersBirthdayDataSource()
        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetchUsersBirthday
    }
}
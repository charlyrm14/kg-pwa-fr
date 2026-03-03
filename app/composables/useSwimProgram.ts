import { fetchSwimProgramDataSource } from "~/data/swim-program/swim-program-datasource"

export function useSwimProgram () {

    const fetchSwimProgram = async() => {
        return await fetchSwimProgramDataSource()
    }

    return {
        fetchSwimProgram
    }
}
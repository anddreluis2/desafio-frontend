import { api } from "./api"

export async function getCharacter(params) {
    if (params === undefined) {
        const response = await api.get(`character/`)
        return response.data.results.slice(0, 5)
    } else {
        const response = await api.get(`character/${params}`)
        return response.data
    }
}
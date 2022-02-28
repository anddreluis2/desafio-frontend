import { api } from "./api"

export async function getCharacter() {
    const response = await api.get("character")
    return response.data.results.slice(0, 5)
}
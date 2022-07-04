import { pokeAPI } from "../api"
import { Pokemon } from "../types"

export const getPokemonInfo = async (nameOrId: string) => {
    
    const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${nameOrId}`)
  
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }
}

import { useState, useEffect } from "react"
import { Layout } from "../../components/layouts"
import {NoFavorite} from "../../components/ui"
import { FavoritePokemon } from "../../components/ui"
import { localFavorites } from "../../utils"

const FavoritePage = () => {
  const [favoritePokemon, setfavoritePokemon] = useState<number[]>([])
console.log(favoritePokemon);

  useEffect(() => {
 setfavoritePokemon(localFavorites.pokemons())

  },[])

  return (
    <Layout title="Pokemon - Favorite">
   
     {
      favoritePokemon.length === 0 ? (  <NoFavorite/>) : (
       
         <FavoritePokemon pokemons={favoritePokemon}/>
      
      )
     }
    </Layout>
  )
}

export default FavoritePage
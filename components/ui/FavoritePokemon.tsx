import { FC } from "react"
import { Card, Grid } from "@nextui-org/react"
import { FavoritePokemonCard } from "./FavoritePokemonCard"

interface Props {
    pokemons: number[]
}

export const FavoritePokemon:FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
        {
            pokemons.map((id) => (
               <FavoritePokemonCard key={id} pokeId={id}/>
            ))
        }
        </Grid.Container>

    )
}

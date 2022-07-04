import { FC } from "react"
import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"

interface Props {
    pokeId: number
}

export const FavoritePokemonCard:FC<Props> = ({pokeId}) => {
    const router = useRouter()

    const onFavoriteClick = () => {
        router.push(`/pokemon/${pokeId}`)
    }
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokeId}>
            <Card onClick={onFavoriteClick} clickable hoverable css={{ padding: 10 }}>
                <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`} width={'100%'} height={140} />
            </Card>
        </Grid>
    )
}

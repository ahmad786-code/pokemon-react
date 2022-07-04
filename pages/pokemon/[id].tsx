import {useState} from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { Layout } from '../../components/layouts'
import confetti from 'canvas-confetti'
import { Pokemon } from '../../types'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import {localFavorites, existFave, getPokemonInfo} from '../../utils'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
const [isinFav, setIsInFav] = useState(localFavorites.existFave(pokemon.id))

const toggleHandleFav = () => {
localFavorites.toggleFave(pokemon.id)
setIsInFav(!isinFav)

if(!isinFav) return

confetti({
  zIndex: 999,
  particleCount: 100,
  spread: 150,
  angle: -150,
  origin: {
    x: 1,
    y: 0
  }
})

}

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default  || '/no-image.png'} width="100%" height={200} />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text transform='capitalize' h1>{pokemon.name}</Text>
              <Button onClick={toggleHandleFav} color='gradient' ghost={!isinFav}>
             { isinFav ? 'Favorite' : 'Save Favorite' }
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites: </Text>

              <Container direction='row' display='flex' gap={0}>
                <Image src={pokemon.sprites.front_default} width={100} height={100} alt={pokemon.name}/>
                <Image src={pokemon.sprites.back_default} width={100} height={100} alt={pokemon.name}/>
                <Image src={pokemon.sprites.front_shiny} width={100} height={100} alt={pokemon.name}/>
                <Image src={pokemon.sprites.back_shiny} width={100} height={100} alt={pokemon.name}/>
              </Container>
            </Card.Body>
          </Card>
        </Grid>

      </Grid.Container>
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`)
 

  return {
    paths: pokemon151.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: any }

 

  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}

export default PokemonPage
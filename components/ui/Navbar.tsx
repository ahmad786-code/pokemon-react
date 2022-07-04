import Image from 'next/image'
import NextLink from 'next/link'
import { Spacer, Text, useTheme, Link } from '@nextui-org/react'

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      background: theme?.colors.black.value,
      alignItems: 'center',
      padding: '0 50px',
      justifyContent: 'start'

    }}>

      <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png' width={70} height={70} />

      <NextLink href="/" passHref>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>

      </NextLink>

      <Spacer css={{ flex: '1' }} />

      <NextLink href="/favorite"  passHref>
        <Link css={{marginRight: '10px'}}>
        <Text>Favorite</Text>
        </Link>
      </NextLink>
    </div>
  )
}


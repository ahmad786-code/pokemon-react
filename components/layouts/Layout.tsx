import { FC } from "react"
import Head from "next/head"
import {Navbar} from "../ui/Navbar"


interface Props {
    title: string,
    children?: any
}

export const Layout:FC<Props> = ({title ,children}) => {


  return (
    <>
    <Head>
        <title> { title || 'Pokemon App'}</title>
        <meta name="Author" content="Ahmad Raza"/>
        <meta name="description" content="Information about pokemon"/>
        <meta name="keywords" content="XXXXX, pokemon, pokedex" />
    </Head>

    <Navbar/>

    <main style={{padding: '0px 20px'}}>
        {children}
    </main>
    </>
  )
}


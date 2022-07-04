
const toggleFave = (id: number) => {
    console.log('toggleFavorite');
    let favorites: number[] = JSON.parse(localStorage.getItem('favorite') || '[]')

    if(favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id )
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorite', JSON.stringify(favorites))
 }

 const existFave = (id: number) => {
    if(typeof window === 'undefined' ) return false
    let favorites: number[] = JSON.parse(localStorage.getItem('favorite') || '[]')
    return favorites.includes(id)
 }

 const pokemons = (): number[] => {
    return JSON.parse( localStorage.getItem('favorite') || '[]')
 }

 export default {
    toggleFave,
    existFave,
    pokemons
 }
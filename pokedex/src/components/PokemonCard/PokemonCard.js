import { useNavigate } from "react-router-dom"
import { BoxButton, CardContent, PokemonImg} from "./styled"
import { goToPokemonDetail } from "../../routes/coordinator"
import React, { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"

const PokemonCard = ({pokemon, isPokedex}) => {

    const navigate = useNavigate()

    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const addToPokedex = () => {
        const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)

        const newPokemonsList = [...pokemons]
        newPokemonsList.splice(pokeIndex, 1)

        const newPokedexList = [...pokedex, pokemon]

        const orderedPokedex = newPokedexList.sort((a,b) => a.id - b.id)

        setPokedex(orderedPokedex)
        setPokemons(newPokemonsList)
    }

    const removeToPokedex = () => {
        const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)

        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex, 1)

        const newPokemonsList = [...pokemons, pokemon]

        const orderedPokemonsList = newPokemonsList.sort((a,b) => a.id - b.id)

        setPokedex(newPokedexList)
        setPokemons(orderedPokemonsList)
    }

    return (
        <CardContent>
            <h2>{pokemon.name}</h2>
            <PokemonImg src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            <BoxButton>
                <button onClick={() => isPokedex ? goToPokemonDetail(navigate, pokedex.name) : goToPokemonDetail(navigate, pokemon.name) }>Detalhes</button>
                <button onClick={isPokedex ? removeToPokedex : addToPokedex}>
                    {isPokedex ? "Remover da Pokedex" : "Adicionar a Pokedex"}
                </button>
            </BoxButton>
        </CardContent>
    )
}

export default PokemonCard
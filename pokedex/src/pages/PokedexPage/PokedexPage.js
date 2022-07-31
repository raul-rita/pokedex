import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import { goToPokemonsList } from "../../routes/coordinator"


const PokedexPage = () => {

    const navigate = useNavigate()

    const {pokedex} = useContext(GlobalStateContext)

    return (
        <div>
            <Header title={"Pokedex"} ButtonFunction={() => goToPokemonsList(navigate)} />
            {
                pokedex && pokedex.map((poke) => {
                    return <PokemonCard isPokedex key={poke.name} pokemon={poke} />
                })
            }
        </div>
    )
}

export default PokedexPage
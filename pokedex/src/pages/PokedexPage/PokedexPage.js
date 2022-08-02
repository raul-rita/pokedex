import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import { goToPokemonsList } from "../../routes/coordinator"
import { ContainerPage, PageContent } from "./styled"


const PokedexPage = () => {

    const navigate = useNavigate()

    const {pokedex} = useContext(GlobalStateContext)

    return (
        <ContainerPage>
            <Header title={"Pokedex"} ButtonFunction={() => goToPokemonsList(navigate)} />
            <h1>Pokedex</h1>
            <PageContent>
                {
                    pokedex && pokedex.map((poke) => {
                        return <PokemonCard isPokedex key={poke.name} pokemon={poke} />
                    })
                }
            </PageContent>            
        </ContainerPage>
    )
}

export default PokedexPage
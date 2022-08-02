import { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { ContainerPage, PageContent } from "./styled";
import { useNavigate } from "react-router-dom"
import { goToPokedex } from "../../routes/coordinator";

const PokemonsListPage = () => {

    const { pokemons } = useContext(GlobalStateContext)

    const navigate = useNavigate()

    return (
        <ContainerPage>
            <Header title={"Lista de Pokemons"} ButtonFunction={() => goToPokedex(navigate)} />

            <h1>Lista de Pokemons</h1>
            
            <PageContent>
                {
                    pokemons.map((poke) => {
                        return <PokemonCard key={poke.name} pokemon={poke} />
                    })
                }
            </PageContent>
        </ContainerPage>

    )
}

export default PokemonsListPage
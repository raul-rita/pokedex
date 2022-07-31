import { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PageContent } from "./styled";
import { useNavigate } from "react-router-dom"
import { goToPokedex } from "../../routes/coordinator";

const PokemonsListPage = () => {

    const { pokemons } = useContext(GlobalStateContext)

    const navigate = useNavigate()

    return (
        <div>
            <Header title={"Lista de Pokemons"} ButtonFunction={() => goToPokedex(navigate)} />

            <PageContent>
                {
                    pokemons.map((poke) => {
                        return <PokemonCard key={poke.name} pokemon={poke} />
                    })
                }
            </PageContent>
        </div>

    )
}

export default PokemonsListPage
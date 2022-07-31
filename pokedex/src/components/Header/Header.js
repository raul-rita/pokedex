import { HeaderContent } from "./styled"

const Header = ({title, ButtonFunction}) => {

    const ButtonTitle = () => {
        switch (title) {
            case "Lista de Pokemons":
                return "Ir para Pokedex";
            case "Pokedex":
                return "Ir para Lista";
            default:
                return "Voltar para Lista"
        }
    }

    return (
        <HeaderContent>
            <button onClick={ButtonFunction}>{ButtonTitle()}</button>
            <h1>{title}</h1>
        </HeaderContent>
    )
}

export default Header
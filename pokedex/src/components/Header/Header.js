import { HeaderContent } from "./styled"
import logo from "../../images/logo.png"
import { useNavigate } from "react-router-dom"

const Header = ({title, ButtonFunction}) => {

    const navigate = useNavigate()

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
            <button onClick={() => navigate(-1)}>Voltar</button>
            <img src={logo} alt={"logo do pokemon"} />
            <button onClick={ButtonFunction}>{ButtonTitle()}</button>
        </HeaderContent>
    )
}

export default Header
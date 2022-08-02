import React, { useContext, useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"
import { AttackCard, Box, BoxDetails, BoxNameType, ContainerPage, PageContent, PowerCard, StatsBox, TypeContent } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToPokemonsList } from "../../routes/coordinator"

const PokemonDetailPage = () => {

    const { name } = useParams()
    const { pokemons } = useContext(GlobalStateContext)

    const navigate = useNavigate()

    const [selectedPokemon, setSelectedPokemon] = useState({})

    useEffect(() => {
        const findPokemon = pokemons.find((item) => {
            return item.name === name
        })
        setSelectedPokemon(findPokemon)
    }, [pokemons, name])

    return (
        <ContainerPage>
            <Header title={"Detalhes do Pokemon"} ButtonFunction={() => goToPokemonsList(navigate)} />
            <PageContent>
                <BoxDetails>
                        <img 
                            src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.other.dream_world.front_default} 
                            alt={selectedPokemon.name} 
                        />                   
                    <StatsBox>
                        <BoxNameType>
                            <h1>{selectedPokemon.name}</h1>
                            <TypeContent>
                                <h3>Tipo:</h3>
                                {selectedPokemon && selectedPokemon.types &&
                                    selectedPokemon.types.map((type) => {
                                        return <p key={type.type.name}>{type.type.name}</p>
                                    })
                                }
                            </TypeContent>
                        </BoxNameType>
                        
                        <Box>
                            <PowerCard>
                                <h3>Poderes</h3>
                                {selectedPokemon && selectedPokemon.stats &&

                                    selectedPokemon.stats.map((stat) => {
                                        return (
                                            <p key={stat.stat.name}>
                                                <strong>{stat.stat.name}:</strong> {stat.base_stat}
                                            </p>
                                        )
                                    })
                                }
                            </PowerCard>
                            
                            <AttackCard>
                                <h3>Principais ataques</h3>
                                {selectedPokemon && selectedPokemon.moves &&
                                    selectedPokemon.moves.map((move, index) => {
                                        return (
                                            index < 5 && <p key={move.move.name}>{move.move.name}</p>
                                        )
                                    })
                                }
                            </AttackCard>
                        </Box>
                    </StatsBox>
                </BoxDetails>
            </PageContent>
        </ContainerPage>
    )
}

export default PokemonDetailPage
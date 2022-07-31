import axios from "axios"
import React, { useEffect, useState } from "react"
import { base_url } from "../constants/urls"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {

    const [pokemonsNames, setPokemonsNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    
    useEffect(() => {
        getPokemonsNames()
    }, []) 
    
    useEffect(() => {
        const newList = []
        
        pokemonsNames.forEach((item) => {
            axios.get(item.url)
            .then((res) => {
                newList.push(res.data)
                if(newList.length === 20) {
                    const orderedList = newList.sort((a,b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderedList)
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
        })

    }, [pokemonsNames]) 

    const getPokemonsNames = () => {
        axios.get(`${base_url}/pokemon`)
        .then((res) => {
            setPokemonsNames(res.data.results)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
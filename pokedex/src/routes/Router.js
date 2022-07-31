import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
import PokemonsListPage from "../pages/PokemonsListPage/PokemonsListPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PokemonsListPage/>} />
                <Route exact path="/pokemon/:name" element={<PokemonDetailPage/>} />
                <Route exact path="/pokedex" element={<PokedexPage/>} />
                <Route exact path="*" element={<PokedexPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
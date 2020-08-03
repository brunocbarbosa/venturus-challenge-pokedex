import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import PokemonList from './pages/PokemonList';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route component={PokemonList} path="/" exact />
        </BrowserRouter>
    )
} 
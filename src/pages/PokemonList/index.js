import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import PageDefault from '../../components/PageDefault';
import Card from '../../components/Card';

import './style.css';

function PokemonList() {
 
  const [pokemonsData, setPokemonsData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const firstUrl = 'pokemon?limit=10&offset=0';

 useEffect(() => {
   async function data(){
    const pokemon = await getAllPokemons(firstUrl);
    await getPokemon(pokemon.data.results);
    setNextUrl(pokemon.data.next);
    setPreviousUrl(pokemon.data.previous);
   }
  data()
  },[])

  const next = async() => {
    let pokemon = await getAllPokemons(nextUrl);
    await getPokemon(pokemon.data.results);
    setNextUrl(pokemon.data.next);
    setPreviousUrl(pokemon.data.previous);
  }
  
  const previous = async() => {
    if(!previousUrl) return
    let pokemon = await getAllPokemons(previousUrl);
    await getPokemon(pokemon.data.results);
    setNextUrl(pokemon.data.next);
    setPreviousUrl(pokemon.data.previous);
  }

  const getAllPokemons = (url) => {
    return api.get(url)
  }

  const getPokemon = async(pokemons) => {
    let pokemonData = await Promise.all(pokemons.map(async pokemon => {
      let pokemonRec = await api.get(`pokemon/${pokemon.name}`)
      return pokemonRec.data;
    }))
    setPokemonsData(pokemonData);
  }
  
  return (
    <PageDefault>
      <h1 className="title">Pokemons List</h1>
        
      <div className='grid-container'>
        {
          pokemonsData.map((pokemon, i) => (
            <Card key={i} pokemon={pokemon}/>
          ))
        }
      </div>
      
      <div className="btn_preview_next">
        <button onClick={previous}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </PageDefault>
  );
   
}

export default PokemonList;
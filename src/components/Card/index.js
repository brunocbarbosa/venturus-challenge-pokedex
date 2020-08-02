import React from 'react';

import './style.css'

function Card({ pokemon }){
  return(
    <div className='card'>
      <div className='cardImg'>
       <img src={pokemon.sprites.front_default} alt=''/>
      </div>
      <div className='cardName'>
        {pokemon.name}
      </div>
    </div>
  )
}

export default Card;
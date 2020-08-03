import React, { useState } from 'react';

import './style.css';

import Modal from '../Modal'
import typeColors from '../../typeColors/typeColors'

function Card({ pokemon }){
  const [isModalVisible, setIsModalVisible] = useState(false)

  return(
    <div className='card'>
      <div className='cardImg'>
       <img src={pokemon.sprites.front_default} alt=''/>
      </div>
      <div className='cardName'>
        {pokemon.name}
      </div>
      <button className='openButton' onClick={() => setIsModalVisible(true)}>Open</button>
      {isModalVisible ? (
        <Modal  onClose={() => setIsModalVisible(false)}>
          <img src={pokemon.sprites.front_default} alt='' />
          <div className="cardTypes">
          {
            pokemon.types.map(type => (
              <div className="cardType"  key={type.slot} style={{backgroundColor: typeColors[type.type.name]}}>{type.type.name}</div>
            ))
          }
          </div>
          <p><b>name</b>: {pokemon.name} </p>
          <p><b>height</b>: {pokemon.height}</p>
          {
            pokemon.stats.map(stats => (
              (stats.stat.name !== 'special-attack' && stats.stat.name !== 'special-defense')  ?
                <p key={stats.stat.name}><b>{stats.stat.name}</b> : {stats.base_stat}</p> 
                : null
            ))
          }
        </Modal> 
      ): null}
    </div>
  )
}

export default Card;
import React from 'react';

import './style.css'

function Header(){
  return(
    <header>
      <img className='logo' src="https://fontmeme.com/permalink/200520/a6dd59a6e8f4e7c50fcde7db78bab361.png" alt="Pokedex"/>

      <button className='ButtonLink'>
        Favoritos
      </button>
    </header>
  )
}

export default Header;
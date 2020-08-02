import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import './style.css'

function PageDefault({children}){
  return(
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PageDefault
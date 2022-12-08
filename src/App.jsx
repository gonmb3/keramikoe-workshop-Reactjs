import React from 'react'
import ImgBGsection from './components/ImgBGsection'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Galeria from './components/Galeria'
import Header from './components/Header'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Taller from './components/Taller'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Nosotros/>
      <ImgBGsection/> 
      <Taller/>
      <Galeria/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App
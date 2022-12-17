import React from 'react'
import ImgBGsection from './components/ImgBGsection'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'
import Galeria from './pages/Galeria'
import Header from './components/Header'
import Hero from './components/Hero'
import Nosotros from './pages/Nosotros'
import Taller from './pages/Taller'

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
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImagen from '../components/HeroImagen.'
import MercadoCards from '../components/Mercado'


const Mercado = () => {
  return (
    <div>
        <Navbar/>
        <HeroImagen heading='PRECIO' text='Elige que plan te conviene.'/>
        <br />
        <br />
        <MercadoCards />
        <Footer/>
    </div>
  )
}

export default Mercado
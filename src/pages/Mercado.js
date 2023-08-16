import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImagen from '../components/HeroImagen.'
import MercadoCards from '../components/Mercado'


const Mercado = () => {
  return (
    <div>
        <Navbar/>
        <br /><br />
        <HeroImagen heading='INMUEBLES' text='Variedad de inmuebles a un Click de distancia.'/>
        <br />
        <br />
        <MercadoCards />
        <Footer/>
    </div>
  )
}

export default Mercado
import React from 'react'
import Navbar from '../components/Navbar'
import HeroImagen from '../components/HeroImagen.'
import Footer from '../components/Footer'
import NosotrosSection from '../components/Nosotros'

const Nosotros = () => {
  return (
    <div>
        <Navbar />
        <HeroImagen heading='NOSOTROS' text='MultiHogar cumple tu espectativas.' />
        <NosotrosSection />
        
        <Footer />
    </div>
  )
}

export default Nosotros
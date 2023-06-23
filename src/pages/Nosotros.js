import React from 'react'
import Navbar from '../components/Navbar'
import HeroImagen from '../components/HeroImagen.'
import Footer from '../components/Footer'
import NosotrosSection from '../components/Nosotros'
import ImageCarousel from '../components/ImageCarousel'


const Nosotros = () => {
  return (
    <div>
        <Navbar />
        <HeroImagen heading='NOSOTROS' text='MultiHogar cumple tu espectativas.' />
        <ImageCarousel/>
        <NosotrosSection />
        <Footer />
        <div>HOLA MUNDO</div>
    </div>
  )
}

export default Nosotros
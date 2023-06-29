import React from 'react'
import Navbar from '../components/Navbar'
import HeroImagen from '../components/HeroImagen.'
import Footer from '../components/Footer'
import NosotrosSection from '../components/Nosotros'
import Carousel from '../components/Carousel/Carousel'
import Accordion from '../components/Accordion/Accordion'




const Nosotros = () => {
  return (
    <div>
        <Navbar />
        <HeroImagen heading='NOSOTROS' text='MultiHogar cumple tu espectativas.' />
        <Accordion/>
        <NosotrosSection />
        <Carousel/>
        <Footer />
        <div>HOLA MUNDO</div>
    </div>
  )
}

export default Nosotros
import React from 'react'
import Navbar from '../components/Navbar'
import HeroImagen from '../components/HeroImagen.'
import Footer from '../components/Footer'
import  Form  from '../components/Form'

const Register = () => {
  return (
    <div>
        <Navbar />
        <HeroImagen heading='REGISTRO.' text='Registrate y encuentra las mejores ofertas'/>
        <br />
        <Form />
        <Footer />
    </div>
  )
}

export default Register
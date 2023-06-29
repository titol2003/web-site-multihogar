import React from 'react'
import './Nosotros.css'


import { Link } from 'react-router-dom'

import Pod from '../assets/ImagesHome/homii.jpg'
import Pad from '../assets/ImagesHome/salii.jpg'



const Nosotros = () => {
  return (
    <div className='nosotros'>
        
        <div className='left'>
            <h1>Nosotros</h1>
            <p>¡Únete a nuestro equipo y descubre una oportunidad única para publicar inmuebles. Te ofrecemos la plataforma perfecta para mostrar tu experiencia y convertirte en un destacado agente inmobiliario.</p>
            <Link to='/registro'><button className='btn-un'>UNETE A NUESTRO EQUIPO</button></Link>
        </div>
        
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Pod} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Pad} className='img' alt='' />
                </div>
            </div>  
        </div>
        
    </div>
    
  )
}

export default Nosotros
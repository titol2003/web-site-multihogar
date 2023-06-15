import React from 'react'
import './Nosotros.css'

import { Link } from 'react-router-dom'

import Pod from '../assets/homii.jpg'
import Pad from '../assets/salii.jpg'

const Nosotros = () => {
  return (
    <div className='nosotros'>
        <div className='left'>
            <h1>Nosotros</h1>
            <p>Consigue la casa de tus sueños!</p>
            <Link to='/registro'><button className='btn'>REGISTRARSE</button></Link>
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
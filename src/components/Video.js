import React from 'react'
import './Video.css'
import { Link } from 'react-router-dom'

import spaceVideo from '../assets/ImagesHome/space4.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4' />
        </video>
        <div className="content">
            <h1>Multi Hogar MH</h1>
            <p>Tu vivienda a un Click de distancia!</p>
            <div>
                <Link to='/registro' className='btn btn-light'>Registrarse</Link>
            </div>
        </div> 
    </div>
  )
}

export default Video
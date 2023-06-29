import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#fffff', marginRight:'2rem' }} />313-780-6011</h4>
                </div>
                <div className='email'>
                    <h4>MultiHogar_1A@gmail.com</h4>
                    <div className='social'>
                        <FaMailBulk size={20} style={{color: '#ffffff', marginLeft:'2rem' }} />
                        <FaFacebook size={30} style={{color: '#ffffff', marginLeft:'1rem' }}/>
                        <FaTwitter size={30} style={{color: '#ffffff', marginLeft:'1rem' }}/>
                        <FaLinkedin size={30} style={{color: '#ffffff', marginLeft:'1rem' }}/>
                    </div>
                    <br />
                    <Link to='/registro'><button className='btn-un'>UNETE A NUESTRO EQUIPO</button></Link>
                </div>
                
            </div>

        <div className='right'>
            <h4>Acerca de Nosotros</h4>
            <p>Somos la inmobiliaria universal, tu sueñas y nosotros te cumplimos el sueño!</p>
              
        </div> 
           
        </div>
    </div>
  )
}

export default Footer
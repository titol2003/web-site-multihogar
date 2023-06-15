import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight:'2rem' }}/>
                    <div>
                        <p>123 Fusagasugá</p>
                        <h4>Colombia</h4>
                    </div>                    
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#fffff', marginRight:'2rem' }} />313-780-6011</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#fffff', marginRight:'2rem' }} />titolospina@gmail.com</h4>
                </div>
            </div>

        <div className='right'>
            <h4>Acerca de Nosotros</h4>
            <p>Somos la inmobiliaria universal, tu sueñas y nosotros te cumplimos el sueño!</p>
            <div className='social'>
                <FaFacebook size={30} style={{color: '#ffffff', marginRight:'1rem' }}/>
                <FaTwitter size={30} style={{color: '#ffffff', marginRight:'1rem' }}/>
                <FaLinkedin size={30} style={{color: '#ffffff', marginRight:'1rem' }}/>
            </div>
        </div>    
        </div>
    </div>
  )
}

export default Footer
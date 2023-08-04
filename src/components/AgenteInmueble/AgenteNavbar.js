import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './AgenteNavbar.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)



  return (
    <div className='header'>
        <Link to='/'><h1>Multi Hogar </h1></Link>
        <div>
            <picture>
            
            </picture>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/precioAgente'>INMUEBLES</Link>
            </li>
            <li>
                <Link to='/publicar'>PUBLICAR</Link>
            </li>
            <li>
                <Link to='/nosotros'>AGENTES</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}

            
        </div>
    </div>
  )
}

export default Navbar
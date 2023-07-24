import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)



    return (
        <div className='header'>
            <Link to='/'><h1>Multi Hogar </h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>INICIO</Link>
                </li>
                <li>
                    <Link to='/precio'>MERCADO</Link>
                </li>
                <li>
                    <Link to='/nosotros'>NOSOTROS</Link>
                </li>
                <li>
                    <Link to='/registro'>REGISTRARSE</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}


            </div>
        </div>
    )
}

export default Navbar
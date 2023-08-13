import React, {useState ,useContext} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import {  AuthContext } from "../context/AuthContext.js";

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const { token, logout } = useContext(AuthContext);



return (
    <div className='header'>
        <Link to='/'><h1>Multi Hogar </h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to={token?'/precioAgente':'/precio'}>INMUEBLES</Link>
            </li>
            <li>
                <Link to='/nosotros'>NOSOTROS</Link>
            </li>
            
            {
               token && <li><Link to='/publicar'>PUBLICAR</Link></li>
            }
           
            {
               !token && <li><Link to='/registro'>REGISTRARSE</Link></li>
            }
            {
               token && <li><Link to='/agentes'>AGENTES</Link></li>
            }
            { token&&<li ><Link onClick={()=> logout()} >Cerrar Sesión</Link></li>}
            {
                !token&&
                <li>
                <Link to='/login'>INICIAR SESIÓN</Link>
                </li>
            }
            
            
        </ul>
        <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}

            
        </div>
    </div>
)
}

export default Navbar
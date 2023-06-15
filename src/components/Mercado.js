import React from 'react'
import './Mercado.css'
import { Link } from 'react-router-dom'


const Mercado = () => {
  return (
    <div className='precio'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basico -</h3>
                <span className='bar'></span>
                <p className='btc'>Free</p>
                <p>- 1 Mes Gratis -</p>
                <p>- Publicaciones: 1 -</p>
                <p>- Imagen: Calidad baja -</p>
                <Link to='/contact' className='btn'>Paquete Gratis</Link>
            </div>
            <div className='card'>
                <h3>- Intermedio -</h3>
                <span className='bar'></span>
                <p className='btc'>10 USD</p>
                <p>- 6 Meses -</p>
                <p>- Publicaciones: 250 -</p>
                <p>- Imagen: Calidad intermedia -</p>
                <Link to='/contact' className='btn'>Paquete Intermedio</Link>
            </div>
            <div className='card'>
                <h3>- Full -</h3>
                <span className='bar'></span>
                <p className='btc'>50 USD</p>
                <p>- 1 Año -</p>
                <p>- Publicaciones: 500 -</p>
                <p>- Imagen: Resolución alta -</p>
                <Link to='/contact' className='btn'>Paquete Todo Incluido</Link>
            </div>
        </div>
    </div>
  )
}

export default Mercado
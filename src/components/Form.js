import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Nombre</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Telefono</label>
            <input type="text"></input>
            <label>Detalles</label>
            <textarea rows='6' placeholder='Mensaje corto aqui' />
            <button className='btn'>Enviar</button>
        </form>
    </div>
  )
}

export default Form
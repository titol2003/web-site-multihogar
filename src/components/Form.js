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
            <button className='btn'>REGISTRARSE</button>
        </form>
    </div>
  )
}

export default Form
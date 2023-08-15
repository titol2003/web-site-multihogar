import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const URI = 'http://localhost:8000/agente/'
const Form = () => {

  const [name, setName] = useState('')
  const [cedula, setCedula] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  
  const create = async (e) => {
    e.preventDefault()
    await axios.post(URI, {name: name, cedula: cedula, number: number, email: email, password: password})
    alert('Agente registrado correctamente!')
    navigate('/')
  }

  return (
    <div className='form'>
        <form onSubmit={create}>
            <label>Nombre</label>
            <input 
            type="text"
            value={name}
            onChange={ (e) =>setName(e.target.value)}
            ></input>
            <label>Cedula</label>
            <input 
            type="text"
            value={cedula}
            onChange={ (e) =>setCedula(e.target.value)}
            ></input>
            <label>Email</label>
            <input 
            type="text"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            ></input>
            <label>Telefono</label>
            <input 
            type="text"
            value={number}
            onChange={ (e) =>setNumber(e.target.value)}
            ></input>
            <label>Contraseña</label>
            <input 
            type="text"
            value={password}
            onChange={ (e) =>setPassword(e.target.value)}
            ></input>
            <button className='btn' type='submit'>REGISTRARSE</button>
        </form>
    </div>
  )
}

export default Form
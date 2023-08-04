import React from 'react'
import Agentes from '../components/Agentes/Agentes'
import AgenteNavbar from '../components/AgenteInmueble/AgenteNavbar'

const AgentesBase = () => {
  return (
    <div>
        <AgenteNavbar />
        <br />
        <br />
        <br />
        <Agentes/>
    </div>
  )
}

export default AgentesBase
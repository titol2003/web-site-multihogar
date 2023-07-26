import React from 'react'
import PublicarInmueble from '../components/PublicarInmueble/PublicarInmueble'
import AgenteNavbar from '../components/AgenteInmueble/AgenteNavbar'

const Publicar = () => {
    return (
        <div> 
            <AgenteNavbar />
            <br />
            <br />
            <PublicarInmueble />            
        </div>
    )
}

export default Publicar
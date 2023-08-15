import React, { useEffect, useState } from "react";
import "./Agentes.css";
import axios from "axios";

const URI = 'http://localhost:8000/agente/'

const Agentes = () => {

  const [agentes, setAgente] = useState([])
  useEffect( ()=>{
    getAgentes()
  }, [])

  const getAgentes = async (id) => {
    const res = await axios.get(URI)
    setAgente(res.data)
  }
 

  

  return (
    <div>
      <h1 className="text-center mt-4 pt-3 pb-3">AGENTES</h1>
      { agentes.map( (angente, index) => (
          <main key={index}>
            
            <div>
              <figure className="perfilagente">
                <img
                  src="https://img.freepik.com/iconos-gratis/usuario_318-749758.jpg"
                  width={200}
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="datos">
                  <div className="nombre">
                    <h3>{angente.name}</h3>
                  </div>
                  <div className="telefono">
                    <h3>{angente.number}</h3>
                  </div>
                  <div className="telefono">
                    <h3>{angente.email}</h3>
                  </div>
                </figcaption>
              </figure>
            </div>
          </main>
      ))   
      }
    </div>
  );
};

export default Agentes;

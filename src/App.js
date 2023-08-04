import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mercado from "./pages/Mercado";
import Nosotros from "./pages/Nosotros";
import Register from "./pages/Register";
import LoginUsuario from "./pages/Login";
import Description from "./pages/Description";
import Agente from './pages/Agente'
import AgenteDescription from "./pages/AgenteDescription";
import AgentesBase from "./pages/AgentesBase";
import Publicar from "./pages/Publicar";
import MercanciaAgente from "./pages/AgenteMercado";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/precio' element={<Mercado />} />
        <Route path='/description/:id' element={<Description />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<LoginUsuario />} />
        <Route path='/publicar' element={<Publicar />} />
        <Route path='/precioAgente' element={<MercanciaAgente />} />
        <Route path='/inmuebles/:id' element={<Agente/>} />
        <Route path='/agenteDescript' element={<AgenteDescription/>} />
        <Route path='/agentes' element={<AgentesBase/>} />
      </Routes>
    </>
  );
}

export default App;


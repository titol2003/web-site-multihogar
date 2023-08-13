import React ,{useContext} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mercado from "./pages/Mercado";
import Nosotros from "./pages/Nosotros";
import Register from "./pages/Register";
import LoginUsuario from "./pages/Login";
import InmuebleDescript from "./components/InmuebleDescript/InmuebleDescript";
import Agente from './components/AgenteInmueble/AgenteInmueble'
import AgenteDescription from "./pages/AgenteDescription";
import AgentesBase from "./pages/AgentesBase";
import Publicar from "./pages/Publicar";
import MercanciaAgente from "./pages/AgenteMercado";
import EditarInmueble from "./components/AgenteInmueble/EditInmueble";
import {  AuthContext } from "./context/AuthContext.js";



function App() {

  const { token } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path='/' element={ token ?<MercanciaAgente/>: <Home />} />
        <Route path='/precio' element={<Mercado />} />
        <Route path='/description/:id' element={<InmuebleDescript />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<LoginUsuario />} />
        <Route path='/publicar' element={<Publicar />} />
        <Route path='/editar/:id' element={ token ?<EditarInmueble />:<LoginUsuario />} />
        <Route path='/precioAgente' element={<MercanciaAgente />} />
        <Route path='/inmuebles/:id' element={<Agente/>} />
        <Route path='/agenteDescript' element={ token ?<AgenteDescription/>:<LoginUsuario />} />
        <Route path='/agentes' element={<AgentesBase/>} />
        <Route path='*' element={<h1>404 No encontrado</h1>}/>
      </Routes>
    </>
  );
}

export default App;


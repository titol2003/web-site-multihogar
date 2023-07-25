import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mercado from "./pages/Mercado";
import Nosotros from "./pages/Nosotros";
import Register from "./pages/Register";
import PublicarInmueble from "./components/PublicarInmueble/PublicarInmueble";
import Description from "./pages/Description";
import Agente from './pages/Agente'
import AgenteDescription from "./pages/AgenteDescription";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/precio' element={<Mercado />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/publicar' element={<PublicarInmueble />} />
        <Route path='/description' element={<Description />} />
        <Route path='/agente' element={<Agente/>} />
        <Route path='/agenteDescript' element={<AgenteDescription/>} />

      </Routes>
    </>
  );
}

export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mercado from "./pages/Mercado";
import Nosotros from "./pages/Nosotros";
import Register from "./pages/Register";
import LoginUsuario from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/precio' element={<Mercado />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<LoginUsuario />} />
      </Routes>
    </>
  );
}

export default App;


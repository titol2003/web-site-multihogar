import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Mercado from "./routes/Mercado";
import Nosotros from "./routes/Nosotros";
import Register from "./routes/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/precio' element={<Mercado />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/registro' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

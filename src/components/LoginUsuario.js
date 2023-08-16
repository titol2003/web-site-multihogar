import React, { useContext, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext"

const URI = 'https://render-titol-nodeback.onrender.com'

function LoginUsuario() {

  const { token, setCookies } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function onSubmit(e) {
    e.preventDefault();
    const res = await fetch(URI + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const { message, token } = await res.json();
    if (message === "Bienvenido") {
      setCookies("token", token, { path: "/", maxAge: 86400 })
      navigate("/precioAgente")
    }
    alert(message);
  }
  


  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <h2 className="" style={{ color: "white" }}>
            Iniciar Sesión
          </h2>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            required onChange={(v) => setEmail(v.target.value)}
            placeholder="🤵Ingresar Email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required type="password" onChange={(v) => setPassword(v.target.value)}
            placeholder="🔑Contraseña"
          />
        </Form.Group>

        <Button
          className="btnRegistro"
          variant="primary"
          type="submit"
        >
          Iniciar Sesión
        </Button>
        <br />
        <Link to="/registro">
          <Button className="btnRegistro" type="submit">¡Quiero Registrarme!</Button>
        </Link>
      </Form>
    </div>
  );
}

export default LoginUsuario;

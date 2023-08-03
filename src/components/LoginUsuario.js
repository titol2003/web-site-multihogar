import { Form, Button } from "react-bootstrap";
import "./Login.css"  
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginUsuario() {
  
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  

  const handleSubmit = (e) => {
    
    e.preventDefault();
    alert("Todo los campos son obligatorios");

  }


return ( 
    
    <div>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        
        <Form.Group controlId="formBasicEmail">
          <h2 className=""style={{color:"white"}} >Iniciar Sesión</h2>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type=" usuario"
            name=" usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="🤵Ingresar Usuario"
          />
        </Form.Group>

        
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="contraseña"
            name="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="🔑Contraseña"
          />
        </Form.Group>

        <Link>
          <Button
            className="btnRegistro"
            variant="primary"
            type="Todo los campos son obligatorios"
            onClick={(e) => handleSubmit(e)}
          >
            Iniciar Sesión
          </Button>
        </Link>
        <br />
        <Link to='/registro'>
          <Button className="btnRegistro">
            !Quiero Registrarme!
          </Button>
        </Link>
      </Form>
    </div>
    
  );
}


export default LoginUsuario;


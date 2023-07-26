import { Form, Button } from "react-bootstrap";
import "./Login.css"  
import { useState } from "react";

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
          <h2 className=""style={{color:"white"}} >Iniciar Sesion</h2>
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

        
        <Button
          variant="primary"
          type="Todo los campos son obligatorios"
          onClick={(e) => handleSubmit(e)}
        >
          Iniciar Sesion
        </Button>
        <br />
        <Button>
        !Quiero Registrarme!
        </Button> 
      </Form>
    </div>
    
  );
}


export default LoginUsuario;


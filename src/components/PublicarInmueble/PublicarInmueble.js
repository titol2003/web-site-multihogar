import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./PublicarInmueble.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URII = 'http://localhost:8000/agente/'

function PublicarInmueble() {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const URI = "http://localhost:8000/inmuebles/";


  const [agentes, setAgente] = useState([])
  useEffect( ()=>{
    getAgentes()
  }, [])

  const getAgentes = async (id) => {
    const res = await axios.get(URII)
    setAgente(res.data)
  }

  const imageshare = (files) => {
    var data = [];
    for (let i = 0; i < files.length; i++) {
      data.push(files[i]);
    }
    setImages(data);
  };

  const enviar = async (e) => {
    try {
      e.preventDefault();
      var data = new FormData(e.target);
      await axios.post(URI, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setShowSuccessMessage(true); // Mostrar el mensaje de éxito
      setTimeout(() => {
        navigate('/precioAgente'); // Redirigir después de unos segundos
      }, 2000); // Redirigir después de 3 segundos
    } catch (error) {
      console.error('Error al publicar el inmueble:', error);
    }
    
  };

  useEffect(() => {
    if (showSuccessMessage) {
        setTimeout(() => {
            setShowSuccessMessage(false);
            window.alert("El inmueble ha sido publicado correctamente!");
        },); // Ocultar el mensaje después de 5 segundos
    }
}, [showSuccessMessage]);

  return (
    <div>
      <Form encType="multipart/form-data" onSubmit={enviar}>
        <h1 className="text-center mt-4 pt-3 pb-3">PUBLICAR INMUEBLE</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Titulo del Anuncio</Form.Label>
          <Form.Control
            name="descript1"
            type="text"
            placeholder="Utilice un titulo llamativo"
            
          />
          <Form.Label>Texto descriptivo</Form.Label>
          <Form.Control
            name="descript2"
            type="text"
            placeholder="Brevemente detalle caracteristicas principales de su inmueble"
          />
          <Form.Label>Descripcion del inmueble</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Describa todo lo que conforma su inmueble"
          />
          <Form.Label>Ventajas</Form.Label>
          <Form.Control
            name="ventajas"
            type="text"
            placeholder="Piense en porque su inmueble es el mejor"
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Area</Form.Label>
            <Form.Control name="area"/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Habitaciones</Form.Label>
            <Form.Control name="habitaciones" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Estrato</Form.Label>
            <Form.Control name="estrato" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Baños</Form.Label>
            <Form.Control name="baños" />
          </Form.Group>
        </Row>

        <Form.Select
          className="mb-3"
          aria-label="Default select example"
          
          name="inmueble"
        >
          <option>Tipo de Inmueble</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Casa">Casa</option>
          <option value="Finca">Finca</option>
          <option value="Lote">Lote</option>
          <option value="Local">Local</option>
          <option value="Casa Lote">Casa Lote</option>
        </Form.Select>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Frente</Form.Label>
            <Form.Control name="frente"  />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Fondo</Form.Label>
            <Form.Control name="fondo" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ubicaición</Form.Label>
            <Form.Control name="ubicacion" />
          </Form.Group>
        </Row>

        <Form.Select
        name="negocio"
          className="mb-4"
          aria-label="Default select example"
          
        >
          <option>Tipo de Negocio</option>
          <option value="Permuta">Permuta</option>
          <option value="Venta">Venta</option>
          <option value="Arriendo">Arriendo</option>
        </Form.Select>

        <Row style={{ margin: "10px" }}>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Precio</Form.Label>
            <Form.Control name="precio"/>
          </Form.Group>
        </Row>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Agregar imagen principal</Form.Label>
          <Form.Control type="file" name="image" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Agregar imagenes del inmueble</Form.Label>
          <Form.Control type="file" multiple name="images" />
        </Form.Group>


        <Form.Control
          as="select"
          name="agentes"
          className="mb-4"
          aria-label="Default select example"
        >
          <option><b>Elegir Agente</b></option>
          {agentes.map((agente, index) => (
            <option key={index} data={agente.id} value={JSON.stringify(agente)}>
            <b>{agente.name}</b>
            </option>
          ))}
        </Form.Control>

        <div>
          <Button className="btn" variant="outline-success" type="submit">
            Publicar Inmueble
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PublicarInmueble;

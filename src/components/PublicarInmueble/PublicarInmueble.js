import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./PublicarInmueble.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PublicarInmueble() {

  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const URI = "http://localhost:8000/inmuebles/";

  const imageshare = (files) => {
    var data = [];
    for (let i = 0; i < files.length; i++) {
      data.push(files[i]);
    }
    setImages(data);
  };

  const enviar = async (e) => {
    e.preventDefault();
    var data = new FormData(e.target);
    await axios.post(URI, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

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

        <Form.Select
        name="agentes"
          className="mb-4"
          aria-label="Default select example"
        >
          <option>Elegir Agente</option>
          <option value="Nicol Ospina">Nicol Ospina</option>
          <option value="Luz Reyes">Luz Reyes</option>
          <option value="Javier Guevara">Javier Guevara</option>
          <option value="Yair Osorio">Yair Osorio</option>
        </Form.Select>

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

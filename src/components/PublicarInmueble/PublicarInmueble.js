import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './PublicarInmueble.css'

function PublicarInmueble() {
    return (
        <div >
            <Form>
            <h1 className='text-center mt-4 pt-3 pb-3'>PUBLICAR INMUEBLE</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción Inicial</Form.Label>
                    <Form.Control type="text" placeholder="Descripción de Inmueble" />
                </Form.Group>

                <Form.Select className="mb-4" aria-label="Default select example">
                    <option>Tipo de Negocio</option>
                    <option value="1">Permuta</option>
                    <option value="2">Venta</option>
                    <option value="3">Arriendo</option>
                </Form.Select>

                <Form.Select className="mb-3" aria-label="Default select example">
                    <option>Tipo de Inmueble</option>
                    <option value="1">Apartamento</option>
                    <option value="2">Casa</option>
                    <option value="3">Finca</option>
                    <option value="3">Lote</option>
                    <option value="3">Local</option>
                    <option value="3">Casa Lote</option>
                </Form.Select>

                <Row className="mb-3">
                    <Form.Label>Sector o Ubicación</Form.Label>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Antioquia</option>
                            <option>Cordoba</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Agregar imagen principal</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Agregar imagenes del inmueble</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>

                <Form.Select className="mb-4" aria-label="Default select example">
                    <option>Elegir Agente</option>
                    <option value="1">Nicol Ospina</option>
                    <option value="2">Luz Reyes</option>
                    <option value="3">Javier Guevara</option>
                    <option value="3">Yair Osorio</option>
                </Form.Select>

                <div>
                <Button className='btn' variant="outline-success">Publicar Inmueble</Button>{' '}
                </div>
            </Form>
        </div>
    );
}  

export default PublicarInmueble

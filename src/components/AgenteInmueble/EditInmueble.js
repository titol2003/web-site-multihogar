import React, {useCallback, useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './EditInmueble.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditarInmueble() {

    const [descript1, setDescript1] = useState('')
    const [descript2, setDescript2] = useState('')
    const [description, setDescription] = useState('')
    const [ventajas, setVentajas] = useState('')
    const [area, setArea] = useState('')
    const [habitaciones, setHabitaciones] = useState('')
    const [estrato, setEstrato] = useState('')
    const [baños, setBaños] = useState('')
    const [inmueble, setInmueble] = useState('')
    const [frente, setFrente] = useState('')
    const [fondo, setFondo] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [negocio, setNegocio] = useState('')
    const [precio, setPrecio] = useState('')
    /*const [image, setImage] = useState('')
    const [images, setImages] = useState('')*/
    const [agentes, setAgentes] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Nuevo estado
    const navigate = useNavigate() 
    const {id} =useParams()
    const URI = 'http://localhost:8000/inmuebles/'

    const update = async (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
        try {

            await axios.put(`${URI}${id}`, {
                descript1: descript1,
                descript2: descript2,
                description: description,
                ventajas: ventajas,
                area: area,
                habitaciones: habitaciones,
                estrato: estrato,
                baños: baños,
                inmueble: inmueble,
                frente: frente,
                fondo: fondo,
                ubicacion: ubicacion,
                negocio: negocio,
                precio: precio,
                /*image:image,
                images: images,*/
                agentes: agentes
            }); 
            setShowSuccessMessage(true); // Mostrar el mensaje de éxito
            setTimeout(() => {
                navigate('/precioAgente'); // Redirigir después de unos segundos
            }, 2000); // Redirigir después de 3 segundos
    } catch (error) {
        console.error('Error updating inmueble:', error);
    }
};

    const getInmuebleById = useCallback(async () => {
        try {
            const response = await axios.get(`${URI}${id}`);
            const resData = response.data;
            setDescript1(resData.descript1);
            setDescript2 (resData.descript2)
            setDescription (resData.description)
            setVentajas (resData.ventajas)
            setArea (resData.area)
            setHabitaciones (resData.habitaciones)
            setEstrato (resData.estrato)
            setBaños (resData.baños)
            setInmueble (resData.inmueble)
            setFrente (resData.frente)
            setFondo (resData.fondo)
            setUbicacion (resData.ubicacion)
            setNegocio (resData.negocio)
            setPrecio (resData.precio)
            /*setImage (resData.image)
            setImages (resData.images)*/
            setAgentes (resData.agentes)
        } catch (error) {
            console.error('Error fetching inmueble:', error);
        }
    }, [id]);

        
    useEffect(() => {
        getInmuebleById();
    }, [getInmuebleById]);

    useEffect(() => {
        if (showSuccessMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                window.alert("El inmueble ha sido actualizado correctamente.");
            },); // Ocultar el mensaje después de 5 segundos
        }
    }, [showSuccessMessage]);
        
    return (
        <div >
            <Form>
            <h1 className='text-center mt-4 pt-3 pb-3'>PUBLICAR INMUEBLE</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titulo del Anuncio</Form.Label>
                    <Form.Control type="text" placeholder="Utilice un titulo llamativo" 
                    value={descript1}
                    onChange={ (e)=> setDescript1(e.target.value)}
                    />
                    <Form.Label>Texto descriptivo</Form.Label>
                    <Form.Control type="text" placeholder="Brevemente detalle caracteristicas principales de su inmueble" 
                    value={descript2}
                    onChange={ (e)=> setDescript2(e.target.value)}
                    />
                    <Form.Label>Descripcion del inmueble</Form.Label>
                    <Form.Control type="text" placeholder="Describa todo lo que conforma su inmueble" 
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                    />
                    <Form.Label>Ventajas</Form.Label>
                    <Form.Control type="text" placeholder="Piense en porque su inmueble es el mejor"
                    value={ventajas}
                    onChange={ (e)=> setVentajas(e.target.value)}  
                    />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Area</Form.Label>
                        <Form.Control 
                        value={area}
                        onChange={ (e)=> setArea(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Habitaciones</Form.Label>
                        <Form.Control 
                        value={habitaciones}
                        onChange={ (e)=> setHabitaciones(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Estrato</Form.Label>
                        <Form.Control
                        value={estrato}
                        onChange={ (e)=> setEstrato(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Baños</Form.Label>
                        <Form.Control 
                        value={baños}
                        onChange={ (e)=> setBaños(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Form.Select className="mb-3" aria-label="Default select example"
                value={inmueble}
                onChange={ (e)=> setInmueble(e.target.value)}
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
                        <Form.Control 
                        value={frente}
                        onChange={ (e)=> setFrente(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Fondo</Form.Label>
                        <Form.Control 
                        value={fondo}
                        onChange={ (e)=> setFondo(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ubicaición</Form.Label>
                        <Form.Control 
                        value={ubicacion}
                        onChange={ (e)=> setUbicacion(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Form.Select className="mb-4" aria-label="Default select example"
                value={negocio}
                onChange={ (e)=> setNegocio(e.target.value)}
                >
                    <option>Tipo de Negocio</option>
                    <option value="Permuta">Permuta</option>
                    <option value="Venta">Venta</option>
                    <option value="Arriendo">Arriendo</option>
                </Form.Select>

                <Row style={{ margin:"10px"}}>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control 
                        value={precio}
                        onChange={ (e)=> setPrecio(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                
              {
                /*

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Agregar imagen principal</Form.Label>
                        <Form.Control type="file" 
                        value={image}
                        onChange={ (e)=> setSelectImage(e.target.files[0])}
                        />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Agregar imagenes del inmueble</Form.Label>
                        <Form.Control type="file" multiple 
                        value={images}
                        onChange={ (e)=> setSelectImages(Array.from(e.target.files))}
                        />
                    </Form.Group>
                 */
              }  
                
                

                <Form.Select className="mb-4" aria-label="Default select example"
                value={agentes}
                onChange={ (e)=> setAgentes(e.target.value)}
                >
                    <option>Elegir Agente</option>
                    <option value="Nicol Ospina">Nicol Ospina</option>
                    <option value="Luz Reyes">Luz Reyes</option>
                    <option value="Javier Guevara">Javier Guevara</option>
                    <option value="Yair Osorio">Yair Osorio</option>
                </Form.Select>

                <div>
                <Button className='btn' variant="outline-success" onClick={update}>Actualizar Inmueble</Button>{' '}
                </div>
            </Form>

        </div>
    );
}  

export default EditarInmueble

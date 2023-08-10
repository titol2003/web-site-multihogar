import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import CarouselId from '../Carousel/CarouselId';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AgenteNavbar from '../AgenteInmueble/AgenteNavbar'


const AgenteInmueble = () => {

    const {id} = useParams()
    console.log(id)
    const [inmueble, setInmueble] = useState([])
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchInmueble() {
          try {
            const response = await axios.get(`http://localhost:8000/inmuebles/${id}`);
            setInmueble(response.data);
          } catch (error) {
            setError(error.message);
            console.error(error.message);
          }
        }    
        fetchInmueble();
    }, [id]);

    const handleDelete = async () => {
        // Usar la función confirm para mostrar un mensaje al usuario
        let confirmacion = window.confirm("¿Está seguro que quiere eliminar el inmueble?");
        // Si el usuario acepta, se procede a eliminar el inmueble
        if (confirmacion) {
            try {
                await axios.delete(`http://localhost:8000/inmuebles/${id}`);
                navigate('/precioAgente'); // Redirige a la página de inicio o a donde desees después de eliminar
            } catch (error) {
                console.error(error.message);
            }
        }
        // Si el usuario cancela, no se hace nada
    };
    
    

  return (
    <div >
    <AgenteNavbar />
        <br />
        <br />
        <br />
        
        {
            error 
                ? <p>{error}</p>
                : <main key={inmueble.id}>
                    <div>
                        <Row className='px-4 my-5' sm={5}>
                            
                            <Col sm={12} xl={6}>
                                <CarouselId images={inmueble.carousel}/>
                            </Col>
                            <Col xs={10} sm={8} md={10} lg={6} xl={5}>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="list-group" id="list-tab" role="tablist">
                                        <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Descripción</a>
                                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Ventajas</a>
                                        </div>
                                    </div>
                                    <div className="col-8"  >
                                        <div style={{textAlign:'justify'}} className="tab-content" id="nav-tabContent" color='primary'>
                                        <div className="tab-pane fade show active"  id="list-home" role="tabpanel" aria-labelledby="list-home-list"><p>{inmueble.description}</p></div>
                                        <div className="tab-pane fade"  id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><p>{inmueble.ventajas}</p></div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="bi bi-textarea"></i> <br />Area</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="bi bi-lamp"></i> <br />Habitaciones</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><i className="bi bi-map-fill"></i> <br />Estrato</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-bath-tab" data-bs-toggle="pill" data-bs-target="#pills-bath" type="button" role="tab" aria-controls="pills-bath" aria-selected="false"><i className="bi bi-droplet-fill"></i> <br />Baños</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-inmueble-tab" data-bs-toggle="pill" data-bs-target="#pills-inmueble" type="button" role="tab" aria-controls="pills-inmueble" aria-selected="false"><i class="bi bi-house"></i> <br />Inmueble</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-frente-tab" data-bs-toggle="pill" data-bs-target="#pills-frente" type="button" role="tab" aria-controls="pills-frente" aria-selected="false"><i class="bi bi-arrow-bar-down"></i> <br />Frente</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-fondo-tab" data-bs-toggle="pill" data-bs-target="#pills-fondo" type="button" role="tab" aria-controls="pills-fondo" aria-selected="false"><i class="bi bi-arrow-bar-up"></i> <br />Fondo</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-ubicacion-tab" data-bs-toggle="pill" data-bs-target="#pills-ubicacion" type="button" role="tab" aria-controls="pills-ubicacion" aria-selected="false"><i class="bi bi-geo-alt"></i> <br />Ubicaición</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-cash-tab" data-bs-toggle="pill" data-bs-target="#pills-cash" type="button" role="tab" aria-controls="pills-cash" aria-selected="false"><i class="bi bi-cash-coin"></i> <br />Tipo de negocio</button>
                                        </li>
                                    </ul>
                                <div className="tab-content" id="pills-tabContent" >
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><h1>{inmueble.area}</h1></div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" ><h1>{inmueble.habitaciones}</h1></div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><h1>{inmueble.estrato}</h1></div>
                                    <div className="tab-pane fade" id="pills-bath" role="tabpanel" aria-labelledby="pills-bath-tab"><h1>{inmueble.baños}</h1></div>
                                    <div className="tab-pane fade" id="pills-inmueble" role="tabpanel" aria-labelledby="pills-inmueble-tab"><h1>{inmueble.inmueble}</h1></div>
                                    <div className="tab-pane fade" id="pills-frente" role="tabpanel" aria-labelledby="pills-frente-tab"><h1>{inmueble.frente}</h1></div>
                                    <div className="tab-pane fade" id="pills-fondo" role="tabpanel" aria-labelledby="pills-fondo-tab"><h1>{inmueble.fondo}</h1></div>
                                    <div className="tab-pane fade" id="pills-ubicacion" role="tabpanel" aria-labelledby="pills-ubicacion-tab"><h1>{inmueble.ubicacion}</h1></div>
                                    <div className="tab-pane fade" id="pills-cash" role="tabpanel" aria-labelledby="pills-cash-tab"><h1>{inmueble.negocio}</h1></div>
                                </div>
                                <div>
                                    <ul className="pagination">
                                        <button className='btnn mr-1'><li className="page-item">Precio: <br />{inmueble.precio}</li></button>
                                        <button className='btnn'><li className="page-item">Agente: <br />{inmueble.agentes}</li></button>
                                    
                                        <button className='btnncrud' onClick={handleDelete} >
                                            <li className="page-item">
                                                Eliminar
                                            </li>
                                        </button>
                                        <Link to={`/editar/${inmueble._id}`}>
                                            <button className='btnncrudE' >
                                                <li className="page-item">
                                                    Editar
                                                </li>
                                            </button>
                                        </Link>
                                    </ul>
                                </div> 
                            </Col>
                        </Row>
                    </div>
                </main>
        }
        <br />
    </div>
  )
}

export default AgenteInmueble
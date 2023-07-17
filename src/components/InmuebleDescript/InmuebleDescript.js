import React from 'react'
import {Row, Col} from 'react-bootstrap';
import CarouselId from '../Carousel/CarouselId';
import { Link } from 'react-router-dom';


const InmuebleDescript = () => {
  return (
    <div >
        <main>
            <div>
                <Row className='px-4 my-5' sm={5}>
                    <Col sm={12} xl={6}>
                     <CarouselId/>
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
                                <div className="tab-pane fade show active"  id="list-home" role="tabpanel" aria-labelledby="list-home-list"><p>El diseño interior es una obra maestra de sofisticación y comodidad. Con sus amplias áreas de estar, esta casa ofrece una distribución perfecta para el entretenimiento y la vida familiar. Disfruta de noches acogedoras junto a la chimenea en el elegante salón, o deleita a tus invitados en el comedor formal con su ambiente refinado y elegante.</p></div>
                                <div className="tab-pane fade"  id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><p>No pierdas la oportunidad de vivir en una ubicación que lo tiene todo. Esta casa te ofrece un lugar perfecto para establecer raíces y disfrutar de un estilo de vida envidiable. ¡Ven a descubrir esta joya en el lugar ideal y haz de esta ubicación tu nuevo hogar!</p></div>
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
                            </ul>
                        <div className="tab-content" id="pills-tabContent" >
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><p>120m</p></div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><p>4</p></div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><p>5</p></div>
                            <div className="tab-pane fade" id="pills-bath" role="tabpanel" aria-labelledby="pills-bath-tab"><p>2</p></div>
                        </div>
                        <div>
                            <ul className="pagination">
                                <button className='btnn mr-1'><li className="page-item">Precio: <br /> 250.500.000</li></button>
                                <Link to='/'><button className='btnnc '><li className="page-item">Contactenos!</li></button></Link>
                            </ul>
                        </div> 
                    </Col>
                </Row>
            </div>
        </main>
        <br />
    </div>
  )
}

export default InmuebleDescript
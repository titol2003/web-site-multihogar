import React from 'react'
import './Mercado.css'
import { Button,Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mercado = () => {
  return (
    <Container>
      <Row xs={1} sm={2} md={2} lg={3} xl={3} >
        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
          <div className="card" style={{width: '19rem'}}>
            <img src="./ImagesSlider/slider1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h2 className="card-title">Casa moderna</h2>
              <p className="card-text" style={{color:"black"}}>"Casa moderna de diseño vanguardista con interiores luminosos y amplios espacios abiertos. Estilo y comodidad."</p>
              <Link to='/'> <Button className='no-hover' style={{backgroundColor: "#007bff", borderColor: "#007bff", boxShadow: "none"}} >CARACTERISTICAS</Button></Link>
            </div>
          </div>
          <br />
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
          <div className="card" style={{width: '19rem'}}>
            <img src="./ImagesSlider/slider2.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h2 className="card-title">Casa Coloneal</h2>
              <p className="card-text" style={{color:"black"}}>Casa colonial con encanto en ubicación privilegiada. Acabados de calidad. ¡Tu hogar ideal hecho realidad!".</p>
              <Link to='/'> <Button className='no-hover' style={{backgroundColor: "#007bff", borderColor: "#007bff", boxShadow: "none"}} >CARACTERISTICAS</Button></Link>
            </div>
          </div>
          <br />
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
          <div className="card" style={{width: '19rem'}}>
            <img src="./ImagesSlider/slider3.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h2 className="card-title">Casa campestre</h2>
              <p className="card-text" style={{color:"black"}}>Casa campestre encantadora rodeada de naturaleza, con hermosas vistas panorámicas. Acabados de calidad </p>
              <Link to='/'> <Button className='no-hover' style={{backgroundColor: "#007bff", borderColor: "#007bff", boxShadow: "none"}} >CARACTERISTICAS</Button></Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Mercado
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'

const URI = 'https://render-titol-nodeback.onrender.com/inmuebles/'

const Mercado = () => {

  const [inmuebles, setInmueble] = useState([])
    useEffect( ()=>{
      getInmuebles()
  },[])

  const getInmuebles = async () => {
    const res = await axios.get(URI)
    setInmueble(res.data)
  }

  


  return (
    <>
    <br />

      <Container>
        <Row>
          {inmuebles.map((inmueble) => {
            return (
              <Col key={inmueble._id} sm={12} md={6} lg={4}>
                <br />
                <div className="card">
                  <img src={'data:image/png;base64,' + inmueble.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title">{inmueble.descript1}</h2>
                    <p className="card-text" style={{ color: "black" }}>
                      {inmueble.descript2}
                    </p>
                    <Link to={`/inmuebles/${inmueble._id}`}>
                      <Button
                        className="no-hover"
                        style={{
                          backgroundColor: "#007bff",
                          borderColor: "#007bff",
                          boxShadow: "none",
                        }}
                      >
                        CARACTERISTICAS
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Mercado;
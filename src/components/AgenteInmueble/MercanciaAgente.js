import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../inmuebles.json';

const Mercado = () => {
  return (
    <>
      <Container>
        <Row>
          {data.inmuebles.map((inmueble) => {
            return (
              <Col key={inmueble.id} sm={12} md={6} lg={4}>
                <br />
                <div className="card">
                  <img src={inmueble.imagen} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title">{inmueble.descripcionP}</h2>
                    <p className="card-text" style={{ color: "black" }}>
                      {inmueble.descripcion}
                    </p>
                    <Link to={'/inmuebles/' + inmueble.id}>
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
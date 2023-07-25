import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const ModalUser = ({show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CONTACTENOS!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h4 className='Le'>
                    Nombre
                </h4>
              </Form.Label>
              <Form.Control
                type="nombre"
                placeholder="pepito"
                autoFocus
              />
            </Form.Group>
              <Form.Label>
                <h4 className='Le'>
                    Email
                </h4>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h4 className='Le'>
                    Numero Telefonico
                </h4>
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder="3137806011"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h4 className='Le'>
                    Comentarios
                </h4>
              </Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            <h1 className='Le'>Contactarme</h1>
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalUser
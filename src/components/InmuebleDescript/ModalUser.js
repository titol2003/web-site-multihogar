import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalUser = ({ show, setShow, correo }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentarios: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleContact = async () => {
    try {
      const body = { ...formData, correo };
      const response = await fetch("https://render-titol-nodeback.onrender.com/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      await response.json();
      setShow(false)
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        comentarios: "",
      })
      alert("Se ha contactado correctamente con el agente")
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleClose = ()=> {}

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
                <h4 className="Le">Nombre</h4>
              </Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="pepito"
                autoFocus
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Label>
              <h4 className="Le">Email</h4>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              autoFocus
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h4 className="Le">Numero Telefonico</h4>
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="3137806011"
              name="telefono"
              autoFocus
              value={formData.telefono}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h4 className="Le">Comentarios</h4>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="comentarios"
              autoFocus
              value={formData.comentarios}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleContact}>
          <h1 className="Le">Contactarme</h1>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUser;

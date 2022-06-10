import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import swal from "sweetalert";

export default function InfoModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    const initialState = {
      name: '',
      password: '',
      edad: '',
      telefono: '',
      error_list: []
    };
    setEditar(initialState);
  }

  const [editarPerfil, setEditar] = useState({
    name: '',
    password: '',
    edad: '',
    telefono: '',
    error_list: [],
  });

  const edadTest = /^[1-9]{1}\d{1}$/;
  const telefonoTest = /^\d{9}$/ ;
  const nombreTest = /^[a-zA-Z ]{8,251}$/
  const passwordTest = /^\S{7,18}$/


  const onSubmit = () => {
    const data = {
      name: editarPerfil.name,
      password: editarPerfil.password,
      edad: editarPerfil.edad,
      telefono: editarPerfil.telefono,
  }
    if (editarPerfil.name === "" && editarPerfil.password === "" && editarPerfil.edad === "" && editarPerfil.telefono === "") {
      swal("Warning", "Los datos estan vacíos", "warning");
    } else if (editarPerfil.edad !== '' && !edadTest.test(editarPerfil.edad)) {
      swal("Warning", "Introduzca una edad Válida", "warning");
    }else if (editarPerfil.telefono !== ''&& !telefonoTest.test(editarPerfil.telefono)) {
      swal("Warning", "Introduzca un teléfono válido (666666666)", "warning");
    }else if(editarPerfil.name !== ''&& !nombreTest.test(editarPerfil.name)){
      swal("Warning", "Introduzca un nombre con almenos 8 letras", "warning");
    }else if(editarPerfil.password !== ''&& !passwordTest.test(editarPerfil.password)){
      swal("Warning", "Introduzca un nombre con almenos 7 carácteres y como máximo 18", "warning");
    }else{

      axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/editarperfil`, data).then(res => {
        console.log(res.data);

        if (res.data.status === 200) {
          swal({
            title: "Succes", text: res.data.message, type:
              "success",
            icon: "success"
          }).then(function () {
            window.location.reload();
          });
          setShow(false);
        } else {
          setEditar({ ...editarPerfil, error_list: res.data.validation_errors });
        }
      });
    }
  };

  return (
    <>
      
      <button className="btn btn-light custom-btn" onClick={handleShow}>Editar Perfil</button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                autoFocus
                onChange={e => setEditar({ ...editarPerfil, name: e.target.value })}
                placeholder="Nombre y apellido"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                onChange={e => setEditar({ ...editarPerfil, edad: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Número de teléfono</Form.Label>
              <Form.Control
                type="number"
                placeholder="787888234"
                onChange={e => setEditar({ ...editarPerfil, telefono: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mínimo 7 carácteres y como máximo 18"
                onChange={e => setEditar({ ...editarPerfil, password: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
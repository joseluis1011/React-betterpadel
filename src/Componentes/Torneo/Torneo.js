import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import '../../Paginas/Torneos/Torneos.css';
import { getAllTorneos } from '../../Servicios/getAllTorneos';
import AjaxLoader from '../AjaxLoader/AjaxLoader';
import './Torneo.css';

const Torneo = (props) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [torneosApuntado, setTorneosApuntado] = useState([{}]);
    const [buscando, setBuscando] = useState(false);
    function obtenerTorneos() {
        setBuscando(true);
        getAllTorneos().then(registros => {
            setTorneosApuntado(registros);
            setBuscando(false);
        });
    }
    useEffect(obtenerTorneos, []);
    useEffect(mapeo, [torneosApuntado]);
    function desabilitarBoton(value) {
        if (value[0].id === props.torneo.id) {
            document.getElementById(props.torneo.id).disabled = true;
        }
    }

    function mapeo() {
        if (torneosApuntado && torneosApuntado.Torneo) {
            torneosApuntado.Torneo.map(desabilitarBoton);
        }
    }

    function submitChanges() {
        

        const data = {
            torneo_id: props.torneo.id,
        }
        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/store/userTorneo`, data).then(res => {
            if (res.data.status === 200) {

                swal({
                    title: "Success", text: res.data.message, type:
                        "success",
                    icon: "success"
                }).then(function () {
                    window.location.reload();
                    setShow(false);

                });
            }else{
                console.log(res.data);
            }
        });
    }
    return (
        <div className="col-12 pt-4 pb-4">
            <div className="row">
                <div className="col-12 align-self-center borde">
                    <h1 className="textorojo pb-4 pt-4 text-center">{props.torneo.title}</h1>
                    <h5 className="pb-4 text-center">{props.torneo.description}</h5>
                    <h5 className="pb-4 text-center">Fecha: {props.torneo.dia + "/" + props.torneo.mes}</h5>
                    {buscando?<AjaxLoader/>:<button type="button" id={props.torneo.id} className="btn btn-lg btn-dark custom-btn mb-4 medio" onClick={handleShow}>Apúntate</button>}
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Apuntarse a Torneo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        value={props.torneo.title}
                                        readOnly
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control
                                        type="string"
                                        value={props.torneo.dia + " / " + props.torneo.mes}
                                        readOnly/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value="40"
                                        readOnly
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-dark custom-btn" onClick={handleClose}>Cerrar</button>
                            <button className="btn btn-dark custom-btn" onClick={submitChanges}>Guardar cambios</button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        </div>
    )
}

export default Torneo;
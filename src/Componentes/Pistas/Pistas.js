import { useEffect, useState } from 'react';
import { getPistaById } from '../../Servicios/getPistaById';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import swal from 'sweetalert';
import Navbar from '../../Layouts/Navbar';
import Footer from '../../Layouts/Footer';
import PistaAzul from '../../imagenes/Pista azul.png';
import PistaNegra from '../../imagenes/Pista negra.png';
import './Pistas.css';
import { Modal } from 'react-bootstrap';

const Pistas = () => {
    const [numeroPista, setNumeroPista] = useState();
    const [pista, setPista] = useState([]);
    const [value, onChange] = useState(new Date());
    const [hora, setHora] = useState();
    const [show, setShow] = useState(false);
    const [cerrado, setCerrado] = useState(true);

    const handleClose = () => setShow(false);

    const date = new Date();
    const mes = date.getMonth()+1;
    date.setDate(date.getDate() + 30);

    const calendario = document.getElementById("myCalendar");
    const pistasHoras = document.getElementById("myform2");
    const popUpReserva = document.getElementById("myForm3");
    
    function obtenerPista(value) {
        setCerrado(false);
        getPistaById(value.getDate(), numeroPista,mes).then(pista => {
            setPista(pista);
        });
    }

    useEffect(botones, [pista]);



    function abrirCalendar(event) {

        setNumeroPista(event.target.id);

        setShow(true);

    }

    function abrirForm() {
        if (pistasHoras.getAttribute("class").includes("d-none") && pistasHoras !== null) {

            const botonesHoras = document.getElementById("horas").querySelectorAll('button');
            pistasHoras.classList.remove("d-none");
            calendario.setAttribute("class", "d-none");

            for (let i = 0; i < botonesHoras.length; i++) {
                if (botonesHoras[i].getAttribute("class").includes("btn-danger")) {
                    botonesHoras[i].removeAttribute("class", "btn-danger");
                    botonesHoras[i].setAttribute("class", "btn-success");
                    botonesHoras[i].disabled = false;
                }

            }
            for (let i = 0; i < pista.length; i++) {
                document.getElementById(pista[i].hora.toString()).setAttribute("class", "btn-danger");
                document.getElementById(pista[i].hora.toString()).disabled = true;
            }
        }
    }

    function atras() {
        pistasHoras.setAttribute("class", "d-none");
        calendario.classList.remove("d-none");
    }

    function atrasHoras() {
        popUpReserva.setAttribute("class", "d-none");
        pistasHoras.classList.remove("d-none");
    }

    function botones() {
        if (!cerrado) {
            abrirForm();
        }
    }

    function test(event) {
        event.preventDefault();
        setHora(event.target.id);
        if (popUpReserva.classList.value === 'd-none' && popUpReserva !== null) {
            popUpReserva.classList.remove("d-none");
            pistasHoras.setAttribute("class", "d-none");
        }
    }

    const enviarReserva = (event) => {
        event.preventDefault();

        const data = {
            pista: numeroPista,
            dia: value.getDate(),
            mes: mes,
            hora: hora,
        }
        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/store`, data).then(res => {
            if (res.data.status === 200) {

                swal({
                    title: "Succes", text: res.data.message, type:
                        "success",
                    icon: "success"
                }).then(function () {
                    document.getElementById("myForm3").setAttribute("class", "d-none");
                    setShow(false);

                });
            }
        });
    }

    return (
        <div>
            <Navbar />
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Pista {numeroPista}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-9 offset-1">
                        <div id="myCalendar">
                            <Calendar onChange={onChange} value={value} onClickDay={obtenerPista} minDate={new Date()} maxDate={date} />
                        </div>

                        <div className="d-none" id="myform2">
                            <div onClick={atras}>Atr??s</div>
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Pista {numeroPista} para el d??a {value.getDate()}</h4>
                                        </div>
                                        <div className="card-body" id="horas">
                                            <button id="09:00" className="btn-success" onClick={test}>09:00</button>
                                            <button id="10:30" className="btn-success" onClick={test}>10:30</button>
                                            <button id="12:00" className="btn-success" onClick={test}>12:00</button>
                                            <button id="13:30" className="btn-success" onClick={test}>13:30</button>
                                            <button id="15:00" className="btn-success" onClick={test}>15:00</button>
                                            <button id="16:30" className="btn-success" onClick={test}>16:30</button>
                                            <button id="18:00" className="btn-success" onClick={test}>18:00</button>
                                            <button id="19:30" className="btn-success" onClick={test}>19:30</button>
                                            <button id="21:00" className="btn-success" onClick={test}>21:00</button>
                                            <button id="22:30" className="btn-success" onClick={test}>22:30</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-none" id="myForm3">
                            <div onClick={atrasHoras}>Atr??s</div>
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Reserva</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={enviarReserva}>
                                                <div className="form-group mb-3">
                                                    <label>Hora</label>
                                                    <input type="" name="hora" value={hora} className="form-control" disabled />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label> Fecha</label>
                                                    <input type="" name="dia" value={value.getDate()+"/"+mes} className="form-control" disabled />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Numero de Pista</label>
                                                    <input type="" name="pista" value={numeroPista} className="form-control" disabled />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Coste</label>
                                                    <input type="" name="pista" value={numeroPista==="1"?"20":"16"} className="form-control" disabled />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <button type="submit" className="btn btn-dark custom-btn">Reservar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="container">
                <div className="col-12 pt-4">
                    <div className="row">
                        <div className="col-12 pb-4 col-md-4 conTexto">
                            <img src={PistaAzul} id="5" className="pistas puntero bk" alt="Pista azul" onClick={abrirCalendar} />
                            <div className="textoEncima"><h5>Pista 5</h5></div>
                        </div>
                        <div className="col-12 pb-4 col-md-4 conTexto">
                            <img src={PistaAzul} id="4" className="pistas puntero bk" alt="Pista azul" onClick={abrirCalendar} />
                            <div className="textoEncima"><h5>Pista 4</h5></div>
                        </div>
                        <div className="col-12 col-md-4 conTexto">
                            <img src={PistaAzul} id="3" className="pistas puntero bk" alt="Pista azul" onClick={abrirCalendar} />
                            <div className="textoEncima"><h5>Pista 3</h5></div>
                        </div>
                        <div className="col-12 col-md-4 offset-md-2 conTexto pt-4 ">
                            <img src={PistaNegra} id="1" className="pistas puntero bk2" alt="Pista negra" onClick={abrirCalendar} />
                            <div className="textoEncima"><h5>Pista 1</h5></div>
                        </div>
                        <div className="col-12 col-md-4 conTexto pt-4 ">
                            <img src={PistaAzul} id="2" className="pistas puntero bk" alt="Pista azul" onClick={abrirCalendar} />
                            <div className="textoEncima"><h5>Pista 2</h5></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <Footer />
            </div>
        </div>
    );

}


export default Pistas;
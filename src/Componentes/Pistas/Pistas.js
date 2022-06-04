import { useEffect, useState } from 'react';
import { getPistaById } from '../../Servicios/getPistaById';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import swal from 'sweetalert';
const Pistas = () => {
    const [numeroPista, setNumeroPista] = useState();
    const [pista, setPista] = useState([]);
    const [value, onChange] = useState(new Date());
    const [hora,setHora] = useState();

    const date = new Date();
    date.setDate(date.getDate() + 30);
    let aux = 9;
    let aux2 = 0;
    const [cerrado, setCerrado] = useState(true);
    function obtenerPista(value) {
        setCerrado(false);
        getPistaById(value.getDate(), numeroPista).then(pista => {
            setPista(pista);
        });
    }

    useEffect(botones, [pista]);

    

    function abrirCalendar(event) {

        setNumeroPista(event.target.value);

        if (document.getElementById("myForm").getAttribute("class") === "d-none") {
            document.getElementById("myForm").removeAttribute("class");
            document.getElementById("myform2").setAttribute("class", "container py-5 form-popup d-none");
        } else {
            document.getElementById("myForm").setAttribute("class", "d-none");
        }
        
    }

    function abrirForm() {
        if (document.getElementById("myform2").getAttribute("class").includes("d-none")) {
            document.getElementById("myform2").removeAttribute("class", "d-none");
            document.getElementById("myForm").setAttribute("class", "d-none");
        }
    }

    function botones() {
        if (!cerrado) {
            abrirForm();
        }
        
        const botonesHoras = document.getElementById("horas").querySelectorAll('button');

        for (let i = 0; i < botonesHoras.length; i++) {
            if (botonesHoras[i].getAttribute("class").includes("btn-danger")) {
                botonesHoras[i].removeAttribute("class", "btn-danger");
                botonesHoras[i].setAttribute("class", "btn-success");
                botonesHoras[i].disabled = false;
            }

        }
        
        for (let i = 0; i < pista.length; i++) {
            console.log(pista[i].hora)
            if (pista[i].hora.toString() === "09:00") {
                console.log("kek")
                document.getElementById(pista[i].hora.toString()).setAttribute("class", "btn-danger");
                document.getElementById(pista[i].hora.toString()).disabled = true;
            } else if (aux2 < 30 && pista[i].hora.toString() === aux + ":" + "0" + aux2) {    
                document.getElementById(pista[i].hora.toString()).setAttribute("class", "btn-danger");
                document.getElementById(pista[i].hora.toString()).disabled = true;
                console.log("kek")

            } else if (pista[i].hora.toString() === aux + ":" + aux2) {    
                console.log("kek")

                document.getElementById(pista[i].hora.toString()).setAttribute("class", "btn-danger");
                document.getElementById(pista[i].hora.toString()).disabled = true;
            }
            aux = aux + 1;
            aux2 = aux2 + 30;
            if (aux2 === 60) {
                aux = aux + 1;
                aux2 = 0;
            }
        }
    }

    function test(event) {
        setHora(event.target.id);
        if (document.getElementById("myForm3").style.display === "block") {
            document.getElementById("myForm3").style.display = "none";
        } else {
            document.getElementById("myForm3").style.display = "block";
        }
    }

    const enviarReserva = (event) => {
        event.preventDefault();
       
        const data = {
            pista: numeroPista,
            dia: value.getDate(),
            mes: value.getMonth(),
            hora:hora,
        }

            axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/store`, data).then(res => {
                if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                }else{
                    console.log(res.data)
                }
            });        
    }

    return (
        <div>
            <div className="d-none" id="myForm">
                <Calendar onChange={onChange} value={value} onClickDay={obtenerPista} minDate={new Date()} maxDate={date} />
            </div>

            <button className="btn" value="1" onClick={abrirCalendar}>Pista 1</button>
            <button className="btn" value="2" onClick={abrirCalendar}>Pista 2</button>
            <button className="btn" value="3" onClick={abrirCalendar}>Pista 3</button>
            <div className="container py-5 form-popup d-none" id="myform2">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Pista {numeroPista} para el día {value.getDate()}</h4>
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
            <div className="container py-5 form-popup" id="myForm3">
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
                                        <input type="" name="hora" value={hora} className="form-control" disabled/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Día</label>
                                        <input type="" name="dia" value={value.getDate()} className="form-control" disabled/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Mes</label>
                                        <input type="" name="mes" value={value.getMonth()} className="form-control" disabled/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Numero de Pista</label>
                                        <input type="" name="pista" value={numeroPista} className="form-control" disabled/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Reservar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Pistas;
import Navbar from "../../Layouts/Navbar";
import './Entrenamientos.css';
import Footer from "../../Layouts/Footer";
import entreno2 from "../../imagenes/Fotos wpt/paco11.jpg";
import entreno1 from "../../imagenes/Fotos wpt/din5.jpg";
import entreno3 from "../../imagenes/Fotos wpt/ruiz7.jpg";
import galeria1 from "../../imagenes/Fotos wpt/din9.jpg";
import galeria2 from "../../imagenes/Fotos wpt/ari2.jpg";
import galeria3 from "../../imagenes/Fotos wpt/ale4.jpg";
import flechas from "../../imagenes/flechas.png";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import AjaxLoader from "../../Componentes/AjaxLoader/AjaxLoader";

function Entrenamientos() {
    const [buscando, setBuscando] = useState(false);


    const [mensajeInput, setMensaje] = useState({
        name: '',
        email: '',
        mensaje: '',
        error_list: [],
    });

    const handleInput = (event) => {
        event.persist();
        setMensaje({ ...mensajeInput, [event.target.name]: event.target.value });
    }

    const mensajeSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: mensajeInput.name,
            email: mensajeInput.email,
            mensaje: mensajeInput.mensaje
        }
        
        setBuscando(true);

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/mensajes`, data).then(res => {
            if (res.data.status === 200) {
                swal({
                    title: "Succes", text: res.data.message, type:
                        "success",
                    icon: "success"
                });
                setMensaje(
                    {name: '',
                    email: '',
                    mensaje: '',
                    error_list: []})
            }else{
                setMensaje({...mensajeInput,error_list: res.data.validation_errors});
                swal("Warning", res.data.message, "warning");
            }
            setBuscando(false);
        });

    }

    return (
        <div>
            <Navbar />
            <div className="container px-0">

                <div className="row pt-4 pb-4">

                    <div className="col-12 pt-4 pb-4 dark-background text-white">
                        <div className="row">
                            <div className="col-12 pt-4 pb-4">
                                <div className="row">
                                    <h1 className="textorojo text-center pb-4"><img src={flechas} alt="Flechas" className="estiloflechas pb-2"></img><strong> Revoluci??n del entrenamiento </strong><img src={flechas} alt="Flechas" className="estiloflechas2 pt-2"></img></h1>
                                    <h4 className="text-center">Traemos un nuevo m??todo de entrenamiento con el objetivo de superar tu l??mite. Buscamos una forma de trabajo completamente enfocada en ti,
                                        creada exclusivamente para mejorar cada uno de tus movimientos en la pista. Para ello, centraremos un entrenador en ti, que siempre estar?? a tu lado
                                        para ofrecerte sus consejos y experiencias. El entrenador crear?? un plan de entrenamiento especial para ti, y podr??s comentar con ??l tus
                                        sensaciones para que siempre est??s c??modo y puedas dar lo m??ximo.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4">

                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <img src={entreno1} alt="Entreno1" className="foto2" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 align-self-center">
                                <h1 className="textorojo">T??cnica</h1>
                                <h5>Golpear la pelota de la forma m??s adecuada en cada golpe distinto es diferencial a la hora de ganar puntos. Aprende a manejar cada situaci??n de la mejor manera posible.
                                    Saques, remates, v??boras, dejadas, globos, y un sinf??n de golpes a dominar te esperan para ampliar tu cat??logo de movimientos en la pista.
                                </h5>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4 dark-background text-white">

                        <div className="row">
                            <div className="col-12 col-md-6 align-self-center">
                                <h1 className="textorojo">Posicionamiento</h1>
                                <h5>La colocaci??n dentro de la pista es crucial a la hora de realizar golpes complicados o hacer menos esfuerzos. Para realizar un buen resto, hacer una volea ganadora,
                                    saltar hacia un remate o devolverlo, es muy importante estar bien posicionado. La colocaci??n en pista te har?? ganar ventaja respecto a tus rivales.</h5>
                            </div>
                            <div className="d-none d-lg-block col-6">
                                <div className="row">
                                    <img src={entreno2} alt="Entreno2" className="foto2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4">

                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <img src={entreno3} alt="Entreno3" className="foto2" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 align-self-center">
                                <h1 className="textorojo">Trabajo</h1>
                                <h5>No hay ??xito sin sacrificio. Los partidos son largos y siempre hay altibajos, pero la clave est?? en seguir trabajando con esfuerzo.
                                    Lucha cada bola como si fuera la ??ltima y consigue dar tu mejor versi??n en la pista.</h5>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4 dark-background text-white">
                        <div className="row">
                            <div className="col-12 pt-4 pb-4">
                                <div className="row">
                                    <h1 className="textorojo text-center pb-4">Revisi??n de v??deo</h1>
                                    <h4 className="text-center">Trabajar con sesiones de v??deo har?? que te sea m??s f??cil afianzar los conceptos que entrenes en la pista. Tus sesiones de
                                        entrenamiento ser??n grabadas con el objetivo de comentarlas con el entrenador y ver f??cilmente que se puede mejorar. Este m??todo acompa??ar?? a tu trabajo
                                        en pista para ir mejorando en todo momento y comparar con sesiones anteriores para comprobar tu progreso.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4 dark-background">

                        <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <img src={galeria1} alt="Galeria1" className="foto2" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <img src={galeria2} alt="Galeria2" className="foto2" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <img src={galeria3} alt="Galeria3" className="foto2" />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-12 dark-background pb-4">
                        <div className="row pt-10">
                            <h1 className="textorojo text-center">Nosotros ponemos el contexto, t?? eres el protagonista</h1>
                            <h3 className="text-white text-center">Si te atreves a vivir esta experiencia o necesitas m??s informaci??n, contacta con nosotros</h3>

                            <form className="text-white" onSubmit={mensajeSubmit}>
                                <div className="form-group mb-3">
                                    <label>Nombre</label>
                                    <input type="" name="name" placeholder="Introduce tu nombre" onChange={handleInput} value={mensajeInput.name} className="form-control" />
                                    <span>{mensajeInput.error_list.name}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input type="email" name="email" onChange={handleInput} value={mensajeInput.email} placeholder="Introduce tu email" className="form-control" />
                                    <span>{mensajeInput.error_list.name}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Mensaje</label>
                                    <textarea rows="3" name="mensaje" onChange={handleInput} value={mensajeInput.mensaje} className="form-control" />
                                    <span>{mensajeInput.error_list.mensaje}</span>
                                </div>
                                <div className="form-group mb-3">
                                    {buscando?<AjaxLoader/>:<button type="submit" className="btn btn-light custom-btn">Enviar</button>}
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Entrenamientos;
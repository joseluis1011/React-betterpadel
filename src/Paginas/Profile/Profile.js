import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import './Profile.css';
import { getRegistros } from "../../Servicios/getRegistros";
import AjaxLoader from "../../Componentes/AjaxLoader/AjaxLoader";
import Post from "../../Componentes/Registro/Post";
import DatosPersona from "../../Componentes/datos/datosPersona";
import Navbar from "../../Layouts/Navbar";
import Footer from "../../Layouts/Footer";
import InfoModal from "../../Componentes/EditarPerfil/modal";
import { Tab } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs'
import ReservaActiva from "../../Componentes/Registro/ReservasActivas";
const Profile = () => {
    const Navigate = useNavigate();
    const [historial, setHistorial] = useState([{}]);
    const [buscando, setBuscando] = useState(false);
    const [historialMap, setHistorialMap] = useState('');
    const [reservaActiva, setReservaActiva] = useState();
    const [datosPerfil, setDatosPerfil] = useState();
    const date = new Date();

    let reservasActivas = [];
    function obtenerHistorial() {

        setBuscando(true);


        getRegistros().then(registros => {
            setHistorial(registros);

            setBuscando(false);
        });
    }
    useEffect(obtenerHistorial, []);
    useEffect(mapeo, [historial]);
    useEffect(mapeo2, [historial]);

    function muestraHistorial(post) {
        return <Post key={post.id} post={post}></Post>
    }
    function muestraReservaActiva(post) {
        return <ReservaActiva key={post.id} reservaActiva={post}></ReservaActiva>
    }
    function datosPersona(post) {
        return <DatosPersona key={post.id} post={post}></DatosPersona>
    }

    function comprobarReserva(post) {
        if (post.mes === date.getMonth()+1 && post.dia >= date.getDay()) {
            return post;
        }else if (post.mes >= date.getMonth()+1) {
            return post;
        }
    }

    function mapeo() {
        if (historial.registros) {
            setReservaActiva(historial.registros.filter(comprobarReserva).map(muestraReservaActiva));
            setHistorialMap(historial.registros.map(muestraHistorial));
        }
    }

    function mapeo2() {
        if (historial.usuario) {
            setDatosPerfil(datosPersona(historial.usuario));
        }
    }

    const logout = (event) => {
        event.preventDefault();

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                swal({
                    title: "Succes", text: res.data.message, type:
                        "success",
                    icon: "success"
                }).then(function () {
                    Navigate('/');
                    window.location.reload();
                });
            } else if (res.data.status === 401) {
                swal("Warning", res.data.message, "warning");
            }
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container px-0">

                <div className="row pt-4 pb-4">

                    <div className="col-12 pt-4 pb-4">
                        <div className="row">
                            <div className="col-4 dark-background text-white pt-4 pb-4">
                                {datosPerfil}
                                <InfoModal />
                                <button className="btn btn-dark custom-btn" onClick={logout}>Logout</button>
                            </div>
                            <div className="col-8">
                            <Tabs defaultActiveKey="ReservasActivas" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="Historial" title="Historial">
                                    <div className="col-12">
                                        {buscando ? <AjaxLoader></AjaxLoader>
                                            : <div className="container">
                                                <h2>Historial</h2>
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Pista</th>
                                                            <th>Día</th>
                                                            <th>Mes</th>
                                                            <th>Hora</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {historialMap}
                                                    </tbody>
                                                </table>
                                            </div>}
                                    </div>
                                </Tab>
                                <Tab eventKey="ReservasActivas" title="Reservas Activas">
                                    <div className="col-12">
                                        {buscando ? <AjaxLoader></AjaxLoader>
                                            : <div className="container">
                                                <h2>Reservas Activas</h2>
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Pista</th>
                                                            <th>Día</th>
                                                            <th>Mes</th>
                                                            <th>Hora</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {reservaActiva}
                                                    </tbody>
                                                </table>
                                            </div>}
                                    </div>
                                </Tab>
                            </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom ">
                <Footer />

            </div>

        </div>
    );

}


export default Profile;
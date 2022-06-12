import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../Layouts/Navbar";
import swal from "sweetalert";
import AjaxLoader from "../../Componentes/AjaxLoader/AjaxLoader";
import { Tab } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs'
import { getAllUsers } from "../../Servicios/getAllUsers";
import User from "../../Componentes/User/User";
import { getAllregistros } from "../../Servicios/getAllregistros";
import Registro from "../../Componentes/Registro/Registro";
import { getAllMensajes } from "../../Servicios/getAllMensajes";
import Mensaje from "../../Componentes/Registro/Mensaje";
import ReservaActiva from "../../Componentes/Registro/ReservasActivas";
import { getTorneos } from "../../Servicios/getTorneos";
import TorneoDashboard from "../../Componentes/TorneoDashboard/TorneoDashboard";

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [registros, setRegistros] = useState([]);
    const [mensajes, setMensajes] = useState([]);
    const [buscando, setBuscando] = useState(false);
    const [registrosMap, setRegistrosMap] = useState();
    const [reservaActiva,setReservaActiva] = useState();
    const [torneos, setTorneos] = useState([]);

    const date = new Date();

    function obtenerMensajes() {
        setBuscando(true);
        getAllMensajes().then(mensajes => {
            setMensajes(mensajes);
            setBuscando(false);
        });
    }

    function obtenerUsuarios() {
        setBuscando(true);
        getAllUsers().then(user => {
            setUsers(user);
            setBuscando(false);
        });
        
    }
    function obtenerRegistros() {
        setBuscando(true);
        getAllregistros().then(registro => {
            setRegistros(registro);
            setBuscando(false);
        });
        
    }
    function obtenerTorneos() {
        setBuscando(true);
        getTorneos().then(torneos => {
            setTorneos(torneos);
            setBuscando(false);
        });
        
    }
    function user(user) {
        return <User key={user.id} user={user}></User>
    }
    function registro(registro) {
        return <Registro key={registro.id} registro={registro}></Registro>
    }
    function mapeo() {
        if (registros.data) {
            setRegistrosMap(registros.data.map(registro));
            setReservaActiva(registros.data.filter(comprobarReserva).map(muestraReservaActiva));
        }
    }
    function muestraReservaActiva(post) {
        return <ReservaActiva key={post.id} reservaActiva={post}></ReservaActiva>
    }
    function comprobarReserva(post) {
        if (post.mes === date.getMonth()+1 && post.dia >= date.getDay()) {
            return post;
        }else if (post.mes >= date.getMonth()+1) {
            return post;
        }
    }

    function mostrarMensaje(mensaje) {
        return <Mensaje key={mensaje.id} mensaje={mensaje}></Mensaje>
    }
    function mostrarTorneos(torneo) {
        return <TorneoDashboard key={torneo.id} torneo={torneo}></TorneoDashboard>
    }
    useEffect(mapeo, [registros]);
    useEffect(obtenerUsuarios, []);
    useEffect(obtenerTorneos, []);
    useEffect(obtenerMensajes, []);
    useEffect(obtenerRegistros, []);
    const [enviando, setEnviando] = useState(false);

    const [torneoInput, setTorneo] = useState({
        dia: '',
        mes: '',
        title: '',
        description: '',
        error_list: [],
    });

    const handleInput = (event) => {
        event.persist();
        setTorneo({ ...torneoInput, [event.target.name]: event.target.value });
    }

    const torneoSubmit = (event) => {
        event.preventDefault();

        const data = {
            dia: torneoInput.dia,
            mes: torneoInput.mes,
            title: torneoInput.title,
            description: torneoInput.description
        }

        setEnviando(true);

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/store/torneos`, data).then(res => {
            if (res.data.status === 200) {
                swal({
                    title: "Succes", text: res.data.message, type:
                        "success",
                    icon: "success"
                });
                setTorneo(
                    {dia: '',
                    mes: '',
                    title: '',
                    description: '',
                    error_list: []})
            } else {
                setTorneo({ ...torneoInput, error_list: res.data.validation_errors });
            }
            setEnviando(false);
        });

    }

    return (
        <div>
            <Navbar />
            <div className="container pt-4 pb-4">
                <div className="col-12">
                    <div className="row">
                        <Tabs defaultActiveKey="crearTorneo" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="crearTorneo" title="Crear torneo">
                                <div className="container py-2">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4>Crear torneo</h4>
                                                </div>
                                                <div className="card-body">
                                                    <form onSubmit={torneoSubmit}>
                                                        <div className="form-group mb-3">
                                                            <label>Title</label>
                                                            <input type="" name="title" onChange={handleInput} value={torneoInput.title} className="form-control" />
                                                            <span>{torneoInput.error_list.title}</span>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label>Dia</label>
                                                            <input type="" name="dia" onChange={handleInput} value={torneoInput.dia} className="form-control" />
                                                            <span>{torneoInput.error_list.title}</span>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label>Mes</label>
                                                            <input type="" name="mes" onChange={handleInput} value={torneoInput.mes} className="form-control" />
                                                            <span>{torneoInput.error_list.title}</span>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label>Description</label>
                                                            <textarea rows="3" name="description" onChange={handleInput} value={torneoInput.description} className="form-control" />
                                                            <span>{torneoInput.error_list.description}</span>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            {enviando ? <AjaxLoader /> : <button type="submit" className="btn btn-dark custom-btn">Crear</button>}
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Usuarios" title="Usuarios">
                            <div className="container py-2">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                        {buscando ? <AjaxLoader></AjaxLoader>
                                    : <div className="container">
                                        <h2>Users</h2>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Teléfono</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map(user)}
                                            </tbody>
                                        </table>
                                    </div>}
                                         
                                        </div>
                                    </div>
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
                            <Tab eventKey="Registros" title="Registros">
                            <div className="container py-2">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                        {buscando ? <AjaxLoader></AjaxLoader>
                                    : <div className="container">
                                        <h2>Registros</h2>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Usuario</th>
                                                    <th>Pista</th>
                                                    <th>Fecha</th>
                                                    <th>Hora</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {registrosMap}
                                            </tbody>
                                        </table>
                                    </div>}
                                         
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Mensajes" title="Mensajes" >
                            <div className="container py-2">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                        {buscando ? <AjaxLoader></AjaxLoader>
                                    : <div className="container">
                                        <h2>Users</h2>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Email</th>
                                                    <th>Name</th>
                                                    <th>Mensaje</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {mensajes.map(mostrarMensaje)}
                                            </tbody>
                                        </table>
                                    </div>}
                                         
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Torneos" title="Torneos" >
                            <div className="container py-2">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                        {buscando ? <AjaxLoader></AjaxLoader>
                                    : <div className="container">
                                        <h2>Torneos</h2>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Title</th>
                                                    <th>Fecha</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {torneos.map(mostrarTorneos)}
                                            </tbody>
                                        </table>
                                    </div>}
                                         
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
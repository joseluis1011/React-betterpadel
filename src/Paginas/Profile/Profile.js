import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import swal from "sweetalert";
import './Profile.css';
import { getRegistros } from "../../Servicios/getRegistros";
import AjaxLoader from "../../Componentes/AjaxLoader/AjaxLoader";
import Post from "../../Componentes/Registro/Post";
import EditarPerfil from "../../Componentes/EditarPerfil/EditarPerfi";
import DatosPersona from "../../Componentes/datos/datosPersona";
import Navbar from "../../Layouts/Navbar";
import Footer from "../../Layouts/Footer";
import InfoModal from "../../Componentes/EditarPerfil/modal";
const Profile = () => {
    const Navigate = useNavigate();
    const [historial, setHistorial] = useState([{}]);
    const [buscando, setBuscando] = useState(false);
    const [historialMap, setHistorialMap] = useState();
    const [datosPerfil, setDatosPerfil] = useState();
    function obtenerHistorial() {

        setBuscando(true);


        getRegistros().then(registros => {
            setHistorial(registros);

            setBuscando(false);
        });
        console.log(historial);
    }
    useEffect(obtenerHistorial, []);
    useEffect(mapeo, [historial]);
    useEffect(mapeo2, [historial]);

    function muestraHistorial(post) {
        return <Post key={post.id} post={post}></Post>
    }
    function datosPersona(post) {
        return <DatosPersona key={post.id} post={post}></DatosPersona>
    }

    function mapeo() {
        if (historial.registros) {
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
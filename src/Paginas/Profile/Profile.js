import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import swal from "sweetalert";
import './Profile.css';
import { getRegistros } from "../../Servicios/getRegistros";
import AjaxLoader from "../../Componentes/AjaxLoader/AjaxLoader";
import Post from "../../Componentes/Registro/Post";
import EditarPerfil from "../../Componentes/EditarPerfil/EditarPerfi";

const Profile = () => {
    const Navigate = useNavigate();
    const [historial, setHistorial] = useState([{}]);
    const [buscando, setBuscando] = useState(false);
    const [historialMap, setHistorialMap] = useState();
    function obtenerHistorial() {

        setBuscando(true);


        getRegistros().then(registros => {
            setHistorial(registros);

            setBuscando(false);
        });
    }
    useEffect(obtenerHistorial, []);
    useEffect(mapeo,[historial]);
    function muestraHistorial(post) {

        return <Post key={post.id} post={post}></Post>;
    }
    function mapeo() {
        if (historial.registros) {
           setHistorialMap( historial.registros.map(muestraHistorial));
        }
    }

    const logout = (event) => {
        event.preventDefault();

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                swal("Success", res.data.message, "success");
                Navigate('/');
            } else if (res.data.status === 401) {
                swal("Warning", res.data.message, "warning");
            }
        });
    }

    
    console.log(historial);

    return (
        <div>
            <h1>{localStorage.getItem('auth_name')}</h1>

            
            <EditarPerfil />
            <button className="btn btn-danger" onClick={logout}>Logout</button>
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
                            { historialMap}
                        </tbody>
                    </table>
                </div>}
        </div>
    );

}


export default Profile;
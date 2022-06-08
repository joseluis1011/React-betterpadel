import Dropdown from "@restart/ui/esm/Dropdown";
import axios from "axios";
import { DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { Link } from "wouter";
import logo from '../imagenes/logo.png';
import './Navbar.css';
import instagram from "../imagenes/Instagram.png";
import twitter from "../imagenes/Twitter.png";
import facebook from "../imagenes/facebook.png";
import { Button } from "react-bootstrap";

function Navbar() {

    const Navigate = useNavigate();

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
    let Botones = '';

    if (localStorage.getItem('auth_token') === null) {
        Botones = (
            <div className="col-12">
                <div className="row ">
                    <div className="col-5">
                        <div className="row">
                            <Link className="nav-link" to="/Login">
                                <button type="button" className="btn btn-light custom-btn">Iniciar sesión</button>
                            </Link>
                        </div>
                    </div >
                    <div className="col-5 offset-1">
                        <div className="row ">
                            <Link className="nav-link" to="/register">
                                <button type="button" className="btn btn-light custom-btn">Registro</button>
                            </Link>
                        </div>
                    </div >
                </div>
            </div>
        );
    } else {
        Botones = (
            <div className="col-12">
                <div className="row ">
                    <div className="offset-5 col-4">
                        <div className="row">
                            <Link className="nav-link" to="/profile">
                                <button type="button" className="btn btn-light custom-btn" >Perfil</button>
                            </Link>
                        </div>
                    </div >

                </div>
            </div>
        );
    }


    return (
        
        <nav className="col-12 margen">
            <div className="row dark-background text-white align-items-center">

                <div className="col-12 ">
                    <div className="row align-items-center">

                        <div className="col-4">
                            <div className="row">
                                <Link to="/" >
                                    <img src={logo} alt="Logo" className="puntero" />
                                </Link>

                            </div>
                        </div>

                        <div className="col-8 pr-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className=" offset-10 col-2">
                                            <a href="https://instagram.com/betterpadelct"><img src={instagram} alt="Instagram" className="icono"></img></a>
                                            <a href="https://twitter.com/betterpadel"><img src={twitter} alt="Twitter" className="icono"></img></a>
                                            <a href="https://facebook.com/profile.php?id=100081966279989"><img src={facebook} alt="Facebook" className="icono"></img></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <nav class="navbar navbar-expand-md dark-background navbar-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/entrenamientos">
                                    <h5 className="puntero encima">Entrenamientos</h5>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/reservas">
                                    <h5 className="puntero encima">Reservas</h5>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/SobreNosotros">
                                    <h5 className="puntero encima">Sobre Nosotros</h5>
                                </Link>
                            </li>
                                {Botones}
                        </ul>
                    </div>
                </nav>

                <div className="col-12 sticky-top top-0 dark-background text-white">
                    <div className="row">
                        <div className="col-6">
                            <nav className="navbar sticky-top navbar-expand-sm dark-background text-white">
                                <div className="col-4 offset-1">
                                    <div className="row">
                                        <Link to="/entrenamientos">
                                            <h5 className="puntero encima">Entrenamientos</h5>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="row">
                                        <Link to="/reservas">
                                            <h5 className="puntero encima">Reservas</h5>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="row">
                                        <Link to="/SobreNosotros">
                                            <h5 className="puntero encima">Sobre Nosotros</h5>
                                        </Link>
                                    </div>
                                </div>

                            </nav>
                        </div>
                        <div className=" offset-4 col-2">
                            <div className="row  justify-content-end">
                                {Botones}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>)
}

export default Navbar;
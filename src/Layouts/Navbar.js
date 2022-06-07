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
                    <div className="col-4">
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
        <div className="col-12">
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

                        <div className="col-3 offset-5">
                            <div className="row">
                                <div className="col-12 justify-content-end">
                                    <a href="https://instagram.com/betterpadelct"><img src={instagram} alt="Instagram" className="icono"></img></a>
                                    <a href="https://twitter.com/betterpadel"><img src={twitter} alt="Twitter" className="icono"></img></a>
                                    <a href="https://facebook.com/profile.php?id=100081966279989"><img src={facebook} alt="Facebook" className="icono"></img></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-12 sticky-top top-0 dark-background text-white">
                    <div className="row">
                        <div className="col-6">
                            <nav class="navbar sticky-top navbar-expand-sm dark-background text-white">
                                <div className="col-4 offset-1">
                                    <div className="row">
                                        <Link to="/entrenamientos">
                                            <h5 class="puntero encima">Entrenamientos</h5>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="row">
                                        <Link to="/">
                                            <h5 class="puntero encima" href="#">Reservas</h5>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="row">
                                        <Link to="/SobreNosotros">
                                            <h5 class="puntero encima">Sobre Nosotros</h5>
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
        </div>
    );
}

export default Navbar;
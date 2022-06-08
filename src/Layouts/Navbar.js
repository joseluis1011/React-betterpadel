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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0">
            <a class="navbar-brand" href="#"><img src={logo} /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <ul class="navbar-nav sm-icons">
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fab fa-instagram"></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fab fa-twitter"></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fab fa-pinterest-p"></i></a></li>
                </ul>
            </div>
        </nav>)
}

export default Navbar;
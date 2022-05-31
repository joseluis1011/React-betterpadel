import Dropdown from "@restart/ui/esm/Dropdown";
import axios from "axios";
import { DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { Link } from "wouter";
import logo from '../imagenes/logo.png';
import './Navbar.css';

function Navbar() {

    const navigate = useNavigate();

    const logout = (event) => {
        event.preventDefault();

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                navigate('/');
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
                    <div className="col-4">
                        <div className="row">
                            <Link className="nav-link" to="/Login">
                                <button type="button" className="btn btn-light">Login</button>
                            </Link>
                        </div>
                    </div >
                    <div className="col-4 offset-1">
                        <div className="row ">
                            <Link className="nav-link" to="/register">
                                <button type="button" className="btn btn-light">Register</button>
                            </Link>
                        </div>
                    </div >
                </div>
            </div>
        );
    } else {
        Botones = (
            <div className="col-12">
                <div className="row">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    return (

        <div className="row dark-background text-white justify-content-between align-items-center">
            <div className="col-4">
                <div className="row">
                    <Link to="/" >
                        <img src={logo} className="puntero" />
                    </Link>

                </div>
            </div>
            <div className="col-2">
                <div className="row ">
                    {Botones}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
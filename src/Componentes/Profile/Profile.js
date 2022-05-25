import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import swal from "sweetalert";
import './Profile.css';

const Profile = () => {
    const Navigate = useNavigate();

    const [editarPerfil, setEditar] = useState({
        name: '',
        password: '',
        error_list: [],
    });

    const handleInput = (event) => {
        event.persist();
        setEditar({ ...editarPerfil, [event.target.name]: event.target.value });
    }

    const editarSubmit = (event) => {
        event.preventDefault();
        

        const data = {
            name: editarPerfil.name,
            password: editarPerfil.password
        }
        if (editarPerfil.name === "" && editarPerfil.password === "") {
            swal("Warning", "Los datos estan vacíos", "warning");
        } else {
            
            axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/editarperfil`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                } else {
                    setEditar({ ...editarPerfil, error_list: res.data.validation_errors });
                }
            });
            document.getElementById("myForm").style.display = "none";
        }
    }

    const logout = (event) => {
        event.preventDefault();

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                Navigate('/');
            } else if (res.data.status === 401) {
                swal("Warning", res.data.message, "warning");
            }
        });
    }

    const handleClick = () => {
        if (document.getElementById("myForm").style.display === "block") {
            document.getElementById("myForm").style.display = "none";
        } else {
            document.getElementById("myForm").style.display = "block";
        }

    }


    return (
        <div>
            <h1>{localStorage.getItem('auth_name')}</h1>

            <button className="open-button" onClick={handleClick}>Editar Perfil</button>
            <div className="container py-5 form-popup" id="myForm">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Editar Perfil</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={editarSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Nombre</label>
                                        <input type="" name="name" onChange={handleInput} value={editarPerfil.name} className="form-control" />
                                        <span>{editarPerfil.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={editarPerfil.password} className="form-control" />
                                        <span>{editarPerfil.error_list.password}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Editar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
        </div>
    );

}


export default Profile;
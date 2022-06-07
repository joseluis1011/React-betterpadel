import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

const EditarPerfil = () => {

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
                    swal({
                        title: "Succes", text: res.data.message, type:
                            "success",
                        icon: "success"
                    }).then(function () {
                        window.location.reload();
                    });
                } else {
                    setEditar({ ...editarPerfil, error_list: res.data.validation_errors });
                }
                console.log(res);
            });
            

            document.getElementById("myForm").style.display = "none";
        }
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
            <button className="open-button" onClick={handleClick}>Editar Perfil</button>
            <div className="container py-5 form-popup" id="myForm">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-dark">
                                <h4>Editar Perfil</h4>
                            </div>
                            <div className="card-body ">
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
        </div>);

}
export default EditarPerfil;
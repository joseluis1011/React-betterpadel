import { useState } from "react";
import Navbar from "../../Layouts/Navbar";
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import AjaxLoader from "../../Componentes/AjaxLoader/AjaxLoader";

function Registro() {

    const navigate = useNavigate();
    const [buscando, setBuscando] = useState(false);


    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        telefono:'',
        error_list: [],
    });

    const handleInput = (event) => {
        event.persist();
        setRegister({ ...registerInput, [event.target.name]: event.target.value });
    }

    const registerSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            telefono: registerInput.telefono,
        }
        
        setBuscando(true);

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/register`, data).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem('auth_token',res.data.token);
                swal({
                    title: "Success", text: res.data.message, type:
                        "success",
                    icon: "success"
                }).then(function () {
                    navigate('/');
                    window.location.reload();
                });
            }else{
                setRegister({...registerInput,error_list: res.data.validation_errors});
            }
            setBuscando(false);
        });

    }

    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Registro</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={registerSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="" name="name" onChange={handleInput} value={registerInput.name} className="form-control" />
                                        <span>{registerInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Teléfono</label>
                                        <input type="" name="telefono" onChange={handleInput} value={registerInput.telefono} className="form-control" />
                                        <span>{registerInput.error_list.telefono}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" onChange={handleInput} value={registerInput.email} className="form-control" />
                                        <span>{registerInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={registerInput.password} className="form-control" />
                                        <span>{registerInput.error_list.password}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                    {buscando ? <AjaxLoader/>:<button type="submit" className="btn btn-dark custom-btn">Registro</button>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Registro;
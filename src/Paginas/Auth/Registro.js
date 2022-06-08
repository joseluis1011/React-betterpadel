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
            password: registerInput.password
        }
        
        setBuscando(true);

        axios.post(`https://betterpadel.vercel.app/public/api/register`, data).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem('auth_token',res.data.token);
                swal({
                    title: "Succes", text: res.data.message, type:
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
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={registerSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="" name="name" onChange={handleInput} value={registerInput.name} className="form-control" />
                                        <span>{registerInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="" name="email" onChange={handleInput} value={registerInput.email} className="form-control" />
                                        <span>{registerInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={registerInput.password} className="form-control" />
                                        <span>{registerInput.error_list.password}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                    {buscando ? <AjaxLoader/>:<button type="submit" className="btn btn-primary">Register</button>}
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
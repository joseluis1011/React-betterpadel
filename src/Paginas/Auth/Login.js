import { useState } from "react";
import Navbar from "../../Layouts/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import AjaxLoader from "../../Componentes/AjaxLoader/AjaxLoader";

function Login() {

    const navigate = useNavigate();
    const [buscando, setBuscando] = useState(false);

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (event) => {
        event.persist();
        setLogin({ ...loginInput, [event.target.name]: event.target.value });
    }

    const loginSubmit = (event) => {
        event.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }
        setBuscando(true);

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/login`, data).then(res => {

            if (res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                swal({
                    title: "Success", text: res.data.message, type:
                        "success",
                    icon: "success"
                }).then(function () {
                    window.location.reload();
                    navigate('/');
                });
            } else if (res.data.status === 401) {
                swal("Warning", res.data.message, "warning");
            } else {
                setLogin({ ...loginInput, error_list: res.data.validation_errors });
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
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">

                                <form onSubmit={loginSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control" />
                                        <span>{loginInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={loginInput.passsword} className="form-control" />
                                        <span>{loginInput.error_list.password}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        {buscando ? <AjaxLoader /> : <button type="submit" className="btn btn-dark custom-btn">Login</button>}
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

export default Login;
import Navbar from "../../Layouts/Navbar";
import './MiPerfil.css';
import Footer from "../../Layouts/Footer";
import { Link } from "wouter";


function MiPerfil() {

    return (
        <div>
            <Navbar />
            <div className="container px-0">

                <div className="row pt-4 pb-4">

                    <div className="col-12 pt-4 pb-4">
                        <div className="row">
                            <div className="col-4 dark-background text-white pt-4 pb-4">
                                <h1>Luis Martinez Vicente</h1>
                                <h3>email@gmail.com</h3>
                                <h3>Lado preferido: Derecha</h3>
                                <h3>Edad: 22</h3>
                            </div>
                            <div className="col-8">
                                <h1>editar perfil/Historial de reservas</h1>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MiPerfil;
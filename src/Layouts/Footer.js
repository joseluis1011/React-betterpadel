import './Footer.css';
import { Link } from "wouter";
import logo from '../imagenes/logo.png';

function Footer() {


    return (

        <div className="col-12 dark-background text-white mx-0 pt-4 pb-4 justify-content-around align-items-center">

            <div className="row text-center">
                <div className="col-12 col-md-2">
                    <div className="row pt-4">
                    <Link to="/entrenamientos" >
                        <h5 className='puntero encima'>Entrenamientos</h5>
                    </Link>
                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <div className="row pt-4">
                    <Link to="/reservas" >
                        <h5 className='puntero encima'>Reservas</h5>
                    </Link>
                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <div className="row pt-4">
                    <Link to="/Torneos" >
                        <h5 className='puntero encima'>Torneos</h5>
                    </Link>   
                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <div className="row pt-4">
                    <Link to="/SobreNosotros" >
                        <h5 className='puntero encima'>Contacto</h5>
                    </Link>      
                    </div>
                </div>
                <div className="col-6 d-block mx-auto col-md-2 offset-md-1">
                    <div className="row">
                        <Link to="/" >
                            <img src={logo} alt="Logo" className="puntero" />
                        </Link>
                    </div>
                </div>
            </div>
            

        </div>

    );
}

export default Footer;
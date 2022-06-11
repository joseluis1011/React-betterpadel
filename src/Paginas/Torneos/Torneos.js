import Navbar from "../../Layouts/Navbar";
import './Torneos.css';
import Footer from "../../Layouts/Footer";
import flechas from "../../imagenes/flechas.png";
import { getTorneos } from "../../Servicios/getTorneos";
import { useEffect, useState } from "react";
import AjaxLoader from "../../Componentes/AjaxLoader/AjaxLoader";
import Torneo from "../../Componentes/Torneo/Torneo";

function Torneos() {
    const [buscando, setBuscando] = useState(false);
    const [torneos, setTorneos] = useState([]);

    function obtenerTorneos() {
        setBuscando(true);
        getTorneos().then(torneos => {
            setTorneos(torneos);
            setBuscando(false);
        });
        
    }
    function muestraTorneo(torneo) {
        return <Torneo key={torneo.id} torneo={torneo}></Torneo>
    }
    useEffect(obtenerTorneos, []);

    return (
        <div>
            <Navbar />
            <div className="container px-0">

                <div className="row pt-4 pb-4">

                    <div className="col-12 pt-4 pb-4 dark-background text-white">
                        <div className="row">
                            <div className="col-12 pt-4 pb-4">
                                <div className="row">
                                    <h1 className="textorojo text-center pb-4"><img src={flechas} alt="Flechas" className="estiloflechas pb-2"></img><strong> Torneos </strong><img src={flechas} alt="Flechas" className="estiloflechas2 pt-2"></img></h1>
                                    <h4 className="text-center">En el centro se organizan torneos con el objetivo de competir contra otros jugadores y disfrutar de una gran jornada intensiva de 
                                        nuestro deporte favorito. Conoce más información y apúntate en los siguientes enlaces: 
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {buscando ? <AjaxLoader></AjaxLoader>
                                    :torneos.map(muestraTorneo)}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Torneos;
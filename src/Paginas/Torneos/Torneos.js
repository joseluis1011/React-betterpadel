import Navbar from "../../Layouts/Navbar";
import './Torneos.css';
import Footer from "../../Layouts/Footer";
import entreno2 from "../../imagenes/Fotos wpt/paco11.jpg";
import entreno1 from "../../imagenes/Fotos wpt/din5.jpg";
import entreno3 from "../../imagenes/Fotos wpt/ruiz7.jpg";
import flechas from "../../imagenes/flechas.png";

function Torneos() {

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

                    <div className="col-12 pt-4 pb-4">

                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <img src={entreno1} alt="Entreno1" className="foto2" />
                                </div>
                            </div>
                            <div className="col-6 align-self-center">
                                <h1 className="textorojo pb-4">I TORNEO DE VERANO BETTERPADEL</h1>
                                <h5 className="pb-4">Llega la primera edición de lo que serán nuestros torneos habituales en el centro. Un torneo eliminatorio que decidirá cuál es la primera mejor pareja 
                                    de nuestro centro. 
                                </h5>
                                <button type="button" className="btn btn-lg btn-dark custom-btn">Apúntate</button>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4 dark-background text-white">

                        <div className="row">
                            <div className="col-6 align-self-center">
                                <h1 className="textorojo pb-4">I TORNEO DE VERANO BETTERPADEL</h1>
                                <h5 className="pb-4">Llega la primera edición de lo que serán nuestros torneos habituales en el centro. Un torneo eliminatorio que decidirá cuál es la primera mejor pareja 
                                    de nuestro centro. 
                                </h5>
                                <button type="button" className="btn btn-lg btn-light custom-btn">Apúntate</button>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <img src={entreno2} alt="Entreno2" className="foto2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4">

                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <img src={entreno3} alt="Entreno3" className="foto2" />
                                </div>
                            </div>
                            <div className="col-6 align-self-center">
                                <h1 className="textorojo pb-4">I TORNEO DE VERANO BETTERPADEL</h1>
                                <h5 className="pb-4">Llega la primera edición de lo que serán nuestros torneos habituales en el centro. Un torneo eliminatorio que decidirá cuál es la primera mejor pareja 
                                    de nuestro centro. 
                                </h5>
                                <button type="button" className="btn btn-lg btn-dark custom-btn">Apúntate</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Torneos;
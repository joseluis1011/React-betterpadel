import Navbar from "../../Layouts/Navbar";
import './SobreNosotros.css';
import Footer from "../../Layouts/Footer";
import galeria4 from "../../imagenes/Rayoedit.png";
import galeria3 from "../../imagenes/Romaedit.png";
import galeria2 from "../../imagenes/Cuqui1.jpg";
import galeria1 from "../../imagenes/Loky2.jpg";

function SobreNosotros() {

    return (
        <div>
            <Navbar />
            <div className="container px-0">

                <div className="row pt-4 pb-4">

                    <div className="col-12 pt-4 pb-4 fondofoto text-white">
                        <div className="row">
                            <div className="col-12 pt-4 pb-4">
                                <div className="row">
                                    <h1 className="textorojo text-center pb-4"><strong>Historia de Betterpadel</strong></h1>
                                    <h4 className="text-center">Betterpadel surge de la necesidad que existe en Cartagena respecto a un gran deporte como es el pádel.
                                        La ciudad portuaria cuenta con varios centros para disfrutar de nuestro deporte, pero ninguno cumple con lo que nosotros buscábamos.
                                        Tras el boom del pádel, en nuestra ciudad es complicado encontrar un sitio en el que jugar en el mismo día, e incluso se complica
                                        la forma de reservar alguna hora en cualquier sitio. Por eso, hemos diseñado un sistema en el que no hay rodeos para poder jugar.
                                        Entras a la página, inicias sesión, eliges la pista que más te guste y seleccionas el día y la hora a jugar. Sencillo, ¿verdad?.
                                        Además, buscamos ser el primer centro de alto rendimiento en la ciudad, en el que puedas entrenar y algún día jugar a la altura de tus ídolos.
                                        La idea es proporcionar a nuestros jugadores lo necesario para sacar el máximo de ellos. 
                                        El pádel es un deporte en expansión, cada vez engancha a más gente como lo hizo con nosotros, y por eso queremos que sientas lo mismo 
                                        que nosotros y nos hagas partícipes de tu pasión.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="col-12">

                        <div className="row">
                            <div className="col-12 pt-4 pb-4 dark-background">
                                <div className="row">
                                    <h1 className="text-white text-center"><strong>Nuestro equipo</strong></h1>
                                </div>
                            </div>
                        </div>
                    </div>    

                    <div className="col-12 pt-4 pb-4 dark-background">

                        <div className="row">
                            <div className="col-3">
                                <div className="row">
                                    <img src={galeria1} alt="Equipo1" className="fotoequipo" />
                                    <h3 className="textorojo text-center pt-2 pb-2">Loky</h3>
                                    <h5 className="text-white text-center">El cerebro de la planificación, controla la web y juega a partes iguales.</h5>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <img src={galeria2} alt="Equipo2" className="foto2" />
                                    <h3 className="textorojo text-center pt-2 pb-2">Cuqui</h3>
                                    <h5 className="text-white text-center">La más pequeña y la encargada de cuidar a todos los jugadores del centro.</h5>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <img src={galeria3} alt="Equipo3" className="foto2" />
                                    <h3 className="textorojo text-center pt-2 pb-2">Roma</h3>
                                    <h5 className="text-white text-center">La más joven y juguetona del grupo, nuestra recogepelotas más rápida.</h5>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <img src={galeria4} alt="Equipo4" className="foto2" />
                                    <h3 className="textorojo text-center pt-2 pb-2">Rayo</h3>
                                    <h5 className="text-white text-center">El cabecilla del centro, experto en entrenamientos y rutinas de ejercicios.</h5>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-12 dark-background">
                        <div className="row text-center pt-10">
                            <h1 className="textorojo">Nosotros ponemos el contexto, tú eres el protagonista</h1>
                            <h3 className="text-white">Si te atreves a vivir esta experiencia o necesitas más información, contacta con nosotros</h3>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default SobreNosotros;
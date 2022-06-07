import Navbar from "../../Layouts/Navbar";
import './Entrenamientos.css';
import Footer from "../../Layouts/Footer";
import entreno2 from "../../imagenes/Fotos wpt/paco11.jpg";
import entreno1 from "../../imagenes/Fotos wpt/din5.jpg";
import entreno3 from "../../imagenes/Fotos wpt/ruiz7.jpg";
import galeria1 from "../../imagenes/Fotos wpt/din9.jpg";
import galeria2 from "../../imagenes/Fotos wpt/ari2.jpg";
import galeria3 from "../../imagenes/Fotos wpt/ale4.jpg";
import flechas from "../../imagenes/flechas.png";

function Entrenamientos() {

    return (
        <div>
            <Navbar />
            <div className="container px-0">

                <div className="row pt-4 pb-4">

                    <div className="col-12 pt-4 pb-4 dark-background text-white">
                        <div className="row">
                            <div className="col-12 pt-4 pb-4">
                                <div className="row">
                                    <h1 className="textorojo text-center pb-4"><img src={flechas} alt="Flechas" className="estiloflechas pb-2"></img><strong> Revolución del entrenamiento </strong><img src={flechas} alt="Flechas" className="estiloflechas2 pt-2"></img></h1>
                                    <h4 className="text-center">Traemos un nuevo método de entrenamiento con el objetivo de superar tu límite. Buscamos una forma de trabajo completamente enfocada en ti,
                                        creada exclusivamente para mejorar cada uno de tus movimientos en la pista. Para ello, centraremos un entrenador en ti, que siempre estará a tu lado
                                        para ofrecerte sus consejos y experiencias. El entrenador creará un plan de entrenamiento especial para ti, y podrás comentar con él tus
                                        sensaciones para que siempre estés cómodo y puedas dar lo máximo.
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
                                <h1 className="textorojo">Técnica</h1>
                                <h5>Golpear la pelota de la forma más adecuada en cada golpe distinto es diferencial a la hora de ganar puntos. Aprende a manejar cada situación de la mejor manera posible.
                                    Saques, remates, víboras, dejadas, globos, y un sinfín de golpes a dominar te esperan para ampliar tu catálogo de movimientos en la pista.
                                </h5>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4 dark-background text-white">

                        <div className="row">
                            <div className="col-6 align-self-center">
                                <h1 className="textorojo">Posicionamiento</h1>
                                <h5>La colocación dentro de la pista es crucial a la hora de realizar golpes complicados o hacer menos esfuerzos. Para realizar un buen resto, hacer una volea ganadora,
                                    saltar hacia un remate o devolverlo, es muy importante estar bien posicionado. La colocación en pista te hará ganar ventaja respecto a tus rivales.</h5>
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
                                <h1 className="textorojo">Trabajo</h1>
                                <h5>No hay éxito sin sacrificio. Los partidos son largos y siempre hay altibajos, pero la clave está en seguir trabajando con esfuerzo.
                                    Lucha cada bola como si fuera la última y consigue dar tu mejor versión en la pista.</h5>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4 dark-background text-white">
                        <div className="row">
                            <div className="col-12 pt-4 pb-4">
                                <div className="row">
                                    <h1 className="textorojo text-center pb-4">Revisión de vídeo</h1>
                                    <h4 className="text-center">Trabajar con sesiones de vídeo hará que te sea más fácil afianzar los conceptos que entrenes en la pista. Tus sesiones de
                                        entrenamiento serán grabadas con el objetivo de comentarlas con el entrenador y ver fácilmente que se puede mejorar. Este método acompañará a tu trabajo
                                        en pista para ir mejorando en todo momento y comparar con sesiones anteriores para comprobar tu progreso.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4 dark-background">

                        <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <img src={galeria1} alt="Galeria1" className="foto2" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <img src={galeria2} alt="Galeria2" className="foto2" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <img src={galeria3} alt="Galeria3" className="foto2" />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-12 dark-background pb-4">
                        <div className="row pt-10">
                            <h1 className="textorojo text-center">Nosotros ponemos el contexto, tú eres el protagonista</h1>
                            <h3 className="text-white text-center">Si te atreves a vivir esta experiencia o necesitas más información, contacta con nosotros</h3>

                            <form className="text-white">
                                <div className="form-group mb-3">
                                    <label>Nombre</label>
                                    <input type="" name="name" placeholder="Introduce tu nombre" className="form-control" />
                                    <span>{}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input type="" name="email" placeholder="Introduce tu email" className="form-control" />
                                    <span>{}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Mensaje</label>
                                    <textarea rows="3" name="mensaje" className="form-control" />
                                    <span>{}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-light custom-btn">Enviar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Entrenamientos;
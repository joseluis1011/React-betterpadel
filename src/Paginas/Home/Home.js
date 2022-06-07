import Navbar from "../../Layouts/Navbar";
import './Home.css';
import { Carousel } from "react-bootstrap";
import Footer from "../../Layouts/Footer";
import carrousel1 from "../../imagenes/Fotos wpt/fondo10.jpg";
import carrousel2 from "../../imagenes/Fotos wpt/din3.jpg";
import carrousel3 from "../../imagenes/Fotos wpt/marta1.jpg";
import composicion from "../../imagenes/Fotos wpt/composicion.png";
import entreno from "../../imagenes/Fotos wpt/ale12rec.png";
import { Link } from "wouter";
import rayo from "../../imagenes/rayo.png";
import martillo from "../../imagenes/martillo.png";
import corazon from "../../imagenes/corazon.png";
import galeria1 from "../../imagenes/Fotos wpt/ale13.jpg";
import galeria2 from "../../imagenes/Fotos wpt/din6.jpg";
import galeria3 from "../../imagenes/Fotos wpt/salazar2.jpg";
import galeria4 from "../../imagenes/Fotos wpt/paco7.jpg";

function Home() {

    return (
        <div>
            <Navbar />
            <div className="container px-0">

                <div className="row pb-4">

                    <div className="col-12 dark-background">
                        <div className="row px-0">


                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={carrousel1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>¿Quieres llegar a lo más alto?</h3>
                                        <p>Estás cerca de conseguirlo, solo necesitas un pequeño empujón.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={carrousel2}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Cartagena, ya estamos aquí</h3>
                                        <p>Partimos de la ciudad portuaria con el objetivo de revolucionar el pádel.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={carrousel3}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Conviértete en un profesional</h3>
                                        <p>Nosotros te damos los medios, sigue los pasos de tus ídolos y cumple tus sueños.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row text-center">
                            <div className="col-4 dark-background text-white pt-4">
                                <img src={rayo} alt="Rayo"></img>
                                <h3 className="text-center pt-2">Innovación</h3>
                                <p>Creamos una nueva forma de entrenar. Queremos verte en lo más alto, atrévete a probar nuestra fórmula.</p>
                            </div>
                            <div className="col-4 bg-white text-black pt-4">
                                <img src={martillo} alt="Martillo"></img>
                                <h3 className="text-center textorojo pt-2">Trabajo</h3>
                                <p>Quién algo quiere, algo le cuesta. Te aseguramos que tu esfuerzo merecerá la pena.</p>
                            </div>
                            <div className="col-4 dark-background text-white pt-4">
                                <img src={corazon} alt="Corazón"></img>
                                <h3 className="text-center pt-2">Pasión</h3>
                                <p>Todo es más sencillo cuando algo te encanta, y por eso haremos que te guste aún más este deporte.</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4">

                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <img src={entreno} alt="Entrenamientos" className="foto2" />
                                </div>
                            </div>
                            <div className="col-6 align-self-center">
                                <h1 className="textorojo pb-4">Entrenamientos</h1>
                                <h4 className="pb-4">Traemos un nuevo método de trabajo, con el que buscamos exprimir al máximo tus capacidades con el objetivo de que juegues de tú a tú con tus ídolos.</h4>
                                <Link className="nav-link" to="/entrenamientos">
                                    <button type="button" className="btn btn-lg btn-dark custom-btn">Más información</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 pt-4 dark-background text-white pb-4">

                        <div className="row">
                            <div className="col-6 align-self-center">
                                <h1 className="textorojo pb-4">Reserva de pistas</h1>
                                <h4 className="pb-4">Queremos formar parte de tu pasión por el pádel. Para ello te ofrecemos nuestras instalaciones y nuestras pistas para que los disfrutes como quieras.</h4>
                                <Link className="nav-link" to="/reservas">
                                    <button type="button" className="btn btn-lg btn-light custom-btn">Reserva de pistas</button>
                                </Link>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <img src={composicion} alt="Composición reservas" className="foto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pt-4 pb-4">

                        <div className="row">
                            <div className="col-3">
                                <div className="row">
                                    <img src={galeria3} alt="Galeria3" className="foto2" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <img src={galeria2} alt="Galeria2" className="foto2" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <img src={galeria1} alt="Galeria1" className="foto2" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <img src={galeria4} alt="Galeria4" className="foto2" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12">
                        <div className="col-8 offset-2 pb-4">
                            <div className="row">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.9973248510264!2d-0.9537039707566894!3d37.62593949873667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6341d076fc0d1f%3A0xc2de85d6fd50d0ef!2sC.%20Sof%C3%ADa%2C%2010%2C%2030392%20Cartagena%2C%20Murcia!5e0!3m2!1ses!2ses!4v1654012143512!5m2!1ses!2ses" title="Ubicación" width="800" height="600" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-12 dark-background">
                            <div className="row text-center pt-4 pb-4">
                                <h1 className="textorojo">El pádel llevado al máximo nivel</h1>
                                <h2 className="text-white">Te esperamos en nuestro centro deportivo</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Home;
import Navbar from "../../Layouts/Navbar";
import foto from "../../imagenes/descarga.jpeg";
import './Home.css';
import { Carousel } from "react-bootstrap";
import Footer from "../../Layouts/Footer";
import fototriple from "../../imagenes/composicion sin fondo.png";

function Home() {

    return (
        <div>
            <Navbar />
            <div className="container px-0">

                <div className="row">

                    <div className="col-12">
                        <div className="row">


                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={foto}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={foto}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={foto}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div class="col-10 offset-1">
                        <div className="row">
                            <div className="col-4 bg-dark">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas arcu non sapien blandit scelerisque. Mauris vel g
                                consectetur
                            </div>
                            <div className="col-4 bg-primary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas arcu non sapien blandit scelerisque. Mauris vel g
                            </div>
                            <div className="col-4 bg-dark">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas arcu non sapien blandit scelerisque. Mauris vel g
                            </div>

                        </div>
                    </div>
                    <div className="col-12 pt-4 bg-dark text-white pb-4">

                        <div className="row">
                            <div className="col-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas arcu non sapien blandit scelerisque. Mauris vel gravida erat. Proin leo lorem, semper facilisis libero id, interdum vestibulum tellus. Cras urna risus, semper et augue et, laoreet egestas odio. Proin interdum nisi vel mauris dapibus, eget dapibus nunc feugiat. Phasellus mollis non odio eu posuere. Morbi feugiat dictum enim, eget interdum orci laoreet eget.
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <img src={fototriple} className="foto" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 pt-4">

                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <img src={foto} className="foto" />
                                </div>
                            </div>
                            <div className="col-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas arcu non sapien blandit scelerisque. Mauris vel gravida erat. Proin leo lorem, semper facilisis libero id, interdum vestibulum tellus. Cras urna risus, semper et augue et, laoreet egestas odio. Proin interdum nisi vel mauris dapibus, eget dapibus nunc feugiat. Phasellus mollis non odio eu posuere. Morbi feugiat dictum enim, eget interdum orci laoreet eget.
                            </div>

                        </div>
                    </div>
                    <div class="col-8 offset-2 pt-3">
                        <div className="row">
                            <img src={foto} />
                        </div>
                    </div>
                    <div className="col-12 bg-dark text-white">
                        <div className="row">
                            <h1>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas arcu non sapien blandit scelerisque. Mauris vel gravida erat. Proin leo lorem, semper facilisis libero id, interdum vestibulum tellus. Cras urna risus, semper et augue et, laoreet egestas odio. Proin interdum nisi vel mauris dapibus, eget dapibus nunc feugiat. Phasellus mollis non odio eu posuere. Morbi feugiat dictum enim, eget interdum orci laoreet eget.
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default Home;
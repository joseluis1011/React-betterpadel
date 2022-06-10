import React from 'react';
import '../../Paginas/Torneos/Torneos.css';

const Torneo = (props) => {
    console.log(props.torneo);
    return (
        <div className="col-12 pt-4 pb-4">

            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <img src={props.torneo.image} alt="Entreno1" className="foto2" />
                    </div>
                </div>
                <div className="col-6 align-self-center">
                    <h1 className="textorojo pb-4">{props.torneo.title}</h1>
                    <h5 className="pb-4">{props.torneo.description}</h5>
                    <button type="button" className="btn btn-lg btn-dark custom-btn">Apúntate</button>
                </div>

            </div>
        </div>
    )
}

export default Torneo;
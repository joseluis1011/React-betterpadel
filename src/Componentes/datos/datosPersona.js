import React from 'react';

const datosPersona = (props) => {
    return (
            <div>
                <h5 className="card-title">Nombre</h5>
                <p className="card-text">{props.post.name}</p>
                <h5 className="card-title">Email</h5>
                <p className="card-text">{props.post.email}</p>
                <h5 className="card-title">Edad</h5>
                <p className="card-text">{props.post.edad}</p>
                <h5 className="card-title">Teléfono</h5>
                <p className="card-text">{props.post.telefono}</p>
            </div>

    )
}

export default datosPersona;
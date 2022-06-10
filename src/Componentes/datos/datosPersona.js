import React from 'react';

const datosPersona = (props) => {
    function ladoExist() {
        console.log(props.post.lado)
        if (props.post.lado) {
            return (
                <div>
                    <h5 className="card-title">Lado Bueno</h5>
                    <p className="card-text">{props.post.lado}</p>
                </div>
            );
        }else{
            <div>
                <h5 className="card-title">Lado Bueno</h5>
                <p className="card-text">Desconocido</p>
            </div>
        }
    }
    return (
        <div>
            <h5 className="card-title">Nombre</h5>
            <p className="card-text">{props.post.name}</p>
            <h5 className="card-title">Email</h5>
            <p className="card-text">{props.post.email}</p>
            {ladoExist()}
            <h5 className="card-title">Teléfono</h5>
            <p className="card-text">{props.post.telefono}</p>
        </div>

    )
}

export default datosPersona;
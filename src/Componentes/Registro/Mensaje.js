import React from 'react';
const Mensaje = (props) => {
    return (
        <tr>
            <td>{props.mensaje.email}</td>
            <td>{props.mensaje.name}</td>
            <td>{props.mensaje.mensaje}</td>
        </tr>
    )
}

export default Mensaje;
import React from 'react';

const Registro = (props) => {
    return (
        <tr>
            <td>{props.registro.user_id.email}</td>
            <td>{props.registro.pista}</td>
            <td>{props.registro.dia + "/" + props.registro.mes}</td>
            <td>{props.registro.hora}</td>
        </tr>
    )
}

export default Registro;
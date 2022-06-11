import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import AjaxLoader from '../AjaxLoader/AjaxLoader';

const ReservaActiva = (props) => {
    const [buscando, setBuscando] = useState(false);

    const deleteReserva = (event) => {
        event.preventDefault();

        const data = {
            id: props.reservaActiva.id,
        }
        setBuscando(true);

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/destroy`, data).then(res => {

            if (res.data.status === 200) {
                swal({
                    title: "Success", text: res.data.message, type:
                        "success",
                    icon: "success"
                }).then(function () {
                    window.location.reload();
                });
            }
            setBuscando(false);
        });

    }
    return (
        <tr>
            <td>{props.reservaActiva.pista}</td>
            <td>{props.reservaActiva.dia}</td>
            <td>{props.reservaActiva.mes}</td>
            <td>{props.reservaActiva.hora}</td>
            <td>
                {buscando?<AjaxLoader/>:<button className="btn btn-danger" onClick={deleteReserva}>Eliminar</button>}
            </td>
        </tr>
    )
}

export default ReservaActiva;
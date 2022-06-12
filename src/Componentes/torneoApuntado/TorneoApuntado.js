import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import AjaxLoader from '../AjaxLoader/AjaxLoader';

const TorneoApuntado = (props) => {
    const [buscando, setBuscando] = useState(false);
console.log(props)
    const deleteReserva = (event) => {
        event.preventDefault();

        const data = {
            id: props.torneo[0].id,
        }
        setBuscando(true);

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/destroy/torneoApuntado`, data).then(res => {

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
            <td>{props.torneo[0].title}</td>
            <td>{props.torneo[0].dia + "/" + props.torneo[0].mes}</td>
            <td>
                {buscando?<AjaxLoader/>:<button className="btn btn-dark custom-btn" onClick={deleteReserva}>Eliminar</button>}
            </td>
        </tr>
    )
}

export default TorneoApuntado;
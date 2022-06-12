import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import AjaxLoader from '../AjaxLoader/AjaxLoader';

const TorneoDasboard = (props) => {

    const [buscando, setBuscando] = useState(false);

    function deleteTorneo() {

        const data = {
            id: props.torneo.id,
        }
        setBuscando(true);

        axios.post(`http://betterpadel.atwebpages.com/betterpadel/public/api/destroy/torneo`, data).then(res => {

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
            <td>{props.torneo.id}</td>
            <td>{props.torneo.title}</td>
            <td>{props.torneo.dia + "/" + props.torneo.mes}</td>
            <td>
                {buscando?<AjaxLoader/>:<button className="btn btn-dark custom-btn" onClick={deleteTorneo}>Eliminar</button>}
            </td>
        </tr>
    )
}

export default TorneoDasboard;
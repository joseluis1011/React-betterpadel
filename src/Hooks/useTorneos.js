import { useEffect, useState } from 'react';
import { getTorneos } from '../Servicios/getTorneos';

const useTorneos = (getAllDatos) => {

    const [torneos, setTorneos] = useState([]);

    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(false);

    function obtenerDatos() {

        //Marcamos que estamos buscando los datos
        setBuscando(true);

        // Usamos el servicio de obtención de Datoss que hemos creado
        setBuscando(true);
        getTorneos().then(torneos => {
            setTorneos(torneos);
            setBuscando(false);
        });
    }

   

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerDatos, []);

    return {buscando,torneos};
}
export default useTorneos;
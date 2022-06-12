import axios from "axios";

export function getTorneoApuntado() {
    const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/mensajes`;
    return axios.get(apiURL)
        .then(response => {
            return response.data;
        })
}
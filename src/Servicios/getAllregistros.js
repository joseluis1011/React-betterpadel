import axios from "axios";

export function getAllregistros() {
    const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/registros`;
    return axios.get(apiURL)
        .then(response => {
            return response.data;
        })
}
import axios from "axios";

export function getRegistros() {
    const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/profile`;
    return axios.get(apiURL)
        .then(response => {
            return response.data;
        })
}
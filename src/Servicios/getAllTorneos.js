import axios from "axios";

export function getAllTorneos() {
    const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/userTorneoID`;
    return axios.get(apiURL)
        .then(response => {
            return response.data;
        })
}
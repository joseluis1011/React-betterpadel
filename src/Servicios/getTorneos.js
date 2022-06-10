import axios from "axios";

export function getTorneos() {
    const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/getTorneos`;
    return axios.get(apiURL)
        .then(response => {
            return response.data;
        })
}
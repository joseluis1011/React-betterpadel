import axios from "axios";

export function getPistaById(value, numeroPista) {
  const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/show/${value}/${numeroPista}`;
  return axios.get(apiURL)
    .then(response => {
      return response.data.pista;
    })
}
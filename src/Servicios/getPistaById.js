import axios from "axios";

export function getPistaById(value, numeroPista,mes) {
  const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/show/${value}/${numeroPista}/${mes}`;
  return axios.get(apiURL)
    .then(response => {
      return response.data.pista;
    })
}
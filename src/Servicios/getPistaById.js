import axios from "axios";

export function getPistaById (value,numeroPista) {
    //console.log(idDrink)
    const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/show/${value}/${numeroPista}`;
    return axios.get(apiURL)
      .then(response => {
          console.log(response.data.pista);
            return response.data.pista;     
    })
  }
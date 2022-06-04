import axios from "axios";

export function getRegistros () {
    //console.log(idDrink)
    const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/profile`;
    return axios.get(apiURL)
      .then(response => {
          console.log(response.data);
            return response.data;     
    })
  }
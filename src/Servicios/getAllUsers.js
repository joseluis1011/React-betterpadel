import axios from "axios";

export function getAllUsers() {
  const apiURL = `http://betterpadel.atwebpages.com/betterpadel/public/api/getUsers`;
  return axios.get(apiURL)
    .then(response => {
      return response.data;
    })
}
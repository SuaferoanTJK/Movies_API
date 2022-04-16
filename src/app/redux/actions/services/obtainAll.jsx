import axios from "axios";

const baseURL = "https://movies-api-server-tjk.herokuapp.com/movies";

const obtainAll = async (filter = "", value = "") => {
  let movies = [];
  let url = baseURL;
  if (filter !== "") {
    url = `${baseURL}/?${filter}=${value}`;
  }
  await axios.get(url).then((response) => {
    if (response.status === 200) {
      movies = response.data;
    } else {
      console.log("Status error");
    }
  });
  return movies;
};

export default obtainAll;

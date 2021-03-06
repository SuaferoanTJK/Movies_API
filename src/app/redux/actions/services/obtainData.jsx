import axios from "axios";

const baseURL = "http://localhost:4000/movies";

const obtainData = async (value = "") => {
  let movies = [];
  let url = baseURL;
  if (value !== "") {
    url = `${baseURL}/?q=${value}`;
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

export default obtainData;

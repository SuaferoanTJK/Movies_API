import axios from "axios";

const obtainAll = async (filter = "", value = "") => {
  let movies = [];
  let url = "http://localhost:4000/movies";
  if (filter !== "") {
    url = `http://localhost:4000/movies/?${filter}=${value}`;
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

import axios from "axios";

const obtainMovies = async (param) => {
  let movies = [];
  const url = `http://localhost:4000/movies/`;
  await axios.get(url).then((response) => {
    console.log(response);
    if (response.status === 200) {
      movies = response.data;
    } else {
      console.log("Status error");
    }
  });
  return movies;
};

export default obtainMovies;

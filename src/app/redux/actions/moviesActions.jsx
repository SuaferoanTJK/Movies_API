import { CHANGE_PAGE, GET_MOVIES, GET_TRENDING } from "../types/moviesTypes";
import obtainMovies from "./services/obtainMovies";

export const changePage = (payload) => {
  return {
    type: CHANGE_PAGE,
    payload,
  };
};

export const getMovies = (param) => {
  return async (dispatch) => {
    const movies = await obtainMovies(param);
    dispatch({
      type: GET_MOVIES,
      payload: movies,
    });
  };
};

export const getTrending = () => {
  return {
    type: GET_TRENDING,
  };
};

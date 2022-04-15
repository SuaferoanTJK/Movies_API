import { CHANGE_PAGE, GET_MOVIES, GET_TRENDING } from "../types/moviesTypes";
import obtainMovies from "./services/obtainMovies";

export const changePage = (payload) => {
  return {
    type: CHANGE_PAGE,
    payload,
  };
};

export const getMovies = (trending = true, filter, value) => {
  return async (dispatch) => {
    const movies = await obtainMovies(filter, value);
    dispatch({
      type: GET_MOVIES,
      payload: movies,
    });
    if (trending) {
      dispatch({
        type: GET_TRENDING,
      });
    }
  };
};

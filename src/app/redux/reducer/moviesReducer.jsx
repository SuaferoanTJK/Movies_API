import { CHANGE_PAGE, GET_MOVIES, GET_TRENDING } from "../types/moviesTypes";

const initialState = {
  page: "home",
  movies: [],
  trending: [],
};

export const moviesAPI = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_TRENDING:
      const isTrending = state.movies.filter(
        (movie) => movie.isTrending === true
      );
      return {
        ...state,
        trending: isTrending,
      };
    default:
      return state;
  }
};

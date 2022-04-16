import {
  GET_INITIAL_PAGE,
  CHANGE_PAGE,
  GET_ALL,
  GET_TRENDING,
  GET_MOVIES,
  GET_TV_SERIES,
  GET_BOOKMARKS,
} from "../types/moviesTypes";

const initialState = {
  page: "",
  all: [],
  trending: [],
  movies: [],
  series: [],
  bookmark: [],
};

export const moviesAPI = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case GET_ALL:
      return {
        ...state,
        all: action.payload,
      };
    case GET_TRENDING:
      const isTrending = state.all.filter(
        (element) => element.isTrending === true
      );
      return {
        ...state,
        trending: isTrending,
      };
    case GET_MOVIES:
      const isMovie = state.all.filter(
        (element) => element.category === "Movie"
      );
      return {
        ...state,
        movies: isMovie,
      };
    case GET_TV_SERIES:
      const isSerie = state.all.filter(
        (element) => element.category === "TV Series"
      );
      return {
        ...state,
        series: isSerie,
      };
    case GET_BOOKMARKS:
      const isBookmarked = state.all.filter(
        (element) => element.isBookmarked === true
      );
      return {
        ...state,
        bookmark: isBookmarked,
      };
    default:
      return state;
  }
};

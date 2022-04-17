import {
  GET_INITIAL_PAGE,
  CHANGE_PAGE,
  GET_DATA,
  SEARCH,
  CHANGE_BOOKMARK,
} from "../types/moviesTypes";

const initialState = {
  page: "",
  all: [],
  search: [],
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
        search: [],
      };
    case GET_DATA:
      return {
        ...state,
        all: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case CHANGE_BOOKMARK:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
};

import { CHANGE_PAGE } from "../types/moviesTypes";

const initialState = {
  page: "home",
};

export const moviesAPI = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

import { CHANGE_PAGE } from "../types/moviesTypes";

export const changePage = (payload) => {
  return {
    type: CHANGE_PAGE,
    payload,
  };
};

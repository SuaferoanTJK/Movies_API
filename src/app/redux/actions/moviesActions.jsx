import {
  GET_INITIAL_PAGE,
  CHANGE_PAGE,
  GET_ALL,
  GET_TRENDING,
  GET_MOVIES,
  GET_TV_SERIES,
  GET_BOOKMARKS,
} from "../types/moviesTypes";
import obtainAll from "./services/obtainAll";

export const getInitialPage = (payload) => {
  return {
    type: GET_INITIAL_PAGE,
    payload,
  };
};

export const changePage = (payload) => {
  return {
    type: CHANGE_PAGE,
    payload,
  };
};

export const getAll = (filter, value) => {
  return async (dispatch) => {
    const data = await obtainAll(filter, value);
    dispatch({
      type: GET_ALL,
      payload: data,
    });
  };
};

export const initialArrays = () => {
  return async (dispatch) => {
    const data = await obtainAll("", "");
    dispatch({
      type: GET_ALL,
      payload: data,
    });
    dispatch({
      type: GET_TRENDING,
    });
    dispatch({
      type: GET_MOVIES,
    });
    dispatch({
      type: GET_TV_SERIES,
    });
    dispatch({
      type: GET_BOOKMARKS,
    });
  };
};

import {
  GET_INITIAL_PAGE,
  CHANGE_PAGE,
  GET_DATA,
  SEARCH,
  CHANGE_BOOKMARK,
} from "../types/moviesTypes";
import obtainData from "./services/obtainData";

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

export const getData = (value) => {
  return async (dispatch) => {
    const data = await obtainData(value);
    dispatch({
      type: GET_DATA,
      payload: data,
    });
  };
};

export const searchData = (value) => {
  return async (dispatch) => {
    const search = await obtainData(value);
    dispatch({
      type: SEARCH,
      payload: search,
    });
  };
};

export const changeBookmark = (payload) => {
  return {
    type: CHANGE_BOOKMARK,
    payload,
  };
};
